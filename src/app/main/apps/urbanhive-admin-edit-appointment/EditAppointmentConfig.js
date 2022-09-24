import { lazy } from 'react';

const EditAppointmentConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/apps/admin/editappointment/:id',
      component: lazy(() => import('./EditAppointmentApp')),
    },
  ],
};

export default EditAppointmentConfig;


