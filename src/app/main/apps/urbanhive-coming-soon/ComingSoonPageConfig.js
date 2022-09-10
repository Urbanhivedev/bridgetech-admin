import { lazy } from 'react';

const ComingSoonPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  // routes: [
  //   {
  //     path: '/apps/coming-soon',
  //     component: lazy(() => import('./ComingSoonPage')),
  //   },
  // ],
  routes: [
    {
      path: '/apps/coming-soon1',
      component: lazy(() => import('./ComingSoonPage')),
    },
    {
      path: '/apps/coming-soon2',
      component: lazy(() => import('./ComingSoonPage')),
    },
    {
      path: '/apps/coming-soon3',
      component: lazy(() => import('./ComingSoonPage')),
    },
    {
      path: '/apps/coming-soon4',
      component: lazy(() => import('./ComingSoonPage')),
    },
  ],
};

export default ComingSoonPageConfig;
