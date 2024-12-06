import { createRoute } from '@tanstack/react-router';

import { rootRoute } from './__root';

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <div className='py-4'>
    <h1>Welcome to the Home Page!</h1>
    <p>Go to Users page for check users api</p>
  </div>,
});
