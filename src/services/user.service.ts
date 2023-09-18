import {
  ILogin,
  ILoginResponse,
  IRegisterUser,
} from '../interfaces/users.interface';
import { api } from '../server/api';

const login = async ({ email, password }: ILogin): Promise<ILoginResponse> => {
  const response = await api.post<ILoginResponse>('/users/auth', {
    email,
    password,
  });
  return response.data;
};

const createUser = async ({
  name,
  email,
  password,
}: IRegisterUser): Promise<IRegisterUser> => {
  const response = await api.post<IRegisterUser>('/users', {
    name,
    email,
    password,
  });
  return response.data;
};

export { createUser, login };
