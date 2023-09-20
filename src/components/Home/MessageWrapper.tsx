import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/auth.hooks';
import { useMessage } from '../../hooks/message.hooks';
import { useRoom } from '../../hooks/room.hooks';
import { useSocket } from '../../hooks/socket.hooks';
import { MessageFromUser } from './MessageFromUser';
import { MessageToUser } from './MessageToUser';

export function MessageWrapper() {
  const { socket } = useSocket();
  const { room } = useRoom();
  const { user } = useAuth();
  const { messages, setMessages, destinatary } = useMessage();
  const [newMessage, setNewMessage] = useState<string>('');
  const joinRoom = () => {
    socket?.emit('join_room', room?._id);
  };
  const listenRoomMessages = () => {
    socket?.on('room_message', (data: string) => {
      setNewMessage(data);
    });
  };
  useEffect(() => {
    if (newMessage !== '') {
      const messageData = {
        room_id: room!._id,
        body: newMessage,
        createdAt: Date.now(),
        email: destinatary?.email,
        name: destinatary?.name,
        id: Date.now(),
      };
      setMessages([...messages, messageData]);
    }
  }, [destinatary, user, newMessage]);

  useEffect(() => {
    joinRoom();
  }, [room]);

  useEffect(() => {
    listenRoomMessages();
  }, [newMessage]);
  return (
    <div className=" flex flex-col h-full overflow-y-scroll">
      {messages.map((message, index) => {
        return message.from_user_id === user?._id ? (
          <MessageFromUser key={index} message={message} />
        ) : (
          <MessageToUser key={index} message={message} />
        );
      })}
      {/* <MessageFromUser />
      <MessageToUser />
      <MessageFromUser />
      <MessageToUser />
      <MessageFromUser />
      <MessageToUser />
      <MessageFromUser /> */}
    </div>
  );
}
