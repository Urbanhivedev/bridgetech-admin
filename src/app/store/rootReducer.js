import { combineReducers } from '@reduxjs/toolkit';
import auth from 'app/auth/store';
import { persistReducer } from 'redux-persist';
import loginReducer from '../../redux/reducers/auth.slice';
import storage from '../../redux/storage';
import fuse from './fuse';
import i18n from './i18nSlice';

import chatApp from 'app/main/apps/urbanhive-inbox/store';

var n_asyncReducer
const createReducers = (asyncReducers) => (state, action) => {

  n_asyncReducer = asyncReducers;

  const combinedReducer = combineReducers({
    login: loginReducer,
    // auth,
    fuse,
    i18n,
    // chatApp,
    ...asyncReducers,
  });


  /*
	Reset the redux store when user logged out
	 */
  if (action.type === 'auth/user/userLoggedOut') {
    state = undefined;
  }

  return combinedReducer(state, action);

};

export const asyncReduc = n_asyncReducer;
export const createReducer = createReducers;
