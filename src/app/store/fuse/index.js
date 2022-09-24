import { combineReducers } from '@reduxjs/toolkit';
import dialog from './dialogSlice';
import message from './messageSlice';
import navbar from './navbarSlice';
import navigation from './navigationSlice';
import navigationAdmin from './navigationAdminSlice';
import settings from './settingsSlice';

const fuseReducers = combineReducers({
  navigation,
  navigationAdmin,
  settings,
  navbar,
  message,
  dialog,
});

export default fuseReducers;
