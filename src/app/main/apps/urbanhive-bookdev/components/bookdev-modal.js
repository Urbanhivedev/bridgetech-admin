import React, { useState } from 'react';
import Draggable from 'react-draggable';
// import {Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, 
//   Stepper, Step, StepLabel} from '@mui/material';
import { Box, Typography, Grid, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, 
  Stepper, Step, StepLabel, Divider } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
// import { openDepositModal, clearSlice } from '../redux/reducers/transaction.slice';
import { useHistory } from 'react-router-dom';
import BookDevDetails from './bookdev-details';
import BookDevPayment from './bookdev-payment';
import Review from './bookdev-review';
import PaymentMethod from './payment-type';
import CouponPayment from './coupon-payment';




function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const steps = ['Confirm Details', 'Payment Method', 'Make Payment'];

export default function BookDevModal({isOpen, setIsOpen, date, nTime}) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [activeStep, setActiveStep] = useState(0);
  const [paymentType, setPaymentType] = useState(null);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleClose = () => {
     setIsOpen(false);
  }


  function getStepContent(step) {
    switch (step) {
      case 0:
        return <BookDevDetails date={date} nTime={nTime}/>;
      case 1:
        return <PaymentMethod setActiveStep={setActiveStep} activeStep={activeStep} setPaymentType={setPaymentType} />;
      case 2:
        return paymentType == 'paystack' ? <BookDevPayment setIsOpen={setIsOpen} paymentType={paymentType} />
        : <CouponPayment setIsOpen={setIsOpen} paymentType={paymentType} />;
      default:
        throw new Error('Unknown step');
    }
  }

  return (
    <>
    {isOpen ? (
        <>
    <div>
      <Dialog
        open={isOpen}
        // onClose={handleClose}
        disableEnforceFocus 
        hideBackdrop 
        disableBackdropClick 
        PaperComponent={PaperComponent}
        style={{
            top: '10%', // Position however you like
            // left: '10%',
            height: 'fit-content',  // Ensures that the dialog is 
            // width: 'fit-content',   // exactly the same size as its contents
        }}

      >

        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Book Dev👨‍💻
        </DialogTitle>
        <DialogContent>
        <Stepper activeStep={activeStep}  sx={{ pt: 3, pb: 6 }} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <DialogContentText>
          <React.Fragment>
              <React.Fragment>
                {getStepContent(activeStep)}
              </React.Fragment>
          </React.Fragment>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <hr/>
          <Divider />
          <Button variant="outlined" onClick={handleClose}>
            Close
          </Button>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}
                  {activeStep === steps.length - 1
                  ?
                  <></>
                  :
                  activeStep == 0 && (
                    <Button
                    variant="contained"
                    // onClick={() => paymentType == null && steps.length == 3 ? alert(steps.length) : handleNext()}
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Confirm' : 'Next'}
                  </Button>
                  )
                  }
                  
                </Box>
        </DialogActions>
      </Dialog>
    </div>
    </>
      ) : null}
    </>
  );
}
