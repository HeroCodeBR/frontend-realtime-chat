import { createContext, useState } from 'react';
import { IRoomProps } from '../interfaces/rooms.interface';
interface IRoomContextData {
  room: IRoomProps | null;
  setRoom: (room: IRoomProps) => void;
}
interface IRoomProviderProps {
  children: React.ReactNode;
}
export const RoomContext = createContext({} as IRoomContextData);

export function RoomProvider({ children }: IRoomProviderProps) {
  const [room, setRoom] = useState<IRoomProps | null>(null);
  return (
    <RoomContext.Provider value={{ room, setRoom }}>
      {children}
    </RoomContext.Provider>
  );
}
