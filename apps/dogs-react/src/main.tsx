import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// QueryClient is from an external package which is popular among react developers
// for getting data from a server as it handles caching and retries out of the box
const queryClient = new QueryClient();

//ReactQueryDevtools is a package for inspecting the state of the queryClient
// by clicking the flower in the botton left corner when running
//todo remove/comment out QueryClientProvider before putting in production
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>
);
