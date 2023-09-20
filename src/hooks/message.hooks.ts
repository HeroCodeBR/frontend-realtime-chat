import { useContext } from 'react';
import { MessageContext } from '../contexts/MessageContext';

export const useMessage = () => {
  const provider = useContext(MessageContext);
  if (!provider)
    throw new Error('useMessage must be used within a SocketProvider');
  return provider;
};
