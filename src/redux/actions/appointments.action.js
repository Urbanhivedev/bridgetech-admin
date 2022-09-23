import {fetchAppointmentsPending, fetchAppointmentsSuccess, fetchAppointmentsFailed, 
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





    

        
        
       

           


           





      