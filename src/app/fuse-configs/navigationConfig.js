import { authRoles } from 'app/auth';
import i18next from 'i18next';

import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const user = 'admin';

const navigationConfig = [
  {
    id: 'dasboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'dashboard',
    url: '/apps/coming-soon1',
  },
  {
    id: 'coding',
    title: 'Coding',
    type: 'group',
    icon: 'web',
    children: [
      {
        id: 'sessions',
        title: 'Sessions',
        type: 'item',
        icon: 'photo',
        url: '/apps/sessions',
        // url: '/apps/coming-soon2',
      },
      {
        id: 'book-dev',
        title: 'Book Dev',
        type: 'item',
        icon: 'event_available',
        url: '/apps/bookdev',
        // url: '/apps/coming-soon3',
      },
    ],
  },
  {
    id: 'match',
    title: 'Match',
    type: 'group',
    icon: 'web',
    children: [
      {
        id: 'candidates',
        title: 'Candidates',
        type: 'item',
        icon: 'group_add',
        url: '/candidates',
      },
      {
        id: 'inbox',
        title: 'Inbox',
        type: 'item',
        icon: 'chat',
        url: '/apps/inbox',
      },
      {
        id: 'my-profile',
        title: 'My Profile',
        type: 'item',
        icon: 'account_circle',
        url: '/apps/profile',
      },
    ],
  },
  {
    id: 'admin',
    title: 'Admin',
    type: 'group',
    icon: 'web',
    children: [
      {
        id: 'create-developer',
        title: 'Create Developer',
        type: 'item',
        icon: 'photo',
        url: '/apps/admin/createdeveloper',
        // url: '/apps/coming-soon2',
      },
      {
        id: 'developer-list',
        title: 'Developer List',
        type: 'item',
        icon: 'event_available',
       // url: '/apps/bookdev',
         url: '/apps/admin/developerlist',
      },
      {
        id: 'booked-classes',
        title: 'Booked Classes',
        type: 'item',
        icon: 'event_available',
       // url: '/apps/bookdev',
        url: '/apps/admin/assignedbookings',
      },
      {
        id: 'registered-users',
        title: 'Registered Users',
        type: 'item',
        icon: 'event_available',
       // url: '/apps/bookdev',
        url: '/apps/admin/registeredUsers',
      },
    ]
  }
];

export default navigationConfig;
