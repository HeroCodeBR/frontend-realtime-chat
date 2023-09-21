import { IMessageData } from '../../interfaces/messages.interface';

//mensagem PARA o usuario
export const MessageToUser = ({ message }: { message: IMessageData }) => {
  return (
    <div className="bg-white text-black rounded-lg w-1/2 mr-auto mt-4 p-3 ml-4">
      <p className="font-light">{message.body}</p>
      <div className="flex items-center justify-start text-sm mt-2 ">
        <p className="mr-3 font-light text-gray-200">10:56 AM</p>
      </div>
    </div>
  );
};
