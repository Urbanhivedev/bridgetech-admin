import { lazy } from 'react';

const ProfileConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/apps/bootcamp',
      component: lazy(() => import('./BootcampApp')),
    },
  ],
};

export default ProfileConfig;


