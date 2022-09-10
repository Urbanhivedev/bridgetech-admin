import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import '../../app.css';
import { closeModal, logoutSuccess } from '../../../../../redux/reducers/auth.slice';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(true);
  const dispatch = useDispatch();


  const closeModalPop = async () => {
    dispatch(closeModal());
    dispatch(logoutSuccess());
    localStorage.clear();
  };

  const { modalVisible } = useSelector((state) => state.login);

  return (
      <>
      {modalVisible ? (
          <>
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        // onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle style={{color: 'black', fontSize: '20px'}}>{"Registered Successfully"}<span className='wave'>😊</span></DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" style={{color: 'black'}}>
          <Typography variant="h5">Login & explore bridge-tech!</Typography>
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
        <Button style={{
          fontSize: '15px'
        }}
         onClick={closeModalPop}>Continue</Button>
        </DialogActions>
      </Dialog>
    </div>
    </>
      ) : null}
    </>
  );
}
