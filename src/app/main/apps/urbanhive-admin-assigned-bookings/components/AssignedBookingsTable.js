import FusePageSimple from '@fuse/core/FusePageSimple';



import  React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from "@material-ui/core";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { AddBoxOutlined } from '@material-ui/icons';
/*REDUX ACTIONS AND FIREBASE */
import { fetchAppointments } from 'redux/actions/appointments.action';

/*REDUX ACTIONS AND FIREBASE */



const useStyles = makeStyles(theme => ({
  tablecell: {
    fontSize: '20px',
  },
}))




let rows = [
  /*{ id: 1, lastName: 'Elon', firstName: 'Tesla', phoneNumber:'09035197246', email: 'ogorkelvin289@gmail.com'},
  { id: 2, lastName: 'Blake', firstName: 'Jade', phoneNumber:'08119477917' , email:'mydelivery250@gmail.com'},
  { id: 3, lastName: 'Test', firstName: 'Said', phoneNumber:'08105565130', email: 'blakej@gmail.com'},
  { id: 4, lastName: 'Stark', firstName: 'Arya', phoneNumber:'08119477917', email: 'tesla@gmail.com'},
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', phoneNumber:'08119477917' , email:'user_test5@bridgetechadvance.com'},
  { id: 6, lastName: 'Melisandre', firstName: null, phoneNumber:'08183763331', email:'user_test4@bridgetechadvance.com'},
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', phoneNumber:'08119477917' , email:'user_test3@bridgetechadvance.com'},
  { id: 8, lastName: 'Frances', firstName: 'Rossini', phoneNumber:'08105565130'  , email:'user_test2@bridgetechadvance.com'},
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', phoneNumber:'08105565130' , email:'user_test1@bridgetechadvance.com'},*/
];

let upcomingAppointments = []
let pastAppointments = []

export default function BasicTable() {

  /*dispatching actions */
  const dispatch = useDispatch();
  
  /*getting reducers from our dispatched actions, even though they have thier own empty values before dispatches take place */
  const { allAppointments, error,message, isLoading } = useSelector((state) => state.appointments);
  const { user } = useSelector((state) => state.login);

  useEffect(() => {
    dispatch(fetchAppointments());
    console.log(new Date())

    upcomingAppointments = allAppointments.filter((item)=>(item.Day.seconds*1000 > new Date()))
    pastAppointments = allAppointments.filter((item)=>(item.Day.seconds*1000 <= new Date()))


     rows = allAppointments
     
  }, [])


  return (
      <>
      
    <h1>Upcoming Appointments</h1>
     <br/>
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }}  aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell>S/N</TableCell>
            <TableCell >Name</TableCell>
            <TableCell align="center">email</TableCell>
            <TableCell align="center">Developer Booked</TableCell>
            <TableCell align="center">Day</TableCell>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Change Booking</TableCell>
          </TableRow>

        </TableHead>
        <TableBody>
          {upcomingAppointments.map((row,index) => (
            <TableRow
              key={index}
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.developerBooked}</TableCell>
              <TableCell align="center">{new Date(row.Day.seconds*1000).toDateString()}</TableCell>
              <TableCell align="center">{new Date(row.time.seconds*1000).toDateString()}</TableCell>
              <TableCell align="center"><Link to = {`/apps/admin/editappointment/${123456}`}><AddBoxIcon/></Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      
   {/*just some spacing Using HTML br */}
    <br/>
    <br/>
    <br/>

    <h1>Past Appointments</h1>
     <br/>
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }}  aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell>S/N</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">email</TableCell>
            <TableCell align="center">Developer Booked</TableCell>
            <TableCell align="center">Day</TableCell>
            <TableCell align="center">Time</TableCell>
           
          </TableRow>

        </TableHead>
        <TableBody>
          {pastAppointments.map((row,index) => (
             <TableRow
             key={index}
             
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >
             <TableCell component="th" scope="row">
               {index + 1}
             </TableCell>
             <TableCell align="center">{row.name}</TableCell>
             <TableCell align="center">{row.email}</TableCell>
             <TableCell align="center">{row.developerBooked}</TableCell>
             <TableCell align="center">{new Date(row.Day.seconds*1000).toDateString()}</TableCell>
             <TableCell align="center">{new Date(row.time.seconds*1000).toDateString()}</TableCell>
             
           </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>

  );
}