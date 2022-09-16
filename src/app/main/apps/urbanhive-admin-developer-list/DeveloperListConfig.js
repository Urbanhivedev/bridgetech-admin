import { lazy } from 'react';

const DeveloperListConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/apps/admin/developerlist',
      component: lazy(() => import('./developerListApp')),
    },
  ],
};

export default DeveloperListConfig;


