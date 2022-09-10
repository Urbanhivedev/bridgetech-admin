import { lazy } from 'react';

const BookDevConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/apps/bookdev',
      component: lazy(() => import('./BookDevApp')),
    },
  ],
};

export default BookDevConfig;


