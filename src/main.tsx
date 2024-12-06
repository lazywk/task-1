import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRouter, RouterProvider } from '@tanstack/react-router';

// Import routes
import { rootRoute } from './routes/__root';
import { indexRoute } from './routes/index';
import { usersRoute } from './routes/users';

import './index.css';

import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './store';

rootRoute.addChildren([indexRoute, usersRoute]);

const router = createRouter({
  routeTree: rootRoute,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </PersistGate>
  </Provider>,
);
