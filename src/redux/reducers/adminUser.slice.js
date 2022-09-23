import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allAdminUsers: [],
  liveAdminUsers: [],
  connectedAdminUsers: [],
  connects: [],
  connects2: [],
  isLoading: false,
  info: '',
  error: '',
  message: '',
};

const adminUserSlice = createSlice({
  name: 'allAdminUsers',
  initialState,
  reducers: {
    fetchAdminUsersPending: (state) => {
        state.isLoading = true;
        state.error = '';
        state.message = '';
      },
      fetchAdminUsersSuccess: (state, action) => {
        state.isLoading = false;
        state.allAdminUsers = action.payload;
        state.error = '';
        state.message = action.payload.msg;
    },
    fetchRealTimeAdminUsersSuccess: (state, action) => {
      state.isLoading = false;
      state.liveAdminUsers = action.payload;
      state.error = '';
      state.message = action.payload.msg;
  },
  fetchConnectedAdminUserSuccess: (state, action) => {
    state.isLoading = false;
    state.connectedUsers = action.payload;
    state.error = '';
    state.message = action.payload.msg;
},
    fetchAdminUsersFailed: (state, { payload }) => {
      (state.isLoading = false);
        (state.error = payload.errorMessage);
    },
    initiatePending: (state) => {
      state.isLoading = true;
      state.error = '';
      state.message = '';
    },
    initiateSuccess: (state, action) => {
      state.isLoading = false;
      state.connects = action.payload;
      state.error = '';
  },
    initiateSuccess2: (state, action) => {
      state.isLoading = false;
      state.connects2 = action.payload;
      state.error = '';
  },
  initiateFailed: (state, { payload }) => {
     state.isLoading = false;
     state.info = payload.errorMessage;
  },
    clearAdminUser: (state) => {
      return {
        ...initialState,
      };
    },
  },
});

const { actions, reducer } = adminUserSlice;

export const {
 fetchAdminUsersPending,
 fetchAdminUsersSuccess,
 fetchRealTimeAdminUsersSuccess,
 fetchConnectedAdminUserSuccess,
 fetchAdminUsersFailed,
 initiatePending,
 initiateSuccess,
 initiateSuccess2,
 initiateFailed,
 clearAdminUser,
} = actions;

export default reducer;


