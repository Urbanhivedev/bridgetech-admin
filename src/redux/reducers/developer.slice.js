import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allDevelopers: [],
  liveDevelopers: [],
  connectedDevelopers: [],
  connects: [],
  connects2: [],
  isLoading: false,
  info: '',
  error: '',
  message: '',
};

const developerSlice = createSlice({
  name: 'developers',
  initialState,
  reducers: {
    fetchDevelopersPending: (state) => {
        state.isLoading = true;
        state.error = '';
        state.message = '';
      },
      fetchDevelopersSuccess: (state, action) => {
        state.isLoading = false;
        state.allDevelopers = action.payload;
        state.error = '';
        state.message = action.payload.msg;
    },
    fetchRealTimeDevelopersSuccess: (state, action) => {
      state.isLoading = false;
      state.liveDevelopers = action.payload;
      state.error = '';
      state.message = action.payload.msg;
  },
  fetchConnectedDeveloperSuccess: (state, action) => {
    state.isLoading = false;
    state.connectedDevelopers = action.payload;
    state.error = '';
    state.message = action.payload.msg;
},
    fetchDevelopersFailed: (state, { payload }) => {
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
    clearDeveloper: (state) => {
      return {
        ...initialState,
      };
    },
  },
});

const { actions, reducer } = developerSlice;

export const {
 fetchDevelopersPending,
 fetchDevelopersSuccess,
 fetchRealTimeDevelopersSuccess,
 fetchConnectedDeveloperSuccess,
 fetchDevelopersFailed,
 initiatePending,
 initiateSuccess,
 initiateSuccess2,
 initiateFailed,
 clearDeveloper,
} = actions;

export default reducer;


