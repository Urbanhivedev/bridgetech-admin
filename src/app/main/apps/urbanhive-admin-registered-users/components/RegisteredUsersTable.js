import FusePageSimple from '@fuse/core/FusePageSimple';



import  React,{useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';

/*TABLE IMPORTS */
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
/*TABLE IMPORTS END */

/*REDUX ACTIONS AND FIREBASE */
import { fetchAllAdminUsers, fetchRealTimeConnections, fetchRealTimeConnections2, initiateConnection } from 'redux/actions/adminUser.action';
import { fb } from 'config/firebase';
/*REDUX ACTIONS AND FIREBASE */

const useStyles = makeStyles(theme => ({
  tablecell: {
    fontSize: '20px',
  },
}))



const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'Name', width: 130 },
  { field: 'lastName', headerName: 'Email Address', width: 130 },
  {
    field: 'phoneNumber',
    headerName: 'Developer',
    type: 'string',
    width: 130,
  },
  {
    field: 'email',
    headerName: 'Date',
    sortable: true,
    width: 160,
   
  },
  {
    field: 'addBox',
    headerName: 'Alter Date',
    
    width: 130,
  },
];

let rows = [
 /* { id: 1, lastName: 'Elon', firstName: 'Tesla', phoneNumber:'09035197246', email: 'ogorkelvin289@gmail.com'},
  { id: 2, lastName: 'Blake', firstName: 'Jade', phoneNumber:'08119477917' , email:'mydelivery250@gmail.com'},
  { id: 3, lastName: 'Test', firstName: 'Said', phoneNumber:'08105565130', email: 'blakej@gmail.com'},
  { id: 4, lastName: 'Stark', firstName: 'Arya', phoneNumber:'08119477917', email: 'tesla@gmail.com'},
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', phoneNumber:'08119477917' , email:'user_test5@bridgetechadvance.com'},
  { id: 6, lastName: 'Melisandre', firstName: null, phoneNumber:'08183763331', email:'user_test4@bridgetechadvance.com'},
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', phoneNumber:'08119477917' , email:'user_test3@bridgetechadvance.com'},
  { id: 8, lastName: 'Frances', firstName: 'Rossini', phoneNumber:'08105565130'  , email:'user_test2@bridgetechadvance.com'},
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', phoneNumber:'08105565130' , email:'user_test1@bridgetechadvance.com'},*/
];



export default function BasicTable() {
 
 /*dispatching actions */
  const dispatch = useDispatch();
  
  /*getting reducers from our dispatched actions, even though they have thier own empty values before dispatches take place */
  const { allAdminUsers, error,message, isLoading } = useSelector((state) => state.adminUser);
  const { user } = useSelector((state) => state.login);

  useEffect(() => {
    dispatch(fetchAllAdminUsers());
    console.log(allAdminUsers)
    console.log(error)
     rows = [...allAdminUsers]
  }, [])
 
  
 
  return (
      <>
      
    <h1>BridgeTech Advance All Users</h1>
     <br/>
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }}  aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell>S/N</TableCell>
            
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Phone Number</TableCell>
            
            <TableCell align="center">Location</TableCell>
            
          </TableRow>

        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={index}
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.phone && "0"+row.phone}</TableCell>
             
              <TableCell align="center">{row.city}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}