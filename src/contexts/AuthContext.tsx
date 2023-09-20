import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { IUsers } from '../interfaces/users.interface';
interface IAuthProviderProps {
  children: React.ReactNode;
}
interface IAuthContextProps {
  user: IUsers | null;
  isAuthenticated: boolean;
  setUser: Dispatch<SetStateAction<IUsers | null>>;
  singOut: () => void;
}

export const AuthContext = createContext({} as IAuthContextProps);

export function AuthProvider({ children }: IAuthProviderProps) {
  const [user, setUser] = useState<IUsers | null>(() => {
    const user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user) as IUsers;
    }
    return null;
  });
  function singOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
  }
  const isAuthenticated = !!user;
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, setUser, singOut }}>
      {children}
    </AuthContext.Provider>
  );
}
