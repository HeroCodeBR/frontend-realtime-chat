import { IDataRoomProps, IRoomProps } from '../interfaces/rooms.interface';
import { api } from '../server/api';

const header = localStorage.getItem('token');
if (!header) throw new Error('Token not found');
const getAllRooms = async (): Promise<IDataRoomProps[]> => {
  const result = await api.get<IDataRoomProps[]>('/rooms', {
    headers: {
      Authorization: `Bearer ${header}`,
    },
  });

  return result.data;
};

const getRoomByEmailDestinatary = async (
  email: string,
): Promise<IRoomProps> => {
  const result = await api.get<IRoomProps>(`/rooms/${email}`, {
    headers: {
      Authorization: `Bearer ${header}`,
    },
  });
  return result.data;
};
const createRoom = async (email: string): Promise<IRoomProps> => {
  const result = await api.post<IRoomProps>(
    '/rooms',
    {
      email,
    },
    {
      headers: {
        Authorization: `Bearer ${header}`,
      },
    },
  );
  return result.data;
};
export { createRoom, getAllRooms, getRoomByEmailDestinatary };
