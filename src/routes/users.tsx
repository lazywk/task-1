import { createRoute } from '@tanstack/react-router';

import { UsersMain } from '@/components/features/users/UsersMain';

import { rootRoute } from './__root';

export const usersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/users',
  component: () => (
    <div className="pt-3">
      <h1>Users Us Page</h1>
      <div>
        <UsersMain />
      </div>
    </div>
  ),
});
