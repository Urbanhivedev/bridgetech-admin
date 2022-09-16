import { lazy } from 'react';

const RegisteredUsersConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/apps/admin/registeredUsers',
      component: lazy(() => import('./registeredUsersApp')),
    },
  ],
};

export default RegisteredUsersConfig;


