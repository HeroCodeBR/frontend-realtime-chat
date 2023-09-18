import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './contexts/AuthContext';
import { RouteApp } from './routes';
const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouteApp />
        </QueryClientProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
