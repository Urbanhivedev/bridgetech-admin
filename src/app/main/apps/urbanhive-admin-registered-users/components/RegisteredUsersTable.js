import FusePageSimple from '@fuse/core/FusePageSimple';



import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'phoneNumber',
    headerName: 'Phone Number',
    type: 'string',
    width: 130,
  },
  {
    field: 'email',
    headerName: 'Email Address',
    sortable: true,
    width: 160,
   
  },
];

const rows = [
  { id: 1, lastName: 'Elon', firstName: 'Tesla', phoneNumber:'09035197246', email: 'ogorkelvin289@gmail.com'},
  { id: 2, lastName: 'Blake', firstName: 'Jade', phoneNumber:'08119477917' , email:'mydelivery250@gmail.com'},
  { id: 3, lastName: 'Test', firstName: 'Said', phoneNumber:'08105565130', email: 'blakej@gmail.com'},
  { id: 4, lastName: 'Stark', firstName: 'Arya', phoneNumber:'08119477917', email: 'tesla@gmail.com'},
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', phoneNumber:'08119477917' , email:'user_test5@bridgetechadvance.com'},
  { id: 6, lastName: 'Melisandre', firstName: null, phoneNumber:'08183763331', email:'user_test4@bridgetechadvance.com'},
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', phoneNumber:'08119477917' , email:'user_test3@bridgetechadvance.com'},
  { id: 8, lastName: 'Frances', firstName: 'Rossini', phoneNumber:'08105565130'  , email:'user_test2@bridgetechadvance.com'},
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', phoneNumber:'08105565130' , email:'user_test1@bridgetechadvance.com'},
];

export default function DataTable() {
  return (
     <>
     <h1>Registered Users</h1>
     <br/>
    <div style={{ height: 400, width: '100%', fontSize:'100px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        style={{ fontSize:'1.5rem' }}
      />
    </div>
    </>
  );
}