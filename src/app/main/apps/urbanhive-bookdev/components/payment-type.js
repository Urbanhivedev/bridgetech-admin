import React, {useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { useDispatch, useSelector } from 'react-redux';
import { PaystackButton } from 'react-paystack'
import '../../app.css';
import { Divider } from '@material-ui/core';

export default function PaymentMethod({setActiveStep, activeStep, setPaymentType}) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.login);


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom style={{color: 'black'}}>
        <center><b>Choose a payment method👇🏽</b></center>
        <Divider /><br/>
      </Typography>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center">
    <Grid item xs={6}> 
    <Button onClick={() => { setActiveStep(activeStep + 1); setPaymentType('coupon');}} variant="contained" color="success" style={{minHeight: '45px', minWidth: '145px', backgroundColor: 'black' }}>
        Use <span style={{color: 'yellow'}}><b>&nbsp;Coupon&nbsp;</b></span> for Payment
    </Button>

    </Grid>
    <Grid item xs={6}>
    <Button onClick={() => { setActiveStep(activeStep + 1); setPaymentType('paystack');}} variant="contained" color="success" style={{minHeight: '45px', minWidth: '145px', backgroundColor: 'black', }}>
        Use <span style={{color: 'yellow'}}><b>&nbsp;Paystack&nbsp;</b></span> for Payment
    </Button>
    </Grid>
    </Grid>
    <br/>
      <Divider />
    </React.Fragment>
  );
}