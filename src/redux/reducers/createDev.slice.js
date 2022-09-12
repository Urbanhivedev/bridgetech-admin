import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  createDevData: {
    firstName:'',
    lastName:'',
    intro: '',
    skillset: '',
    city: '',
    skills_needed: '',
    isTechnical: '',
    lookingFor: '',
    photoUrl: '',
  },
  isLoading: false,
  error: '',
  message: '',
};

const createDevSlice = createSlice({
  name: 'createDev',
  initialState,
  reducers: {
    createProfilePending: (state) => {
      state.isLoading = true;
      state.error = '';      /*consider changing it to createDevPending, createDevSuccess etc etc */
      state.message = '';
    },
    createProfileSuccess: (state, action) => {
        state.isLoading = false;
        state.createDevData = action.payload.createDevData;
        state.error = '';
        state.message = action.payload.msg;
    },
    createProfileFailed: (state, { payload }) => {
      (state.isLoading = false);
        (state.error = payload.errorMessage);
    },
    fetchProfilePending: (state) => {
      state.isLoading = true;
      state.error = '';
      state.message = '';
    },
    fetchProfileSuccess: (state, action) => {
        state.isLoading = false;
        state.createDevData = action.payload.createDevData;
    },
    fetchProfileFailed: (state, { payload }) => {
      (state.isLoading = false);
        (state.error = payload.errorMessage);
        (state.message = payload.msg);
    },
    resetMsg: (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.message = '';
  },
    clearProfile: (state) => {
      // reset: () => initialState
      return {
        ...initialState,
      };
    },
  },
});

const { actions, reducer } = createDevSlice;

export const {
  createProfilePending,
  createProfileSuccess,
  createProfileFailed,
  fetchProfilePending,
  fetchProfileSuccess,
  fetchProfileFailed,
  clearProfile,
  resetMsg,
} = actions;

export default reducer;


