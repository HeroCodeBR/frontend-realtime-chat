import { useEffect, useRef, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useAuth } from '../../hooks/auth.hooks';
import { useMessage } from '../../hooks/message.hooks';
import { useRoom } from '../../hooks/room.hooks';
import { useSocket } from '../../hooks/socket.hooks';
import { getHistoricMessages } from '../../services/messages.service';
import { MessageFromUser } from './MessageFromUser';
import { MessageToUser } from './MessageToUser';

export function MessageWrapper() {
  const queryClient = useQueryClient();
  const { socket } = useSocket();
  const { room } = useRoom();
  const { user } = useAuth();
  const { messages, setMessages, destinatary } = useMessage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [newMessage, setNewMessage] = useState<string>('');
  useQuery({
    queryKey: ['getHistoricMessages', destinatary!.email],
    queryFn: async () => await getHistoricMessages(destinatary!.email),

    onSuccess: (data) => {
      setMessages(data);
      joinRoom();
      listenRoomMessages();
    },
  });

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const refreshQuery = () => {
    void queryClient.invalidateQueries('getHistoricMessages');
  };

  const joinRoom = () => {
    socket?.emit('join_room', room?._id);
  };
  const listenRoomMessages = () => {
    socket?.on('room_message', (data: string) => {
      setNewMessage(data);
      refreshQuery();
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
        to_user_id: '',
        from_user_id: '',
        viewed_by_the_user: false,
        id: Date.now(),
      };
      setMessages([...messages, messageData]);
    }
  }, [destinatary, newMessage]);

  return (
    <div
      className=" flex flex-col h-full overflow-y-scroll pb-4"
      ref={scrollRef}
    >
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
