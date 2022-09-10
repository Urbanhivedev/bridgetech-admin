import { lazy } from 'react';

const InboxAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/apps/inbox',
      component: lazy(() => import('./InboxApp')),
    },
  ],
};

export default InboxAppConfig;
