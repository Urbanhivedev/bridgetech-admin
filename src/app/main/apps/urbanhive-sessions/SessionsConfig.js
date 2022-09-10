import { lazy } from 'react';

const ProfileConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/apps/sessions',
      component: lazy(() => import('./SessionsApp')),
    },
  ],
};

export default ProfileConfig;


