import { useContext } from 'react';
import { SocketContext } from '../contexts/SocketContext';

export const useSocket = () => {
  const provider = useContext(SocketContext);
  if (!provider)
    throw new Error('useSocket must be used within a SocketProvider');
  return provider;
};
