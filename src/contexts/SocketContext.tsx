import { ReactNode, createContext, useState } from 'react';
import { Socket } from 'socket.io-client';

interface SocketContextData {
  socket: Socket | null;
  setSocket: (socket: Socket) => void;
}
interface ISocketProviderProps {
  children: ReactNode;
}
export const SocketContext = createContext({} as SocketContextData);

export function SockerProvider({ children }: ISocketProviderProps) {
  const [socket, setSocket] = useState<Socket | null>(null);
  return (
    <SocketContext.Provider value={{ setSocket, socket }}>
      {children}
    </SocketContext.Provider>
  );
}
