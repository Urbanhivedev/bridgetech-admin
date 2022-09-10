import { lazy } from 'react';

const Error500PageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/apps/errors/error-500',
      component: lazy(() => import('./Error500Page')),
    },
  ],
};

export default Error500PageConfig;
