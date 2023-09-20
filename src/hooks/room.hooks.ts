import { useContext } from 'react';
import { RoomContext } from '../contexts/RoomContext';

export const useRoom = () => {
  const provider = useContext(RoomContext);
  if (!provider) throw new Error('useRoom must be used within a RoomProvider');
  return provider;
};
