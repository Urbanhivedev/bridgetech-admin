import { lazy } from 'react';


const CandidateAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/candidates',
      component: lazy(() => import('./CandidateApp')),
    },
  ],
};

export default CandidateAppConfig;
