import { CardWrapper } from '../components/Home/CardWrapper';
import { Footer } from '../components/Home/Footer';
import { Header } from '../components/Home/Header';
import { MessageWrapper } from '../components/Home/MessageWrapper';
import { Navbar } from '../components/Home/Navbar';
import { SocketProvider } from '../contexts/SocketContext';
import { useMessage } from '../hooks/message.hooks';
export function Home() {
  const { destinatary } = useMessage();

  return (
    <SocketProvider>
      <div className="flex w-full">
        <div className="w-1/2 overflow-y-scroll h-screen">
          <Navbar />
          <CardWrapper />
        </div>
        <div className="w-1/2 bg-blue-50 h-screen flex flex-col">
          {destinatary && (
            <>
              <Header />
              <MessageWrapper />
              <Footer />
            </>
          )}
        </div>
      </div>
    </SocketProvider>
  );
}
