import { AxiosResponse } from 'axios';
import { ILogin, ILoginResponse } from '../interfaces/users.interface';
import { api } from '../server/api';

const login = async ({
  email,
  password,
}: ILogin): Promise<AxiosResponse<ILoginResponse>> => {
  console.log('🚀 ~ file: user.service.ts:9 ~ password:', email, password);
  const response = await api.post<AxiosResponse<ILoginResponse>>(
    '/users/auth',
    {
      email,
      password,
    },
  );
  return response.data;
};

export { login };
