import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch, useSelector } from 'react-redux';




export default function Review(props) {
const { user } = useSelector((state) => state.login);
 const dispatch = useDispatch();

  function currencyFormat(num) {
    return '₦' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        {props.type} summary
      </Typography>
      <List disablePadding>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Account Name" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          {user.name} 
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Account Number" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          {user.email}
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="AccountType" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          {user.name.toUpperCase()}
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary={props.type + " Amount"} />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
         {currencyFormat(parseInt(2000))}
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}