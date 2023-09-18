import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/auth.hooks';

interface IRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<IRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={'/'} />;
  }

  return <>{children}</>;
};

export { PrivateRoute };
