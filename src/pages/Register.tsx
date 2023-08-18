import { useForm } from 'react-hook-form';
import { Button } from '../components/Form/Button';
import { CardWrapper } from '../components/Form/CardWrapper';
import { Input } from '../components/Form/Input';
import { TextRedirect } from '../components/Form/Textredirect';

interface IRegisterProps {
  name: string;
  email: string;
  password: string;
}
export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterProps>();
  const submitForm = (data: IRegisterProps) => {
    console.log(data);
  };
  return (
    <>
      <div className="bg-blue h-screen flex items-center justify-center ">
        <CardWrapper title="Faça o cadastro">
          <form onSubmit={handleSubmit(submitForm)}>
            <Input placeholder={'Nome'} {...register('name')} />
            <Input placeholder={'Email'} {...register('email')} />
            <Input placeholder={'Senha'} {...register('password')} />
            <Button />
          </form>
          <TextRedirect text="Já tem conta?" link="/" textRedirect="Login" />
        </CardWrapper>
      </div>
    </>
  );
}
