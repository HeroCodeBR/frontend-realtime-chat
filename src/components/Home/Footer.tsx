import send from '../../assets/send.png';
export const Footer = () => {
  return (
    <footer className="w-full relative  bottom-0 bg-blue-300 h-24 flex items-center">
      <input
        type="text"
        placeholder="Digite aqui sua mensagem..."
        className="w-full px-5 py-4 rounded-lg bg-white mx-3"
      />
      <i aria-hidden="true" className="absolute right-8">
        <img src={send} alt="" />
      </i>
    </footer>
  );
};
