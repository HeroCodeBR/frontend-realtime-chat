import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { Button } from '../components/Form/Button';
import { CardWrapper } from '../components/Form/CardWrapper';
import { Input } from '../components/Form/Input';
import { TextRedirect } from '../components/Form/Textredirect';
import { IRegisterUser, IResponseError } from '../interfaces/users.interface';
import { createUser } from '../services/user.service';

interface IRegisterProps {
  name: string;
  email: string;
  password: string;
}
export function Register() {
  const navigate = useNavigate();
  const schema = Yup.object().shape({
    name: Yup.string().required('Campo de nome obrigatório'),
    email: Yup.string()
      .email('Digite um Email válido')
      .required('Campo de email obrigatório'),
    password: Yup.string()
      .min(6, 'Mínimo 6 caracteres')
      .required('Campo obrigatório'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterProps>({ resolver: yupResolver(schema) });

  const { mutate: mutateRegister } = useMutation<
    IRegisterUser,
    AxiosError<IResponseError>,
    IRegisterUser
  >(createUser, {
    onSuccess: (response) => {
      toast.success('Usuário cadastrado com sucesso!');
      redirectToLogin();
    },
    onError: (error: AxiosError<IResponseError>) => {
      toast.error(error.response?.data.message);
    },
  });

  const redirectToLogin = () => {
    navigate('/');
  };

  const submitForm = (data: IRegisterProps) => {
    mutateRegister({
      name: data.name,
      email: data.email,
      password: data.password,
    });
  };
  return (
    <>
      <div className="bg-blue h-screen flex items-center justify-center ">
        <CardWrapper title="Faça o cadastro">
          <form onSubmit={handleSubmit(submitForm)}>
            <Input
              placeholder={'Nome'}
              {...register('name')}
              error={errors.name && errors.name.message}
            />
            <Input
              placeholder={'Email'}
              {...register('email')}
              error={errors.email && errors.email.message}
            />
            <Input
              placeholder={'Senha'}
              {...register('password')}
              type="password"
              error={errors.password && errors.password.message}
            />
            <Button title="Cadastrar" />
          </form>
          <TextRedirect text="Já tem conta?" link="/" textRedirect="Login" />
        </CardWrapper>
      </div>
    </>
  );
}
