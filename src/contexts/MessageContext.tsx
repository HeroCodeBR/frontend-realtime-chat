import { ReactNode, createContext, useState } from 'react';
import { IMessageData } from '../interfaces/messages.interface';
import { IUsers } from '../interfaces/users.interface';

interface MessageContextData {
  setDestinatary: (destinatary: IUsers) => void;
  destinatary: IUsers | null;
  setMessages: (message: IMessageData[]) => void;
  messages: IMessageData[];
}
interface IMessageProviderProps {
  children: ReactNode;
}
export const MessageContext = createContext({} as MessageContextData);

export function MessageProvider({ children }: IMessageProviderProps) {
  const [destinatary, setDestinatary] = useState<IUsers | null>(null);
  const [messages, setMessages] = useState<IMessageData[]>([]);

  return (
    <MessageContext.Provider
      value={{ setDestinatary, destinatary, messages, setMessages }}
    >
      {children}
    </MessageContext.Provider>
  );
}
