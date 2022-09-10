import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profileData: {
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

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    createProfilePending: (state) => {
      state.isLoading = true;
      state.error = '';
      state.message = '';
    },
    createProfileSuccess: (state, action) => {
        state.isLoading = false;
        state.profileData = action.payload.profileData;
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
        state.profileData = action.payload.profileData;
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

const { actions, reducer } = profileSlice;

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


