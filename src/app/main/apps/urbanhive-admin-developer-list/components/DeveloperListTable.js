import FusePageSimple from '@fuse/core/FusePageSimple';



import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'course',
    headerName: 'Course',
    type: 'string',
    width: 130,
  },
  {
    field: 'details',
    headerName: 'Description',
    sortable: true,
    width: 1000,
   
  },
];

const rows = [
  { id: 1, lastName: 'Dagogo', firstName: 'Uranta', course:'Front end development', details: 'Basics of HTML CSS and Javascript, with React Development'},
  { id: 2, lastName: 'Yusuf', firstName: 'Kazim', course:'Laravel intro' , details:'Teachings on PHP language along with the MVC structure of the laravel framework'},
  { id: 3, lastName: 'Yetunde', firstName: 'Olubowale', course:'Flutter development', details: 'Basic Flutter development with Dart Language'},
  { id: 4, lastName: 'Aminu', firstName: 'Fuhad', course:'React Native', details: 'taking react course to the mobile'}
  
];

export default function DataTable() {
  return (
     <>
     <h1>Developer List</h1>
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