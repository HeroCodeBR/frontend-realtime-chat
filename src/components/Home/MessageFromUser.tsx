//mensagem DO usuario
import check from '../../assets/check.png';
import { IMessageData } from '../../interfaces/messages.interface';
export const MessageFromUser = ({ message }: { message: IMessageData }) => {
  console.log(
    '🚀 ~ file: MessageFromUser.tsx:5 ~ MessageFromUser ~ message:',
    message,
  );
  return (
    <div className="bg-blue text-white rounded-lg w-1/2 ml-auto mt-4 p-3 mr-4">
      <p className="font-light">{message.body}</p>
      <div className="flex items-center justify-end text-sm">
        <p className="mr-3 font-light">10:56 AM</p>
        <img src={check} alt="" />
      </div>
    </div>
  );
};
