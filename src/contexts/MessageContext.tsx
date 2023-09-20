import { ReactNode, createContext, useState } from 'react';
import { IUsers } from '../interfaces/users.interface';

interface MessageContextData {
  setDestinatary: (destinatary: IUsers) => void;
  destinatary: IUsers | null;
}
interface IMessageProviderProps {
  children: ReactNode;
}
export const MessageContext = createContext({} as MessageContextData);

export function MessageProvider({ children }: IMessageProviderProps) {
  const [destinatary, setDestinatary] = useState<IUsers | null>(null);
  return (
    <MessageContext.Provider value={{ setDestinatary, destinatary }}>
      {children}
    </MessageContext.Provider>
  );
}
