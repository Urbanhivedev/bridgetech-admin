import React, { useState, useEffect, useRef } from 'react'
import Controls from "./controls/Controls";
import { useForm, Form } from './useForm';
import { TextField,InputLabel, MenuItem, Select, Grid, Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import {Avatar, Badge, Chip, Divider, Stack, Alert, IconButton } from '@mui/material';
import { Crop } from '@mui/icons-material';
import { styled,createTheme,ThemeProvider } from '@mui/material/styles';
import * as skillSetService from "./skillSetService";
import CropEasy from './crop/CropEasy';
import '../../app.css';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory,useParams } from 'react-router-dom';
import { createProfile, fetchProfile, uploadImage } from 'redux/actions/profile.action';
import { updateAppointment,/*fetchSelectedAppointment */ } from 'redux/actions/appointments.action';
import { resetMsg } from 'redux/reducers/profile.slice';
import { fb, static_img } from 'config/firebase';



const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

  const theme = createTheme({
    palette: {
      
      primary: {
        main: '#EE3B3B',
      },
    },
  });
  
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));
  


const isTechnical = [
    { id: 'yes', title: 'Yes' },
    { id: 'no', title: 'No' },
]

const type = [
    { id: 'technical', title: 'Technical' },
    { id: 'non-technical', title: 'Non-Technical' },
]



