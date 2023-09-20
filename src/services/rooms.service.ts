import { IDataRoomProps } from '../interfaces/rooms.interface';
import { api } from '../server/api';

const getAllRooms = async (): Promise<IDataRoomProps[]> => {
  const header = localStorage.getItem('token');
  if (!header) throw new Error('Token not found');

  const result = await api.get<IDataRoomProps[]>('/rooms', {
    headers: {
      Authorization: `Bearer ${header}`,
    },
  });

  return result.data;
};

export { getAllRooms };
