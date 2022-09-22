import React, {useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import { TextField, Button } from '@material-ui/core';
import '../../app.css';
import { Divider } from '@material-ui/core';
import history from '@history';

export default function CouponPayment({setIsOpen, paymentType}) {
const [couponText, setCouponText] = useState('');  
const coupon = 'URBAN'; 


const processPayment = () => {
  if(couponText != coupon){
    alert('Coupon code entered is incorrect');
  }else{
    setIsOpen(false);
    alert("You have successfully booked a dev😁!");
    history.push('/apps/bookdev');
  }
}

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Enter your coupon code below👇🏽
        <Divider /><br/>
      </Typography>
      <TextField id="filled-basic" label="Coupon Code" variant="outlined"  onChange={(e) => setCouponText(e.target.value)} />
      &nbsp;&nbsp;&nbsp;
      {/* <Button variant="contained" color="success" style={{minHeight: '45px', minWidth: '100px', backgroundColor: 'black' }}>
        Proceed
    </Button> */}
      <Button
      variant="contained"
      sx={{ mt: 3, ml: 1, mb: 3}}
      style={{minHeight: '45px', minWidth: '100px', color: '#fff', backgroundColor: 'black'}}
      onClick={processPayment}
       >
        Proceed
    </Button>
    <br/><br/>
      <Divider />
    </React.Fragment>
  
  );
}