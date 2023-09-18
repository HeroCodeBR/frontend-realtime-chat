import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { RouteApp } from './routes';
const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <RouteApp />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
