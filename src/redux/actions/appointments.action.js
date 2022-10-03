import {fetchAppointmentsPending, fetchAppointmentsSuccess, fetchAppointmentsFailed, updateAppointmentPending,updateAppointmentSuccess,updateAppointmentFailed,
    clearAppointments} from '../reducers/appointments.slice';
  import { db, fb, auth, storage } from '../../config/firebase';
import { sendChat } from './chat.action';
import { result } from 'lodash';
import { clearChat } from 'redux/reducers/chat.slice';
  
    export const fetchAppointments = ( ) => async (dispatch) => {
            dispatch(fetchAppointmentsPending());
            // db.collection('users').where("uid", "!=", fb.auth().currentUser.uid)
            db.collection('appointments')
            .get()
            .then((snapshot) => {
                const appointments = snapshot.docs.map((doc) => ({ ...doc.data() }));
                console.log('Appointments, ', appointments);
                dispatch(fetchAppointmentsSuccess(appointments));
        }).catch((error) => {
                var errorMessage = error.message;
                console.log('Error fetching profile', errorMessage);
                dispatch(fetchAppointmentsFailed({ errorMessage }));
        });
    
};

//appointments need an id so i can update the appropriate one
export const updateAppointment = (uid,updates) => async (dispatch) => {
        dispatch(updateAppointmentPending());
        // db.collection('users').where("uid", "!=", fb.auth().currentUser.uid)
        db.collection('appointments')
        .doc('s7OixmwMC0IR1Cg4vw8z')
        .update(updates)
        .then((snapshot) => {
            const appointments = true /*snapshot.docs.map((doc) => ({ ...doc.data() }))*/;
            console.log('Appointment has been updated,', appointments); //appointment variable should just be true, indicating "yes" I have updated
            dispatch(updateAppointmentSuccess(true));
    }).catch((error) => {
            var errorMessage = error.message;
            console.log('Error fetching profile', errorMessage);
            dispatch(updateAppointmentFailed({ errorMessage }));
    });

};





    

        
        
       

           


           





      