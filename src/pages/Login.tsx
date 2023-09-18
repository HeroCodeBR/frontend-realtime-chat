import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Button } from '../components/Form/Button';
import { CardWrapper } from '../components/Form/CardWrapper';
import { Input } from '../components/Form/Input';
import { TextRedirect } from '../components/Form/Textredirect';
import { useAuth } from '../hooks/auth.hooks';
import { ILoginResponse, IResponseError } from '../interfaces/users.interface';
import { login } from '../services/user.service';

interface ILoginProps {
  email: string;
  password: string;
}
export function Login() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um Email válido')
      .required('Campo de email obrigatório'),
    password: Yup.string().required('Campo obrigatório'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginProps>({ resolver: yupResolver(schema) });

  const navigate = useNavigate();
  const { setUser } = useAuth();

  const { mutate: mutateLogin, isLoading } = useMutation<
    ILoginResponse,
    AxiosError<IResponseError>,
    ILoginProps
  >(login, {
    onSuccess: (response) => {
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      setUser(response.user);
      redirectUser();
    },
    onError: (error) => {
      console.log('error', error);
    },
  });
  const submitForm = (data: ILoginProps) => {
    mutateLogin({ email: data.email, password: data.password });
  };

  const redirectUser = () => {
    navigate('/home');
  };
  return (
    <>
      <div className="bg-blue h-screen flex items-center justify-center ">
        <CardWrapper title="Faça o Login">
          <form onSubmit={handleSubmit(submitForm)}>
            <Input
              placeholder={'Email'}
              {...register('email')}
              type="text"
              error={errors.email && errors.email.message}
            />

            <Input
              placeholder={'Senha'}
              {...register('password')}
              type="password"
              error={errors.password && errors.password.message}
            />
            <Button title={isLoading ? 'Entrando...' : 'Entrar'} />
          </form>
          <TextRedirect
            text="Não tem conta?"
            link="/register"
            textRedirect="Cadastre-se"
          />
        </CardWrapper>
      </div>
    </>
  );
}
