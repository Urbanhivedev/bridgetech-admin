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
    email:'',
    phoneNumber:'',
  },
  isLoading: false,
  error: '',
  message: '',
};

const createDevSlice = createSlice({
  name: 'createDev',
  initialState,
  reducers: {
    createDevPending: (state) => {
      state.isLoading = true;
      state.error = '';      /*consider changing it to createDevPending, createDevSuccess etc etc */
      state.message = '';
    },
    createDevSuccess: (state, action) => {
        state.isLoading = false;
        /*state.createDevData = action.payload.profileData;*/
        state.error = '';
        state.message ="Developer successfully created" /* I WILL MAKE THE MESSAGE COME FROM THE ACTION LATER action.payload.msg*/;
    },
    createDevFailed: (state, { payload }) => {
      (state.isLoading = false);
        (state.error = payload.errorMessage);
    },
    /*fetchDevPending: (state) => {
      state.isLoading = true;
      state.error = '';
      state.message = '';
    },
    fetchDevSuccess: (state, action) => {
        state.isLoading = false;
        state.createDevData = action.payload.createDevData;
    },
    fetchDevFailed: (state, { payload }) => {
      (state.isLoading = false);
        (state.error = payload.errorMessage);
        (state.message = payload.msg);
    },
    resetMsg: (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.message = '';
  },
    clearDev: (state) => {
     
      return {
        ...initialState,
      };
    },*/
  },
});

const { actions, reducer } = createDevSlice;

export const {
  createDevPending,
  createDevSuccess,
  createDevFailed,
 /*fetchDevPending,
  fetchDevSuccess,
  fetchDevFailed,
  clearDev,*/
  resetMsg,
} = actions;

export default reducer;


