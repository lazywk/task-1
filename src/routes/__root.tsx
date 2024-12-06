import { createRootRoute, Outlet } from '@tanstack/react-router';

import Header from '@/components/features/Header';

interface NavItemTypes {
  key: string;
  path: string;
  label: string;
}

export const navigation: NavItemTypes[] = [
  {
    key: 'home',
    path: '/',
    label: 'Home',
  },
  {
    key: 'users',
    path: '/users',
    label: 'Users',
  },
];

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </>
  ),
});
