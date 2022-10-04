import {fetchAppointmentsPending, fetchAppointmentsSuccess, fetchAppointmentsFailed,
         updateAppointmentPending,updateAppointmentSuccess,updateAppointmentFailed,
         fetchSelectedAppointmentPending, fetchSelectedAppointmentSuccess, fetchSelectedAppointmentFailed,
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
                const appointments = snapshot.docs.map((doc) => ({ ...doc.data(),id:doc.id }));
                console.log('Appointments, ', appointments);
                dispatch(fetchAppointmentsSuccess(appointments));
        }).catch((error) => {
                var errorMessage = error.message;
                console.log('Error fetching profile', errorMessage);
                dispatch(fetchAppointmentsFailed({ errorMessage }));
        });
    
};

//appointments need an id so i can update the appropriate one - so i got ID's using doc.id in each document from firebase function
export const updateAppointment = (id,updates) => async (dispatch) => {
        dispatch(updateAppointmentPending());
        // db.collection('users').where("uid", "!=", fb.auth().currentUser.uid)
        db.collection('appointments')
        /*.where("uid", "==", uid)*/
        .doc(id)
        .update(updates)
        .then(() => {
                //appointment variable should just be true, indicating "yes" I have updated
                const msg = 'Appointment successfully updated!'
                const appointment = true /*snapshot.docs.map((doc) => ({ ...doc.data() }))*/
                dispatch(updateAppointmentSuccess(appointment,msg));
                console.log('Appointment has been updated for real !') 
    }).catch((error) => {
            var errorMessage = error.message;
            console.log('Error fetching profile', errorMessage);
            dispatch(updateAppointmentFailed({ errorMessage }));
    });

};


export const fetchSelectedAppointment = (id) => async (dispatch) => {
        dispatch(fetchSelectedAppointmentPending());
        // db.collection('users').where("uid", "!=", fb.auth().currentUser.uid)
        db.collection('appointments')
        /*.where("uid", "==", uid)*/
        .doc(id)
        .get()
        .then((doc) => {
            const appointments = doc.data()/*s.map((doc) => ({ ...doc.data(),id:doc.id}))*/;
            console.log('Appointments, ', appointments);
            dispatch(fetchSelectedAppointmentSuccess(appointments));
    }).catch((error) => {
            var errorMessage = error.message;
            console.log('Error fetching profile', errorMessage);
            dispatch(fetchSelectedAppointmentFailed({ errorMessage }));
    });

};


export const deleteSelectedAppointment = (id) => async (dispatch) => {
        dispatch(fetchSelectedAppointmentPending());
        // db.collection('users').where("uid", "!=", fb.auth().currentUser.uid)
        db.collection('appointments')
        /*.where("uid", "==", uid)*/
        .doc(id)
        .delete()
        .then((doc) => {
            const appointments = doc.data()/*s.map((doc) => ({ ...doc.data(),id:doc.id}))*/;
            console.log('Appointment Deleted, ', appointments);
            dispatch(clearAppointments());
    }).catch((error) => {
            var errorMessage = error.message;
            console.log('Error in deleting appointment', errorMessage);
            dispatch(fetchSelectedAppointmentFailed({ errorMessage }));
            /*I will create a deleted failed reducer but for now i am using the fetching failed reducer */
    });

};






    

        
        
       

           


           





      