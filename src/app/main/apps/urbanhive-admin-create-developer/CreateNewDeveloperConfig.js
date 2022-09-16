import { lazy } from 'react';

const CreateNewDeveloperConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/apps/admin/createdeveloper',
      component: lazy(() => import('./CreateNewDeveloperApp')),
    },
  ],
};

export default CreateNewDeveloperConfig;


