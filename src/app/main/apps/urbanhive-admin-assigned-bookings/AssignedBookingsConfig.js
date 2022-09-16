import { lazy } from 'react';

const AssignedBookingsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/apps/admin/assignedbookings',
      component: lazy(() => import('./assignedBookingsApp')),
    },
  ],
};

export default AssignedBookingsConfig;


