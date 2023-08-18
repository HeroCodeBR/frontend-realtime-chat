import { useForm } from 'react-hook-form';
import { Button } from '../components/Form/Button';
import { CardWrapper } from '../components/Form/CardWrapper';
import { Input } from '../components/Form/Input';
import { TextRedirect } from '../components/Form/Textredirect';

interface ILoginProps {
  email: string;
  password: string;
}
export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginProps>();
  const submitForm = (data: ILoginProps) => {
    console.log(data);
  };
  return (
    <>
      <div className="bg-blue h-screen flex items-center justify-center ">
        <CardWrapper title="Faça o Login">
          <form onSubmit={handleSubmit(submitForm)}>
            <Input placeholder={'Email'} {...register('email')} />
            <Input placeholder={'Senha'} {...register('password')} />
            {errors.email && <span>Campo de email é obriogatório</span>}
            {errors.password && <span>Campo de password é obriogatório</span>}
            <Button />
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
