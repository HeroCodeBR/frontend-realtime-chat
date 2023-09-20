import { useEffect } from 'react';
import { useQuery } from 'react-query';
import socketIo from 'socket.io-client';
import { useAuth } from '../../hooks/auth.hooks';
import { useSocket } from '../../hooks/socket.hooks';
import { IDataRoomProps } from '../../interfaces/rooms.interface';
import { api } from '../../server/api';
import { getAllRooms } from '../../services/rooms.service';
import { ListContacts } from './ListContacts';
export function CardWrapper() {
  const { socket, setSocket, setUsersOnline, isUserOnline } = useSocket();
  const { user } = useAuth();

  const { data, isLoading } = useQuery('getAllRooms', getAllRooms);

  useEffect(() => {
    const apiUrl = api.defaults.baseURL;
    if (apiUrl) {
      const newSocket = socketIo(apiUrl, {
        transports: ['websocket'],
        query: {
          user_id: user?._id,
        },
      });
      setSocket(newSocket);
    }
  }, [user?._id, setSocket]);
  useEffect(() => {
    socket?.on('connect', () => {
      console.log('connected', user?._id);
      socket?.emit('user_connected', user?._id);
      socket?.on('updateUserStatus', (data: string[]) => {
        setUsersOnline(data);
      });
    });
  }, [socket]);

  return (
    <>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        data &&
        data.map((rooms: IDataRoomProps, index: number) => {
          if (rooms) {
            return (
              <ListContacts
                isUserOnline={isUserOnline(rooms.toUserMessage._id)}
                user={rooms?.toUserMessage}
                lastMessage={rooms?.lastMessage}
                key={index}
                room={rooms.room}
                count={rooms.count}
              />
            );
          }
        })
      )}
    </>
  );
}
