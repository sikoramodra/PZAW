import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Form from './Form.jsx';
import Gallery from './Gallery.jsx';

function Task04() {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Form />
      </QueryClientProvider>
      <Gallery />
    </div>
  );
}

export default Task04;
