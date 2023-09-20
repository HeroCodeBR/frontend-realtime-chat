import { FormEvent, useRef } from 'react';
import send from '../../assets/send.png';
import { useAuth } from '../../hooks/auth.hooks';
import { useMessage } from '../../hooks/message.hooks';
import { useRoom } from '../../hooks/room.hooks';
import { useSocket } from '../../hooks/socket.hooks';
export const Footer = () => {
  const { socket } = useSocket();
  const { room } = useRoom();
  const { user } = useAuth();
  const { destinatary, setMessages, messages } = useMessage();
  console.log('🚀 ~ file: Footer.tsx:12 ~ Footer ~ messages:', messages);
  const messageRef = useRef<HTMLInputElement | null>(null);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const message = messageRef.current?.value;
    e.preventDefault();
    if (message) {
      const messageSendData = {
        room_id: room?._id,
        message,
      };
      socket?.emit('message', messageSendData);
      addMessagetoChat();
      messageRef.current!.value = '';
    }
  };

  const addMessagetoChat = () => {
    const message = messageRef.current!.value;
    const data = {
      room_id: room!._id,
      body: message,
      createdAt: Date.now(),
      to_user_id: destinatary!._id,
      from_user_id: user!._id,
      id: Date.now(),
      viewed_by_the_user: false,
    };
    setMessages([...messages, data]);
  };
  return (
    <footer className="w-full relative  bottom-0 bg-blue-300 h-24 flex items-center">
      <form
        className="w-full relative  bottom-0 bg-blue-300 h-24 flex items-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          placeholder="Digite aqui sua mensagem..."
          className="w-full px-5 py-4 rounded-lg bg-white mx-3"
          ref={messageRef}
        />
        <button type="submit" className="absolute right-8">
          <i aria-hidden="true">
            <img src={send} alt="" />
          </i>
        </button>
      </form>
    </footer>
  );
};
