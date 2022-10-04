import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allAppointments: [],
  SelectedAppointment:{time:new Date(),developerBooked:"None",time:new Date(),},
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
        state.message = '' /*action.payload.msg*/;
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
      state.appointmentUpdated = false;
    },
    updateAppointmentSuccess: (state, action) => {
      state.isLoading = false;
      state.appointmentUpdated = true/*'action.payload.appointment' i'll come and change this later, so it comes from the action*/;
      state.error = '';
      state.message = 'Appointment successfully updated!' /*action.payload.msg i'll come and change this later, so it comes from the action*/;
  },
  
  updateAppointmentFailed: (state, { payload }) => {
    (state.isLoading = false);
      (state.error = payload.errorMessage);
  },
  //dagogo's individual(selected) appointment reducers state
  fetchSelectedAppointmentPending: (state) => {
    state.isLoading = true;
    state.error = '';
    state.message = '';
    state.appointmentUpdated = false;
  },
  fetchSelectedAppointmentSuccess: (state, action) => {
    state.isLoading = false;
    state.SelectedAppointment = action.payload; /*I always anticipate to get one value since i am using a unique id */
    state.error = '';
    state.message = ''/*action.payload.msg;*/
    state.appointmentUpdated = false; 
},

fetchSelectedAppointmentFailed: (state, { payload }) => {
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
 fetchSelectedAppointmentPending,
 fetchSelectedAppointmentSuccess,
 fetchSelectedAppointmentFailed,
 /*initiatePending,
 initiateSuccess,
 initiateSuccess2,
 initiateFailed,*/
 clearAppointments,
} = actions;

export default reducer;