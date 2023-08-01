import { Button } from '../components/Button';
import { CardWrapper } from '../components/CardWrapper';
import { Input } from '../components/Input';
import { TextRedirect } from '../components/Textredirect';

export function Login() {
  return (
    <>
      <div className="bg-blue h-screen flex items-center justify-center ">
        <CardWrapper title="Faça o Login">
          <Input placeholder={'Email'} />
          <Input placeholder={'Senha'} />
          <Button />
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
