import { lazy } from 'react';

const ProfileConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/apps/profile',
      component: lazy(() => import('./ProfileApp')),
    },
  ],
};

export default ProfileConfig;


