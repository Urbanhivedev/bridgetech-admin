import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allAppointments: [],
  isLoading: false,
  appointmentUpdated:false,
  info: '',
  error: '',
  message: '',
};

const appointmentsSlice = createSlice({
  name: 'allAppointments',
  initialState,
  reducers: {
    fetchAppointmentsPending: (state) => {
        state.isLoading = true;
        state.error = '';
        state.message = '';
      },
      fetchAppointmentsSuccess: (state, action) => {
        state.isLoading = false;
        state.allAppointments= action.payload;
        state.error = '';
        state.message = action.payload.msg;
    },
    
    fetchAppointmentsFailed: (state, { payload }) => {
      (state.isLoading = false);
        (state.error = payload.errorMessage);
    },
    // dagogo's update appointment reducers state
    updateAppointmentPending: (state) => {
      state.isLoading = true;
      state.error = '';
      state.message = '';
    },
    updateAppointmentSuccess: (state, action) => {
      state.isLoading = false;
      state.appointmentUpdated = action.payload;
      state.error = '';
      state.message = action.payload.msg;
  },
  
  updateAppointmentFailed: (state, { payload }) => {
    (state.isLoading = false);
      (state.error = payload.errorMessage);
  },
   /* initiatePending: (state) => {
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
  },*/
    clearAppointments: (state) => {
      return {
        ...initialState,
      };
    },
  },
});

const { actions, reducer } = appointmentsSlice;

export const {
 fetchAppointmentsPending,
 fetchAppointmentsSuccess,
 fetchAppointmentsFailed,
 updateAppointmentPending,
 updateAppointmentSuccess,
 updateAppointmentFailed,
 /*initiatePending,
 initiateSuccess,
 initiateSuccess2,
 initiateFailed,*/
 clearAppointments,
} = actions;

export default reducer;