import React, { useState, useMemo, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import Button from '@material-ui/core/Button';
import { TextField, FormControl, FormControlLabel, RadioGroup, Radio, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import { Divider, Chip, Grid, Paper, Typography, Box, Avatar, Button, ButtonBase, Stack, 
    ToggleButton, ToggleButtonGroup, Hidden  } from '@mui/material';
import { borderRadius } from '@mui/system';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BookDevModal from './bookdev-modal';
  


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });


//   const useStyles = makeStyles(theme => ({
//     textField: {
//       padding: '8px',
//       marginLeft: '50px',
//       width: '70%',
//     //   marginLeft: theme.spacing(1),
//       marginRight: theme.spacing(1),
//       border: '1px solid grey',
//     },
//   }));

const useStyles = makeStyles((theme) => ({
    textField: {
    padding: '8px',
     border: '1px solid grey',
    },
    paper: {
      display: "flex",
      width: "auto",
    },
    grid: {
      width: "auto",
    },
    arrow: {
      padding: theme.spacing(3),
    },
    box: {
    //   padding: theme.spacing(3),
      paddingLeft: theme.spacing(8),
    },
  }));




  const useStyles2 = makeStyles((theme) => ({
    selected: {
      "&&": {
        // backgroundColor: theme.palette.primary.main,
        backgroundColor: 'black',
        color: theme.palette.secondary.main
      }
    }
  }));

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#5E9C60",
      },
    },
  });

  



