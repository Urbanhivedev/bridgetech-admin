import FusePageSimple from '@fuse/core/FusePageSimple';

import {Typography,Icon,AppBar,Card,CardHeader,CardActions,CardContent,CardMedia,CssBaseline,Grid,Container} from '@material-ui/core';
import { styled } from '@mui/material/styles';
import {makeStyles} from  '@material-ui/core/styles';
import Stack from '@mui/material/Stack';



import { Paper,Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';




import IconButton from '@mui/material/IconButton';

import AVTR from "../../../urbanhive-assets/gray-copy.jpg" ;
import TNAIL from  "../../../urbanhive-assets/urbanhive-thumbnails/fundamentals2.png";
/*import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TheatersIcon from '@mui/icons-material/Theaters';*/


function SessionsCard() {


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



  return (
    <>
     <Container maxWidth="lg">
      <CssBaseline/> 
        <Typography variant='h4' align="center" color="textPrimary" gutterBottom paragraph style={{marginTop:"4rem"}}> 
         Our Video Sessions
        </Typography>
        <hr/>

        <Grid container spacing={2} justify="center" style={{marginTop:"2rem", marginBottom:"2rem"}}>
       
       {/*Grid for card */}
        <Grid item xs={4}>
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src={AVTR}/>
          </Avatar>
        }
       
        title="BY: DAGOGO CLINTON URANTA"
        subheader="May 12, 2022"
      />
      <CardMedia
        component="img"
        height="170"
        image={TNAIL}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Web Development Fundamentals<br/> Full Day Session (1).
        </Typography>
      </CardContent>
      
    </Card>

        </Grid>
       {/*Grid for card  ENDING*/}

        <Grid item xs={5}>
        <Typography variant='h5' align="center" color="textPrimary" gutterBottom paragraph> 
         <b>Web Development Fundamentals</b> (1)
        </Typography>
        <p style={{fontSize: '15px'}}>
        In this video we go through how web pages work on the internet,
         Installing your first code editor and explain the terms HTML and CSS,
          with examples. This video is perfect for beginners who have no idea what web development is about.
        </p>
        </Grid>
        <Grid item xs={2} direction-xs-column>
         
          <Stack  spacing={6} >
         
          <Button variant="contained" color="primary" style={{height:"40px",fontSize:"13px",padding:"1rem" }}>
          <Icon className="text-20" >
             videocam
           </Icon>
             &nbsp;
             <b>Watch</b>
             
          </Button>
         
          <Button variant="contained" color="primary" style={{height:"40px",fontSize:"13px",padding:"1rem"}}>
          <Icon className="text-20" >
            event
           </Icon>
             &nbsp;
             <b>Book Dev</b>
          </Button>
          
          <Stack spacing={1} direction="row"  style={{color:"#f2db05"}}>
             <Icon fontSize="medium" >
                star
              </Icon>
              <Icon fontSize="medium" >
                star
              </Icon>
              <Icon fontSize="medium" >
                star
              </Icon>
              <Icon fontSize="medium" >
                star
              </Icon>
              <Icon fontSize="medium" >
                star
              </Icon>
          </Stack>
          
          
          </Stack>

         
        </Grid>
       
      </Grid>

      <hr/>
      {/* Second Card begins */}
      <Grid container spacing={2} justify="center" style={{marginTop:"2rem", marginBottom:"2rem"}}>
       
       {/*Grid for card */}
        <Grid item xs={4}>
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src={AVTR}/>
          </Avatar>
        }
       
        title="BY: DAGOGO CLINTON URANTA"
        subheader="May 12, 2022"
      />
      <CardMedia
        component="img"
        height="170"
        image={TNAIL}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Web Development Fundamentals<br/> Full Day Session (1).
        </Typography>
      </CardContent>
      
    </Card>

        </Grid>
       {/*Grid for card  ENDING*/}

        <Grid item xs={5}>
        <Typography variant='h5' align="center" color="textPrimary" gutterBottom paragraph> 
         <b>Web Development Fundamentals</b> (2)
        </Typography>
        <p style={{fontSize: '15px'}}>
        In this video we go through how web pages work on the internet,
         Installing your first code editor and explain the terms HTML and CSS,
          with examples. This video is perfect for beginners who have no idea what web development is about.
        </p>
        </Grid>
        <Grid item xs={2} direction-xs-column>
         
          <Stack  spacing={6} >
         
          <Button variant="contained" color="primary" style={{height:"40px",fontSize:"13px",padding:"1rem" }}>
          <Icon className="text-20" >
             videocam
           </Icon>
             &nbsp;
             <b>Watch</b>
             
          </Button>
         
          <Button variant="contained" color="primary" style={{height:"40px",fontSize:"13px",padding:"1rem"}}>
          <Icon className="text-20" >
            event
           </Icon>
             &nbsp;
             <b>Book Dev</b>
          </Button>
          
          <Stack spacing={1} direction="row"  style={{color:"#f2db05"}}>
             <Icon fontSize="medium" >
                star
              </Icon>
              <Icon fontSize="medium" >
                star
              </Icon>
              <Icon fontSize="medium" >
                star
              </Icon>
              <Icon fontSize="medium" >
                star
              </Icon>
              <Icon fontSize="medium" >
                star
              </Icon>
          </Stack>
          
          
          </Stack>

         
        </Grid>
       
      </Grid>
 

     </Container>
    </>
  );
}

export default SessionsCard;
