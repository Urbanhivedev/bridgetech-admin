import { combineReducers } from '@reduxjs/toolkit';
import candidates from './candidatesSlice';
import widgets from './widgetsSlice';

const reducer = combineReducers({
  widgets,
  candidates,
});

export default reducer;