function BookDevCard () {
    const [isOpen, setIsOpen] = useState(false);
    const classes = useStyles();
    const classes2 = useStyles2();
    const [time, setTime] = useState('time');
    const [date, setDate] = useState(null);
    const [uid, setUid] = useState(null)
    let today = new Date().toISOString().slice(0, 10);
    const [nTime, setnTime] = useState(null);
    const { allUsers, connects, isLoading } = useSelector((state) => state.user);

    const notifyError = () => toast.error('Please select a date later than today!', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });

    const handleChange = (event, newtime) => {

    };

    const setUser = (uid_btn, newtime) => {
     setnTime(newtime);
        if(date == null){
          notifyError();
         }else if(uid != uid_btn){
          alert('Select time from the dev date selected');
         } else{
          setIsOpen(true);
         console.log('UID: ', uid);
         console.log('Date Val: ', date);
         console.log('Selected Time is:', newtime);
         }
    };
    return (
        <>
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
          <BookDevModal isOpen={isOpen} setIsOpen={setIsOpen} date={date} nTime={nTime !== null ? nTime : 'No time yet' }/>
       
          <Paper
          sx={{
            p: 1,
            pt: 2,
            pb: 2,
            margin: 'auto',
            // maxWidth: 500,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}
        >
          <Grid container spacing={2}>
            <Grid item>
            <Avatar alt="Profile Pic" src='assets/images/instructors/dagogo-uranta.jpg' style={{ width: '130px', height: '140px'}} />
              {/* <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="complex" src="assets/images/instructors/emma.jpg" />
              </ButtonBase> */}
            </Grid>
            <Grid item xs={12} sm container spacing={2}>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <h2 style={{ fontSize: '19px'}}><b>Fullstack Developer</b></h2>
                  <p style={{ fontSize: '16px'}}>Dagogo Uranta</p>
                </Grid>
              </Grid>
              
              <Grid item xs direction="column" spacing={2}>
              <Box display="flex" alignItems="center" className={classes.box}>
              <Grid item xs={6} sm container spacing={1} alignItems="center"
               justify="center">
              <Grid item>
              <TextField
               onChange={(e) => { setDate(e.target.value); setUid(1); }}
               className={classes.textField}
                id="date"
                label=""
                type="date"
                // defaultValue="2022-08-28"
                defaultValue={today}
                sx={{ width: 220, fontSize: '20px' }}
                InputLabelProps={{
                shrink: true,
                }}
            />
              </Grid>
              <Grid item alignItems="center"
               justify="center">
              <Button variant="contained" color="success" style={{minHeight: '45px', minWidth: '145px', backgroundColor: 'black', }}>
                Choose a date
            </Button>
              </Grid>
              </Grid>
              </Box>
                <br/>
                   {/* next column */}
                   <Grid item >
                   <Divider>
                    <Chip label="Select Time ⏲" style={{fontSize: '11px', color: 'black'}}/>
                    </Divider>
                   </Grid>
                    <br/>
                  <Grid container justify="center">
                  <ToggleButtonGroup
                    style={{paddingLeft: '30px', paddingRight: '20px'}}
                    color="primary"
                    value={time}
                    exclusive 
                    // onChange={(e) => setTime(e.target.value)}
                    onChange={handleChange}
                    aria-label="Platform"
                    >
                    <ToggleButton onClick={() => setUser(1, 'time1')} value={'time1'} sx={{ cursor: 'pointer' }}  classes={{ selected: classes2.selected }} style={{fontSize: '13px', outlineColor: 'black', outlineWidth: '1px', outlineStyle: 'solid', margin: '2px' }}><b>10am - 11am</b></ToggleButton>
                    <ToggleButton onClick={() => setUser(1, 'time2')} value={'time2'} sx={{ cursor: 'pointer' }} classes={{ selected: classes2.selected }} style={{fontSize: '13px', outlineColor: 'black', outlineWidth: '1px', outlineStyle: 'solid', margin: '2px'}}><b>11am - 12pm</b></ToggleButton>
                    <ToggleButton onClick={() => setUser(1, 'time3')} value={'time3'} sx={{ cursor: 'pointer' }} classes={{ selected: classes2.selected }} style={{fontSize: '13px', outlineColor: 'black', outlineWidth: '1px', outlineStyle: 'solid', margin: '2px'}}><b>12pm - 1pm</b></ToggleButton>
                    </ToggleButtonGroup>
                  </Grid>

                  <br/>
                  <Grid container justify="center">
                  <ToggleButtonGroup
                    style={{paddingLeft: '30px', paddingRight: '20px'}}
                    color="primary"
                    value={time}
                    exclusive 
                    // onChange={(e) => setTime(e.target.value)}
                    onChange={handleChange}
                    aria-label="Platform"
                    >
                    <ToggleButton onClick={() => setUser(1, 'time4')} value={'time4'} sx={{ cursor: 'pointer' }}  classes={{ selected: classes2.selected }} style={{fontSize: '13px', outlineColor: 'black', outlineWidth: '1px', outlineStyle: 'solid', margin: '2px' }}><b>01pm - 02pm</b></ToggleButton>
                    <ToggleButton onClick={() => setUser(1, 'time5')} value={'time5'} sx={{ cursor: 'pointer' }} classes={{ selected: classes2.selected }} style={{fontSize: '13px', outlineColor: 'black', outlineWidth: '1px', outlineStyle: 'solid', margin: '2px'}}><b>02pm - 03pm</b></ToggleButton>
                    <ToggleButton onClick={() => setUser(1, 'time6')} value={'time6'} sx={{ cursor: 'pointer' }} classes={{ selected: classes2.selected }} style={{fontSize: '13px', outlineColor: 'black', outlineWidth: '1px', outlineStyle: 'solid', margin: '2px'}}><b>03pm - 04pm</b></ToggleButton>
                    </ToggleButtonGroup>
                  </Grid>

              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <br/>

          <Paper
          sx={{
            p: 1,
            pt: 2,
            pb: 2,
            margin: 'auto',
            // maxWidth: 500,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}
        >
          <Grid container spacing={2}>
            <Grid item>
            <Avatar alt="Profile Pic" src='assets/images/instructors/yusuf.jpg' style={{ width: '130px', height: '140px'}} />
              {/* <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="complex" src="assets/images/instructors/emma.jpg" />
              </ButtonBase> */}
            </Grid>
            <Grid item xs={12} sm container spacing={2}>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <h2 style={{ fontSize: '19px'}}><b>Software Engineer</b></h2>
                  <p style={{ fontSize: '16px'}}>Yusuf Kasim</p>
                </Grid>
              </Grid>
              
              <Grid item xs direction="column" spacing={2}>
              <Box display="flex" alignItems="center" className={classes.box}>
              <Grid item xs={6} sm container spacing={1} alignItems="center"
               justify="center">
              <Grid item>
              <TextField
               onChange={(e) => { setDate(e.target.value); setUid(2); }}
               className={classes.textField}
                id="date"
                label=""
                type="date"
                // defaultValue="2022-08-28"
                defaultValue={today}
                sx={{ width: 220, fontSize: '20px' }}
                InputLabelProps={{
                shrink: true,
                }}
            />
              </Grid>
              <Grid item alignItems="center"
               justify="center">
              <Button variant="contained" color="success" style={{minHeight: '45px', minWidth: '145px', backgroundColor: 'black', }}>
                Choose a date
            </Button>
              </Grid>
              </Grid>
              </Box>
                <br/>
                   {/* next column */}
                   <Grid item >
                   <Divider>
                    <Chip label="Select Time ⏲" style={{fontSize: '11px', color: 'black'}}/>
                    </Divider>
                   </Grid>
                    <br/>
                  <Grid container justify="center">
                  <ToggleButtonGroup
                    style={{paddingLeft: '30px', paddingRight: '20px'}}
                    color="primary"
                    value={time}
                    exclusive 
                    // onChange={(e) => setTime(e.target.value)}
                    onChange={handleChange}
                    aria-label="Platform"
                    >
                    <ToggleButton onClick={() => setUser(2, 'time1')} value={'time1'} sx={{ cursor: 'pointer' }}  classes={{ selected: classes2.selected }} style={{fontSize: '13px', outlineColor: 'black', outlineWidth: '1px', outlineStyle: 'solid', margin: '2px' }}><b>10am - 11am</b></ToggleButton>
                    <ToggleButton onClick={() => setUser(2, 'time2')} value={'time2'} sx={{ cursor: 'pointer' }} classes={{ selected: classes2.selected }} style={{fontSize: '13px', outlineColor: 'black', outlineWidth: '1px', outlineStyle: 'solid', margin: '2px'}}><b>11am - 12pm</b></ToggleButton>
                    <ToggleButton onClick={() => setUser(2, 'time3')} value={'time3'} sx={{ cursor: 'pointer' }} classes={{ selected: classes2.selected }} style={{fontSize: '13px', outlineColor: 'black', outlineWidth: '1px', outlineStyle: 'solid', margin: '2px'}}><b>12pm - 1pm</b></ToggleButton>
                    </ToggleButtonGroup>
                  </Grid>

                  <br/>
                  <Grid container justify="center">
                  <ToggleButtonGroup
                    style={{paddingLeft: '30px', paddingRight: '20px'}}
                    color="primary"
                    value={time}
                    exclusive 
                    // onChange={(e) => setTime(e.target.value)}
                    onChange={handleChange}
                    aria-label="Platform"
                    >
                    <ToggleButton onClick={() => setUser(2, 'time4')} value={'time4'} sx={{ cursor: 'pointer' }}  classes={{ selected: classes2.selected }} style={{fontSize: '13px', outlineColor: 'black', outlineWidth: '1px', outlineStyle: 'solid', margin: '2px' }}><b>01pm - 02pm</b></ToggleButton>
                    <ToggleButton onClick={() => setUser(2, 'time5')} value={'time5'} sx={{ cursor: 'pointer' }} classes={{ selected: classes2.selected }} style={{fontSize: '13px', outlineColor: 'black', outlineWidth: '1px', outlineStyle: 'solid', margin: '2px'}}><b>02pm - 03pm</b></ToggleButton>
                    <ToggleButton onClick={() => setUser(2, 'time6')} value={'time6'} sx={{ cursor: 'pointer' }} classes={{ selected: classes2.selected }} style={{fontSize: '13px', outlineColor: 'black', outlineWidth: '1px', outlineStyle: 'solid', margin: '2px'}}><b>03pm - 04pm</b></ToggleButton>
                    </ToggleButtonGroup>
                  </Grid>

              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <br/>

          <Paper
          sx={{
            p: 1,
            pt: 2,
            pb: 2,
            margin: 'auto',
            // maxWidth: 500,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}
        >
          <Grid container spacing={2}>
            <Grid item>
            <Avatar alt="Profile Pic" src='assets/images/instructors/fuhad aminu.jpg' style={{ width: '130px', height: '140px'}} />
              {/* <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="complex" src="assets/images/instructors/emma.jpg" />
              </ButtonBase> */}
            </Grid>
            <Grid item xs={12} sm container spacing={2}>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <h2 style={{ fontSize: '19px'}}><b>Mobile App Developer</b></h2>
                  <p style={{ fontSize: '16px'}}>Fuhad Aminu</p>
                </Grid>
              </Grid>
              
              <Grid item xs direction="column" spacing={2}>
              <Box display="flex" alignItems="center" className={classes.box}>
              <Grid item xs={6} sm container spacing={1} alignItems="center"
               justify="center">
              <Grid item>
              <TextField
               onChange={(e) => { setDate(e.target.value); setUid(3); }}
               className={classes.textField}
                id="date"
                label=""
                type="date"
                // defaultValue="2022-08-28"
                defaultValue={today}
                sx={{ width: 220, fontSize: '20px' }}
                InputLabelProps={{
                shrink: true,
                }}
            />
              </Grid>
              <Grid item alignItems="center"
               justify="center">
              <Button variant="contained" color="success" style={{minHeight: '45px', minWidth: '145px', backgroundColor: 'black', }}>
                Choose a date
            </Button>
              </Grid>
              </Grid>
              </Box>
                <br/>
                   {/* next column */}
                   <Grid item >
                   <Divider>
                    <Chip label="Select Time ⏲" style={{fontSize: '11px', color: 'black'}}/>
                    </Divider>
                   </Grid>
                    <br/>
                  <Grid container justify="center">
                  <ToggleButtonGroup
                    style={{paddingLeft: '30px', paddingRight: '20px'}}
                    color="primary"
                    value={time}
                    exclusive 
                    // onChange={(e) => setTime(e.target.value)}
                    onChange={handleChange}
                    aria-label="Platform"
                    >
                    <ToggleButton onClick={() => setUser(3, 'time1')} value={'time1'} sx={{ cursor: 'pointer' }}  classes={{ selected: classes2.selected }} style={{fontSize: '13px', outlineColor: 'black', outlineWidth: '1px', outlineStyle: 'solid', margin: '2px' }}><b>10am - 11am</b></ToggleButton>
                    <ToggleButton onClick={() => setUser(3, 'time2')} value={'time2'} sx={{ cursor: 'pointer' }} classes={{ selected: classes2.selected }} style={{fontSize: '13px', outlineColor: 'black', outlineWidth: '1px', outlineStyle: 'solid', margin: '2px'}}><b>11am - 12pm</b></ToggleButton>
                    <ToggleButton onClick={() => setUser(3, 'time3')} value={'time3'} sx={{ cursor: 'pointer' }} classes={{ selected: classes2.selected }} style={{fontSize: '13px', outlineColor: 'black', outlineWidth: '1px', outlineStyle: 'solid', margin: '2px'}}><b>12pm - 1pm</b></ToggleButton>
                    </ToggleButtonGroup>
                  </Grid>

                  <br/>
                  <Grid container justify="center">
                  <ToggleButtonGroup
                    style={{paddingLeft: '30px', paddingRight: '20px'}}
                    color="primary"
                    value={time}
                    exclusive 
                    // onChange={(e) => setTime(e.target.value)}
                    onChange={handleChange}
                    aria-label="Platform"
                    >
                    <ToggleButton onClick={() => setUser(3, 'time4')} value={'time4'} sx={{ cursor: 'pointer' }}  classes={{ selected: classes2.selected }} style={{fontSize: '13px', outlineColor: 'black', outlineWidth: '1px', outlineStyle: 'solid', margin: '2px' }}><b>01pm - 02pm</b></ToggleButton>
                    <ToggleButton onClick={() => setUser(3, 'time5')} value={'time5'} sx={{ cursor: 'pointer' }} classes={{ selected: classes2.selected }} style={{fontSize: '13px', outlineColor: 'black', outlineWidth: '1px', outlineStyle: 'solid', margin: '2px'}}><b>02pm - 03pm</b></ToggleButton>
                    <ToggleButton onClick={() => setUser(3, 'time6')} value={'time6'} sx={{ cursor: 'pointer' }} classes={{ selected: classes2.selected }} style={{fontSize: '13px', outlineColor: 'black', outlineWidth: '1px', outlineStyle: 'solid', margin: '2px'}}><b>03pm - 04pm</b></ToggleButton>
                    </ToggleButtonGroup>
                  </Grid>

              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <br/>




        </>

      );
}

export default BookDevCard