export default function ProfileForm() {
    const {id} = useParams();
    const appointmentId = id
    console.log(appointmentId)
    const nodeRef = useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();
    const { user } = useSelector((state) => state.login);
    const { createDevData, isLoading, error, message } = useSelector((state) => state.createDev);
    const [showError, setshowError] = useState(false);
    const [showError2, setshowError2] = useState(false);
    const [file, setFile] = useState(null);
    const [photoURL, setPhotoURL] = useState(createDevData.photoUrl != '' ? createDevData.photoUrl : user.photoUrl);
    // const [photoURL, setPhotoURL] = useState(null);
    const [openCrop, setOpenCrop] = useState(false);
  

    const initialFValues = {
      id: user.uid,
      firstName: createDevData.firstName == '' ? '' : createDevData.firstName,
      lastName: createDevData.lastName == '' ? '' : createDevData.lastName,
      intro: createDevData.intro == '' ? '' : createDevData.intro,
      skills_needed: createDevData.skills_needed == '' ? '' : createDevData.skills_needed,
      isTechnical: createDevData.isTechnical == '' ? 'nil' : createDevData.isTechnical,
      lookingFor: createDevData.lookingFor == '' ? 'nil' : createDevData.lookingFor,
      city: createDevData.city == '' ? '' : createDevData.city,
      skillset: createDevData.skillset == '' ? '' : createDevData.skillset,
      // hireDate: new Date(),
      // isPermanent: false,
  }

  //an update for sending all
  const updates =  {
     Day:new Date(),
     time:new Date(),
     developerBooked:"Dagus Urantus",

  }



    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          setFile(file);
          setPhotoURL(URL.createObjectURL(file));
          setOpenCrop(true);
        }
      };
    
    function handleChangeNew(){
        console.log('changed');
    }

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('firstName' in fieldValues)
        temp.firstName = fieldValues.firstName ? "" : "This field is required."

        if ('lastName' in fieldValues)
        temp.lastName = fieldValues.lastName ? "" : "This field is required."

        if ('intro' in fieldValues)
            temp.intro = fieldValues.intro ? "" : "This field is required."
       if ('skillset' in fieldValues)
            temp.skillset = fieldValues.skillset.length != 0 ? "" : "This field is required."
       if ('city' in fieldValues)
            temp.city = fieldValues.city.length != 0 ? "" : "This field is required."
       if ('skills_needed' in fieldValues)
            temp.skills_needed = fieldValues.skills_needed.length != 0 ? "" : "This field is required."
        // if ('email' in fieldValues)
        //     temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        // if ('mobile' in fieldValues)
        //     temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault();
       /*console.log('Photo URL: ', photoURL);
       console.log('File URL: ', file);
        e.preventDefault()
        if(values.isTechnical == 'nil'){
          setshowError(true);
        }else{
          setshowError(false);
        }
        if(values.lookingFor == 'nil'){
          setshowError2(true);
        }else{
          setshowError2(false);
        }
        if (validate()){
           const intro = values.intro;
           const skillset = values.skillset;
           const city = values.city;
           const skills_needed = values.skills_needed;
           const isTechnical = values.isTechnical;
           const lookingFor = values.lookingFor;

          const profile = { firstName,LastName ,intro, skillset, city, skills_needed, isTechnical, lookingFor};
          console.log('Logged User: ', fb.auth().currentUser.uid);
          if(photoURL == static_img){
          dispatch(createProfile(profile, user, file, resetForm, photoURL));
          }else{
            dispatch(uploadImage(profile, user, file, resetForm));
          } 
        }*/

        dispatch(updateAppointment(appointmentId,updates));
    }

    return !openCrop ? (
      <ThemeProvider theme={theme}>
        <Form onSubmit={handleSubmit}>
      {error && <div><Alert
        severity="error" color="error"
        action={
          <Button color="inherit" size="small" style={{ fontSize: '15px' }} onClick={() => {dispatch(resetMsg())}}>
            <b>X</b>
          </Button>
        }
      >
        <p style={{ fontSize: '11px' }}><b>{error}</b></p>
      </Alert><br/></div>}

      {message && <div><Alert
        severity="success" color="success"
        action={
          <Button color="inherit" size="small" style={{ fontSize: '15px'}} >
            <b>X</b>
          </Button>
        }
      >
        <p style={{ fontSize: '11px' }}><b>{message}</b></p>
      </Alert><br/></div>
      /*SUBMISSION ALERT ENDING */
      }
       {/*the back button */}
        
        <Button  size="small" style={{ fontSize: '15px',backgroundColor:'black',color:"white", marginBottom:"20px"}} onClick={()=>{history.push('/apps/admin/assignedbookings')}}>
            <b>BACK</b>
          </Button>

        

        <h2>Current Details:</h2>
         <br/>
         <Grid container spacing={4}>
                
                <Grid item xs={12} sm={6}>
                 <p>Topic: <h4>Hard Coded for now</h4></p>
                </Grid>
                <Grid item xs={12} sm={6}>
                 <p>Chosen Developer:<h4>Hard Coded for now</h4></p>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                <p>Chosen Day:<h4>Hard Coded for now</h4></p>
                </Grid>

                <Grid item xs={12} sm={6}>
                <p>Chosen Time:<h4>Hard Coded for now</h4></p>
                </Grid>

              

               
                
        

        

         </Grid>
                <br/>
        <Divider>
            
        </Divider>
        <br/>
            <h2>Edit the Appointment Details Here:</h2><br/>
            <Grid container spacing={4}>
                

                <Grid item xs={12} sm={6}>
                <Controls.Select
                        name="Developer"
                        label="Change developer"
                        value={values.skillset}
                        onChange={handleInputChange}
                        options={skillSetService.getSkillset()}
                        error={errors.skillset}
                    />
                    {showError ? <p style={{color: 'red'}}>This field is required.</p> : ''}
                </Grid>

                <Grid item xs={12} sm={6}>
                <Controls.Select
                        name="Date"
                        label="Change date"
                        value={values.skillset}
                        onChange={handleInputChange}
                        options={skillSetService.getSkillset()}
                        error={errors.skillset}
                    />
                    {showError ? <p style={{color: 'red'}}>This field is required.</p> : ''}
                </Grid>

                <Grid item xs={12} sm={6}>
                      <Controls.Select
                        name="Time"
                        label="Change Time"
                        value={values.skills_needed}
                        onChange={handleInputChange}
                        options={skillSetService.getSkillset()}
                        error={errors.skills_needed}
                    />
                </Grid>

               
                
        

         <Grid item xs={12} sm={6}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="profilePhoto">
          <p>Cancel this appointment? </p><br/>
          <Controls.Button
                    text="Cancel"
                    color="secondary"
                    onClick={resetForm} />

        
          </label>
         
        </Box>
         </Grid>

                </Grid>
                <br/>
        <Divider>
             <Chip label=" 🔃" /> 
        </Divider>
        <br/>
            <Box 
                display="flex" 
                alignItems="center"
                justifyContent="center"
            >
                <div>
                <Controls.Button
                    type="submit"
                    disabled={isLoading}
                    text={isLoading ? 'Loading...' : 'Submit'} />
               
                </div>
                </Box>
        </Form>
        </ThemeProvider>
     ) : (
        <CropEasy {...{ photoURL, setOpenCrop, setPhotoURL, setFile }} />
      );
}
