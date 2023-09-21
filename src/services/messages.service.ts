import {
  ICreateMessage,
  IMessageData,
  IOutputMessage,
} from '../interfaces/messages.interface';
import { api } from '../server/api';

const token = localStorage.getItem('token');
if (!token) throw new Error('Token not found');
const getHistoricMessages = async (email: string): Promise<IMessageData[]> => {
  const result = await api.get<IMessageData[]>(`/messages/historic/${email}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};
const createMessageDatabase = async (
  message: ICreateMessage,
): Promise<IOutputMessage> => {
  const result = await api.post<IOutputMessage>(
    '/messages',
    {
      message: message,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return result.data;
};

export { createMessageDatabase, getHistoricMessages };
