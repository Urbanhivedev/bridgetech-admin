import React, { useState, useMemo, useRef, useEffect } from 'react'
// import Button from '@material-ui/core/Button';
import { TextField, FormControl, FormControlLabel, RadioGroup, Radio, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import { Divider, Chip, Grid, Paper, Typography, Box, Avatar, Button, ButtonBase, Stack, 
    ToggleButton, ToggleButtonGroup, Hidden  } from '@mui/material';
import { borderRadius } from '@mui/system';
  


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
    const classes = useStyles();
    const classes2 = useStyles2();
    const [alignment, setAlignment] = useState('time1');
    const [bColor, setBColor] = useState('');


    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
        console.log('Selected Time is:', newAlignment);
        alert('You have successfully booked a dev😊');
    };

    let today = new Date().toISOString().slice(0, 10);

    return (
        <>
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
            <Avatar alt="Profile Pic" src="assets/images/instructors/emma.jpg" style={{ width: '160px', height: '160px'}} />
              {/* <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="complex" src="assets/images/avatars/Mai.jpg" />
              </ButtonBase> */}
            </Grid>
            <Grid item xs={12} sm container spacing={2}>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <h2 style={{ fontSize: '19px'}}><b>.Net Developer</b></h2>
                  <p style={{ fontSize: '16px'}}>Emmanuel Agbo</p>
                </Grid>
              </Grid>
              
              <Grid item xs direction="column" spacing={2}>
              <Box display="flex" alignItems="center" className={classes.box}>
              <Grid item xs={6} sm container spacing={1} alignItems="center"
               justify="center">
              <Grid item>
              <TextField
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
                    value={alignment}
                    exclusive 
                    onChange={handleChange}
                    aria-label="Platform"
                    >
                    <ToggleButton value={'time1'} sx={{ cursor: 'pointer' }}  classes={{ selected: classes2.selected }} style={{fontSize: '13px', outlineColor: 'black', outlineWidth: '1px', outlineStyle: 'solid', margin: '2px' }}><b>10am - 12pm</b></ToggleButton>
                    <ToggleButton value={'time2'} sx={{ cursor: 'pointer' }} classes={{ selected: classes2.selected }} style={{fontSize: '13px', outlineColor: 'black', outlineWidth: '1px', outlineStyle: 'solid', margin: '2px'}}><b>12pm - 2pm</b></ToggleButton>
                    <ToggleButton value={'time3'} sx={{ cursor: 'pointer' }} classes={{ selected: classes2.selected }} style={{fontSize: '13px', outlineColor: 'black', outlineWidth: '1px', outlineStyle: 'solid', margin: '2px'}}><b>2:30pm - 4pm</b></ToggleButton>
                    </ToggleButtonGroup>
                  </Grid>



                   {/* <Grid item>
                   <FormControl>
                   <ThemeProvider theme={theme}>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="time1" control={<Radio  color='primary'/>} label="10am - 12pm" />
                        <FormControlLabel value="time2" control={<Radio />} label="12:30pm - 2:30pm" />
                        <FormControlLabel value="time3" control={<Radio />} label="2:30pm - 4:30pm" />
                    </RadioGroup>
                    </ThemeProvider>
                    </FormControl>

                    </Grid> */}

              </Grid>
            </Grid>
          </Grid>
        </Paper>
        {/* No 2 */}
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
            <Avatar alt="Profile Pic" src="assets/images/instructors/dagogo-uranta.jpg" style={{ width: '160px', height: '160px'}} />
              {/* <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="complex" src="assets/images/avatars/Mai.jpg" />
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
                    value={alignment}
                    exclusive 
                    onChange={handleChange}
                    aria-label="Platform"
                    >
                    <ToggleButton value={'time1'} sx={{ cursor: 'pointer' }}  classes={{ selected: classes2.selected }} style={{fontSize: '13px', outlineColor: 'black', outlineWidth: '1px', outlineStyle: 'solid', margin: '2px' }}><b>10am - 12pm</b></ToggleButton>
                    <ToggleButton value={'time2'} sx={{ cursor: 'pointer' }} classes={{ selected: classes2.selected }} style={{fontSize: '13px', outlineColor: 'black', outlineWidth: '1px', outlineStyle: 'solid', margin: '2px'}}><b>12pm - 2pm</b></ToggleButton>
                    <ToggleButton value={'time3'} sx={{ cursor: 'pointer' }} classes={{ selected: classes2.selected }} style={{fontSize: '13px', outlineColor: 'black', outlineWidth: '1px', outlineStyle: 'solid', margin: '2px'}}><b>2:30pm - 4pm</b></ToggleButton>
                    </ToggleButtonGroup>
                  </Grid>



                   {/* <Grid item>
                   <FormControl>
                   <ThemeProvider theme={theme}>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="time1" control={<Radio  color='primary'/>} label="10am - 12pm" />
                        <FormControlLabel value="time2" control={<Radio />} label="12:30pm - 2:30pm" />
                        <FormControlLabel value="time3" control={<Radio />} label="2:30pm - 4:30pm" />
                    </RadioGroup>
                    </ThemeProvider>
                    </FormControl>

                    </Grid> */}

              </Grid>
            </Grid>
          </Grid>
        </Paper>
       {/* No 3 */}
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
            <Avatar alt="Profile Pic" src="assets/images/instructors/betty.jpg" style={{ width: '160px', height: '160px'}} />
              {/* <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="complex" src="assets/images/avatars/Mai.jpg" />
              </ButtonBase> */}
            </Grid>
            <Grid item xs={12} sm container spacing={2}>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <h2 style={{ fontSize: '19px'}}><b>Java Developer</b></h2>
                  <p style={{ fontSize: '16px'}}>Juliet Chioma</p>
                </Grid>
              </Grid>
              
              <Grid item xs direction="column" spacing={2}>
              <Box display="flex" alignItems="center" className={classes.box}>
              <Grid item xs={6} sm container spacing={1} alignItems="center"
               justify="center">
              <Grid item>
              <TextField
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
                    value={alignment}
                    exclusive 
                    onChange={handleChange}
                    aria-label="Platform"
                    >
                    <ToggleButton value={'time1'} sx={{ cursor: 'pointer' }}  classes={{ selected: classes2.selected }} style={{fontSize: '13px', outlineColor: 'black', outlineWidth: '1px', outlineStyle: 'solid', margin: '2px' }}><b>10am - 12pm</b></ToggleButton>
                    <ToggleButton value={'time2'} sx={{ cursor: 'pointer' }} classes={{ selected: classes2.selected }} style={{fontSize: '13px', outlineColor: 'black', outlineWidth: '1px', outlineStyle: 'solid', margin: '2px'}}><b>12pm - 2pm</b></ToggleButton>
                    <ToggleButton value={'time3'} sx={{ cursor: 'pointer' }} classes={{ selected: classes2.selected }} style={{fontSize: '13px', outlineColor: 'black', outlineWidth: '1px', outlineStyle: 'solid', margin: '2px'}}><b>2:30pm - 4pm</b></ToggleButton>
                    </ToggleButtonGroup>
                  </Grid>



                   {/* <Grid item>
                   <FormControl>
                   <ThemeProvider theme={theme}>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="time1" control={<Radio  color='primary'/>} label="10am - 12pm" />
                        <FormControlLabel value="time2" control={<Radio />} label="12:30pm - 2:30pm" />
                        <FormControlLabel value="time3" control={<Radio />} label="2:30pm - 4:30pm" />
                    </RadioGroup>
                    </ThemeProvider>
                    </FormControl>

                    </Grid> */}

              </Grid>
            </Grid>
          </Grid>
        </Paper>

         {/* No 4 */}
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
            <Avatar alt="Profile Pic" src="assets/images/instructors/ola-kabir.png" style={{ width: '160px', height: '160px'}} />
              {/* <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="complex" src="assets/images/avatars/Mai.jpg" />
              </ButtonBase> */}
            </Grid>
            <Grid item xs={12} sm container spacing={2}>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <h2 style={{ fontSize: '19px'}}><b>PHP Developer</b></h2>
                  <p style={{ fontSize: '16px'}}>Ola Kabir</p>
                </Grid>
              </Grid>
              
              <Grid item xs direction="column" spacing={2}>
              <Box display="flex" alignItems="center" className={classes.box}>
              <Grid item xs={6} sm container spacing={1} alignItems="center"
               justify="center">
              <Grid item>
              <TextField
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
                    value={alignment}
                    exclusive 
                    onChange={handleChange}
                    aria-label="Platform"
                    >
                    <ToggleButton value={'time1'} sx={{ cursor: 'pointer' }}  classes={{ selected: classes2.selected }} style={{fontSize: '13px', outlineColor: 'black', outlineWidth: '1px', outlineStyle: 'solid', margin: '2px' }}><b>10am - 12pm</b></ToggleButton>
                    <ToggleButton value={'time2'} sx={{ cursor: 'pointer' }} classes={{ selected: classes2.selected }} style={{fontSize: '13px', outlineColor: 'black', outlineWidth: '1px', outlineStyle: 'solid', margin: '2px'}}><b>12pm - 2pm</b></ToggleButton>
                    <ToggleButton value={'time3'} sx={{ cursor: 'pointer' }} classes={{ selected: classes2.selected }} style={{fontSize: '13px', outlineColor: 'black', outlineWidth: '1px', outlineStyle: 'solid', margin: '2px'}}><b>2:30pm - 4pm</b></ToggleButton>
                    </ToggleButtonGroup>
                  </Grid>



                   {/* <Grid item>
                   <FormControl>
                   <ThemeProvider theme={theme}>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="time1" control={<Radio  color='primary'/>} label="10am - 12pm" />
                        <FormControlLabel value="time2" control={<Radio />} label="12:30pm - 2:30pm" />
                        <FormControlLabel value="time3" control={<Radio />} label="2:30pm - 4:30pm" />
                    </RadioGroup>
                    </ThemeProvider>
                    </FormControl>

                    </Grid> */}

              </Grid>
            </Grid>
          </Grid>
        </Paper>

        </>

      );
}

export default BookDevCard