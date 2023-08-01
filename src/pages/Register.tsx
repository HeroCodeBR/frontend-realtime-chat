import { Button } from '../components/Button';
import { CardWrapper } from '../components/CardWrapper';
import { Input } from '../components/Input';
import { TextRedirect } from '../components/Textredirect';

export function Register() {
  return (
    <>
      <div className="bg-blue h-screen flex items-center justify-center ">
        <CardWrapper title="Faça o cadastro">
          <Input placeholder={'Nome'} />
          <Input placeholder={'Email'} />
          <Input placeholder={'Senha'} />
          <Button />
          <TextRedirect text="Já tem conta?" link="/" textRedirect="Login" />
        </CardWrapper>
      </div>
    </>
  );
}
