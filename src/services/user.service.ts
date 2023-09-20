import {
  ILogin,
  ILoginResponse,
  IRegisterUser,
  IUsers,
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

const uploadImage = async (formData: FormData): Promise<void> => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('Token not found');

  const response = await api.post<void>('/users/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

const searchSuggestions = async (email: string): Promise<IUsers[]> => {
  const token = localStorage.getItem('token');
  if (!token || token === '') {
    throw new Error('Token not found');
  }
  const response = await api.get<IUsers[]>(`/users/filter/${email}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export { createUser, login, searchSuggestions, uploadImage };
