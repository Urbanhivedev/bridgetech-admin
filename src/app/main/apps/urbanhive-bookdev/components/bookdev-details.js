import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Grid, Typography, TextField, Divider, List, ListItem, ListItemText} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';




export default function BookDevDetails({date, nTime}) {
  const { user } = useSelector((state) => state.login);
  const isClose = (val) => { // the callback. Use a better name
    props.sendIsClose(val)
  };

  function currencyFormat(num) {
    return '₦' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  return (
    <React.Fragment>
      {/* <p style={{fontSize: '17px'}}><b>Booking Details</b></p> */}
      <Divider/><br/>
      <List disablePadding>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Session Date: " />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          <b>{date}</b> 
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Session Time: " />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          <b>{nTime == 'time1' ? '10am - 12pm' : nTime == 'time2' ? '12pm - 2pm' : nTime == 'time3' ? '2:30pm - 4pm' : 'No time set'}</b>
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"Amount: "} />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          <b>{currencyFormat(parseInt(5000))}</b>
          </Typography>
        </ListItem>
      </List>
      <Divider/>
    </React.Fragment>
  );
}