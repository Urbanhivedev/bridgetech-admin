import React, { useState, useMemo, useRef, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import '../style/index.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import ButtonBase from '@mui/material/ButtonBase';
import { borderRadius } from '@mui/system';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import ReactSwipe from 'react-swipe';
import '../style/swipe.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers, fetchRealTimeConnections, fetchRealTimeConnections2, initiateConnection } from 'redux/actions/user.action';
import { fb } from 'config/firebase';
import { timeSince } from 'config/getTimeStamp';
import { updateLastActive } from 'redux/actions/auth.action';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));


function CandidateCard () {
  let reactSwipeEl;
  const dispatch = useDispatch();
  const { allUsers, connects, isLoading } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.login);
  let unsubscribe;
  const notifyInvite = () => toast.success('🦄 Invited!', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

    const notifySkip = () => toast.error('😟 Skipped!', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });

      const notifyUndo = () => toast.warn('🔃 Undo!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
  

  const canSwipe = 0;

  const classes = useStyles();


// function inviteSkip(type, user2) {
const inviteSkip = (type, user2) => {
  if(type == 1){
    notifyInvite();
  }else if(type == 0){
    notifySkip();
  }else if(type == -1){
    notifyUndo();
  }

  if(type != -1){
   dispatch(initiateConnection(type, user.uid, user2));
  }
}

  
useEffect(() => {
   dispatch(fetchAllUsers());
   dispatch(updateLastActive(user.uid));
}, [])



useEffect(() => {

  unsubscribe = dispatch(fetchRealTimeConnections(user.uid))
  unsubscribe = dispatch(fetchRealTimeConnections2(user.uid))
  .then(unsubscribe => {
    return unsubscribe;
  })
  .catch(error => {
    console.log(error);
  })
}, []);

  //componentWillUnmount
  useEffect(() => {
    return () => {
      //cleanup
      unsubscribe.then(f => f()).catch(error => console.log(error));
    }
  }, []);


  const connectsById = Object.fromEntries(
    connects.map(({ user2, type, status, invited_amt, skipped_amt }) => [user2, { type, status, invited_amt, skipped_amt }])
  );

  const output = allUsers.map(({ uid, name, email, isTechnical, skills_needed, lookingFor, intro, photoUrl, lastActive, skillset, city }) => ({
    uid, name, email, isTechnical, skills_needed, lookingFor, intro, photoUrl, lastActive, skillset, city,
    ...(connectsById[uid] || { type: '', status: '', invited_amt: '', skipped_amt: ''})
  }));

  // console.log(output);



// const userList = allUsers.length ? (
const userList = output.length ? (
  // allUsers.map(users => {
    output.map(users => {
      return(
        <Grid container>
          <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
        <Grid item sx={{ mx: "1rem" }}>
          {/* <ButtonBase sx={{ width: 500, height: 500 }}> */}
          <Avatar alt="Remy Sharp" src={users.photoUrl} style={{ width: '180px', height: '180px'}} />
          {/* </ButtonBase> */}
        </Grid>
        <Grid item xs={12} sm container>
       
          <Grid item xs container direction="column" sx={{ mx: "2rem" }}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle5" component="div" style={{ fontSize: '23px' }}>
                <b>{users.name}</b>
              </Typography>
              <Typography variant="body2" gutterBottom  style={{ fontSize: '13px' }}>
                {/* Last Active • {timeSince(users.lastActive)} ago */}
                Last Active • {timeSince(parseInt(users.lastActive))} 
              </Typography>
              <br/>
              <Typography variant="body2" gutterBottom style={{ fontSize: '18px' }}>
                <b>{users.city}</b>
              </Typography>
            </Grid>
          </Grid>
       
       
       <Box component="span" sx={{ p: 10, mx: "3rem", border: '1px solid black', width: 480, height: 250, paddingTop: '100px', marginRight: '80px'}}>
       {/* <div style={{ paddingRight: '60px', border: '1px solid black' }}>
       
       </div> */}
       <Divider style={{ border: '1px dotted grey' }} /><br/><br/>


        <div className={classes.root}>
       {/* <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group"> */}
       <ButtonGroup size="large" variant="contained" color="primary" aria-label="large contained primary button group">
        <Button onClick={() => {reactSwipeEl.next(); inviteSkip(0, users.uid);}} style={{ backgroundColor: !canSwipe && '#1B2330' }}>Skip</Button>
        <Button onClick={() => {reactSwipeEl.prev(); inviteSkip(-1, users.uid);}} style={{ backgroundColor: '#0891B2' }} >Undo</Button>
        {users.uid != user.uid ? 
        <Button onClick={() => {reactSwipeEl.next(); {users.invited_amt > 0 ? alert('You have already invited this user') : inviteSkip(1, users.uid)};}} style={{ backgroundColor: !canSwipe && '#1B2330' }}>Invite</Button>
        // : users.invited_amt > 0 ? <Button onClick={() => {reactSwipeEl.next(); }} style={{ backgroundColor: !canSwipe && '#1B2330' }}>Invite</Button> :
        : <Button onClick={() => {alert('You cannot invite yourself');}} style={{ backgroundColor: '#F6F7F9', color: 'black'}}>Invite</Button>
        }

        </ButtonGroup>
       </div><br/>
       <center><p>(You have <b>5</b> invites left this month.)</p></center>
       </Box>
       
        </Grid>
       
        <Grid>
       
       <Grid item container>
        <Box m={0} p={2}>
        <h4><b>Intro</b></h4>
        {users.intro ? parseInt(users.intro.length) > 35 
         ?
         <p>{users.intro}</p>
         :
        <p>{users.intro + ' (: ................................................... :)'}</p>
        : 'This user does not have an intro yet!'}
        </Box>
        </Grid></Grid>
       </Grid>
      );
  })
) : (
  <div className="container">
      <center><p className="center">No available user yet</p></center>
  </div>
)

  return (
     <>
     {isLoading ? 
      <center> <LinearProgress color="secondary" /></center>
     : 
  <ReactSwipe
     className="carousel"
     swipeOptions={{ continuous: true }}
     ref={el => (reactSwipeEl = el)}
   >
          {userList}
       </ReactSwipe>
     
     
     }
     
     
     </>
  )
}

export default CandidateCard