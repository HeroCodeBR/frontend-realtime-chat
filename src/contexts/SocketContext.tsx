import { ReactNode, createContext, useState } from 'react';
import { Socket } from 'socket.io-client';

interface SocketContextData {
  socket: Socket | null;
  setSocket: (socket: Socket) => void;
  setUsersOnline: (users: string[]) => void;
  usersOnline: string[];
  isUserOnline: (userId: string) => boolean;
}
interface ISocketProviderProps {
  children: ReactNode;
}
export const SocketContext = createContext({} as SocketContextData);

export function SocketProvider({ children }: ISocketProviderProps) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [usersOnline, setUsersOnline] = useState<string[]>([]);
  function isUserOnline(userId: string) {
    const verify: boolean = usersOnline.includes(userId);

    return verify;
  }
  return (
    <SocketContext.Provider
      value={{ setSocket, socket, setUsersOnline, usersOnline, isUserOnline }}
    >
      {children}
    </SocketContext.Provider>
  );
}
