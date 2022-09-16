import FusePageSimple from '@fuse/core/FusePageSimple';

import {Typography,Icon,AppBar,Card,CardHeader,CardActions,CardContent,CardMedia,CssBaseline,Grid,Container} from '@material-ui/core';
import { styled,createTheme, ThemeProvider  } from '@mui/material/styles';
import {makeStyles} from  '@material-ui/core/styles';
import Stack from '@mui/material/Stack';

import { useState } from 'react';

import { Paper,Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';




import IconButton from '@mui/material/IconButton';

import AVTR1 from "../../../urbanhive-assets/gray-copy.jpg" ;
import AVTR2 from "../../../urbanhive-assets/ola-profile3.png" ;

import TNAIL1 from  "../../../urbanhive-assets/urbanhive-thumbnails/fundamentals1.png";
import TNAIL2 from  "../../../urbanhive-assets/urbanhive-thumbnails/fundamentals2.png";
import TNAIL3 from  "../../../urbanhive-assets/urbanhive-thumbnails/CSS-units.png";
import TNAIL4 from  "../../../urbanhive-assets/urbanhive-thumbnails/ola-profile3.png";
import TNAIL5 from  "../../../urbanhive-assets/urbanhive-thumbnails/ola-profile3.png";
import TNAIL6 from  "../../../urbanhive-assets/urbanhive-thumbnails/ola-profile3.png";
import TNAIL7 from  "../../../urbanhive-assets/urbanhive-thumbnails/CSS-position.png";
import TNAIL8 from  "../../../urbanhive-assets/urbanhive-thumbnails/code-editor.png";
import TNAIL9 from  "../../../urbanhive-assets/urbanhive-thumbnails/first-webpage.png";


/*import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TheatersIcon from '@mui/icons-material/Theaters';*/


function SessionsCard() {

 

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#000000',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    }
     
  },
});

 /*page regulation states */
 const [page1,setPage1] = useState(true)
 const [page2,setPage2] = useState(false)
 const [page3,setPage3] = useState(false)
 const [page4,setPage4] = useState(false)
 const [page5,setPage5] = useState(false)
 
 /*page regulation states ending */

  /* PAGE HANDLER BUTTON SECTION */

  const page1Handler = () => {
    setPage1(true)
    setPage2(false)
    setPage3(false)
    setPage4(false)
    setPage5(false)
    
  } 

  const page2Handler = () => {
    setPage1(false)
    setPage2(true)
    setPage3(false)
    setPage4(false)
    setPage5(false)
    
  } 

  const page3Handler = () => {
    setPage1(false)
    setPage2(false)
    setPage3(true)
    setPage4(false)
    setPage5(false)
    
    
  } 


  const page4Handler = () => {
    setPage1(false)
    setPage2(false)
    setPage3(false)
    setPage4(true)
    setPage5(false)
    
    
    
  } 


  const page5Handler = () => {
    setPage1(false)
    setPage2(false)
    setPage3(false)
    setPage4(false)
    setPage5(true)
    
     
  } 
 /* PAGE HANDLER BUTTON SECTION CLOSING */




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
     <ThemeProvider theme={theme}>
      <CssBaseline/> 
        <Typography variant='h4' align="center" color="textPrimary" gutterBottom paragraph style={{marginTop:"4rem"}}> 
         Our Video Sessions
        </Typography>
        <hr/>
    {page1 &&
       <>
        <Grid container spacing={2} justify="center" style={{marginTop:"2rem", marginBottom:"2rem"}}>
       
       
        <Grid item xs={4}>
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src={AVTR1}/>
          </Avatar>
        }
       
        title="BY: DAGOGO CLINTON URANTA"
        subheader="May 12, 2022"
      />
      <CardMedia
        component="img"
        height="170"
        image={TNAIL1}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
       <b> Web Development Fundamentals</b><br/>  (1 Hour Long).
        </Typography>
      </CardContent>
      
    </Card>

        </Grid>
       

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
             <a href="https://youtu.be/N3KLE4I3rNQ"  target="_blank" rel="noopener noreferrer" > <b>Watch</b>  </a>
            
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
     
   
   
   <Grid container spacing={2} justify="center" style={{marginTop:"2rem", marginBottom:"2rem"}}>
       
         
          <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
         <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img src={AVTR1}/>
            </Avatar>
          }
       
          title="BY: DAGOGO CLINTON URANTA"
          subheader="May 12, 2022"
         />
        <CardMedia
          component="img"
          height="170"
          image={TNAIL2}
          alt="Paella dish"
        />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <b>Web Development Fundamentals</b><br/> Full Day Session (48 mins long).
        </Typography>
      </CardContent>
      
    </Card>

        </Grid>
      

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
             <a href="https://youtu.be/qP_dXkHoZ4M" target="_blank" rel="noopener noreferrer" >    <b>Watch</b> </a>
             
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
    </>
   }

{page2 &&
       <>
        <Grid container spacing={2} justify="center" style={{marginTop:"2rem", marginBottom:"2rem"}}>
       
       
        <Grid item xs={4}>
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src={AVTR1}/>
          </Avatar>
        }
       
        title="BY: DAGOGO CLINTON URANTA"
        subheader="May 12, 2022"
      />
      <CardMedia
        component="img"
        height="170"
        image={TNAIL3}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <b>CSS units explained</b><br/>(35 mins long).
        </Typography>
      </CardContent>
      
    </Card>

        </Grid>
       

        <Grid item xs={5}>
        <Typography variant='h5' align="center" color="textPrimary" gutterBottom paragraph> 
         <b>CSS Units Explained</b> 
        </Typography>
        <p style={{fontSize: '15px'}}>
        Here we go through the types of units in CSS , explaining both absolute and relative units. We see some practical examples/use cases of these units as well.
        </p>
        </Grid>
        <Grid item xs={2} direction-xs-column>
         
          <Stack  spacing={6} >
         
          
          <Button variant="contained" color="primary" style={{height:"40px",fontSize:"13px",padding:"1rem" }}>
          <Icon className="text-20" >
             videocam
           </Icon>
             &nbsp;
             <a href="https://youtu.be/0_KwEWSCDqE" target="_blank" rel="noopener noreferrer">   <b>Watch</b> </a>
             
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
     
   
   
   <Grid container spacing={2} justify="center" style={{marginTop:"2rem", marginBottom:"2rem"}}>
       
         
          <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
         <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img src={AVTR2}/>
            </Avatar>
          }
       
          title="BY: OLANREWAJU KABIR"
          subheader="May 12, 2022"
         />
        <CardMedia
          component="img"
          height="170"
          image={TNAIL4}
          alt="Paella dish"
        />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
       <b>Web Development Indepth</b> <br/> (5 hours long)
        </Typography>
      </CardContent>
      
    </Card>

        </Grid>
      

        <Grid item xs={5}>
        <Typography variant='h5' align="center" color="textPrimary" gutterBottom paragraph> 
         <b>Web Development Indepth</b> (1)
        </Typography>
        <p style={{fontSize: '15px'}}>
        This video takes a thorough look at what web development is . It explores the purpose of each pillar of web development 
        (HTML ,CSS and Javascript), and displays how they interact with one another.
         It then goes into a tutorial on each of these technologies and how to set them up.
        </p>
        </Grid>
        <Grid item xs={2} direction-xs-column>
         
          <Stack  spacing={6} >
         
          
          <Button variant="contained" color="primary" style={{height:"40px",fontSize:"13px",padding:"1rem" }}>
          <Icon className="text-20" >
             videocam
           </Icon>
             &nbsp;
             <a href="https://youtu.be/vUwOW5VXM0Y" target="_blank" rel="noopener noreferrer">   <b>Watch</b> </a>
             
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
    </>
   }

{page3 &&
       <>
        <Grid container spacing={2} justify="center" style={{marginTop:"2rem", marginBottom:"2rem"}}>
       
       
        <Grid item xs={4}>
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src={AVTR2}/>
          </Avatar>
        }
       
        title="BY: OLANREWAJU KABIR"
        subheader="March 18th, 2022"
      />
      <CardMedia
        component="img"
        height="170"
        image={TNAIL5}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <b>Web Development Indepth</b><br/>(1.5 hours Long)
        </Typography>
      </CardContent>
      
    </Card>

        </Grid>
       

        <Grid item xs={5}>
        <Typography variant='h5' align="center" color="textPrimary" gutterBottom paragraph> 
         <b>Web Development Indepth</b> (2)
        </Typography>
        <p style={{fontSize: '15px'}}>
        In this video , you will follow one of our developers to create a basic page with html and css.
         This is to give you a taste of development of web pages and how they interact. You will create html ,
         css and Javascript files in this video and implement some basic functionality.
        </p>
        </Grid>
        <Grid item xs={2} direction-xs-column>
         
          <Stack  spacing={6} >
         
          <Button variant="contained" color="primary" style={{height:"40px",fontSize:"13px",padding:"1rem" }}>
          <Icon className="text-20" >
             videocam
           </Icon>
             &nbsp;
             <a href="https://youtu.be/9GQgRd3Yz1U"  target="_blank" rel="noopener noreferrer" class="post-thumb">   <b>Watch</b> </a>
             
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
     
   
   
   <Grid container spacing={2} justify="center" style={{marginTop:"2rem", marginBottom:"2rem"}}>
       
         
          <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
         <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img src={AVTR2}/>
            </Avatar>
          }
       
          title="BY: OLANREWAJU KABIR"
          subheader="March 18th, 2022"
         />
        <CardMedia
          component="img"
          height="170"
          image={TNAIL6}
          alt="Paella dish"
        />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <b>Web Development Indepth</b><br/>(1.5 hours long)
        </Typography>
      </CardContent>
      
    </Card>

        </Grid>
      

        <Grid item xs={5}>
        <Typography variant='h5' align="center" color="textPrimary" gutterBottom paragraph> 
         <b>Web Development Indepth</b> (3)
        </Typography>
        <p style={{fontSize: '15px'}}>
        In this video , you will follow one of our developers to create a basic 
        page with html and css. This is to give you a taste of development of 
        web pages and how they interact. You will create html , css and Javascript files in this video and implement some basic functionality.
        </p>
        </Grid>
        <Grid item xs={2} direction-xs-column>
         
          <Stack  spacing={6} >
          
          <Button variant="contained" color="primary" style={{height:"40px",fontSize:"13px",padding:"1rem" }}>
          <Icon className="text-20" >
             videocam
           </Icon>
             &nbsp;
             <a href="https://youtu.be/0wSzCv1nM28" target="_blank" rel="noopener noreferrer">   <b>Watch</b> </a>
             
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
    </>
   }

{page4 &&
       <>
        <Grid container spacing={2} justify="center" style={{marginTop:"2rem", marginBottom:"2rem"}}>
       
       
        <Grid item xs={4}>
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src={AVTR1}/>
          </Avatar>
        }
       
        title="BY: DAGOGO CLINTON URANTA"
        subheader="April 23rd, 2022"
      />
      <CardMedia
        component="img"
        height="170"
        image={TNAIL7}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <b>CSS positioning Basics</b><br/>(25 mins long)
        </Typography>
      </CardContent>
      
    </Card>

        </Grid>
       

        <Grid item xs={5}>
        <Typography variant='h5' align="center" color="textPrimary" gutterBottom paragraph> 
         <b>CSS positioning Basics</b> 
        </Typography>
        <p style={{fontSize: '15px'}}>
        This video explores the different types of positioning properties available in CSS.
         By watching this video ,you will gain an understanding of the use cases of each of
          these position properties, along with the confidence to try them yourself! Enjoy.
        </p>
        </Grid>
        <Grid item xs={2} direction-xs-column>
         
          <Stack  spacing={6} >
         
          
          <Button variant="contained" color="primary" style={{height:"40px",fontSize:"13px",padding:"1rem" }}>
          <Icon className="text-20" >
             videocam
           </Icon>
             &nbsp;
             <a href="https://youtu.be/75sQS5r1GPY" target="_blank" rel="noopener noreferrer">   <b>Watch</b> </a>
             
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
     
   
   
   <Grid container spacing={2} justify="center" style={{marginTop:"2rem", marginBottom:"2rem"}}>
       
         
          <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
         <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img src={AVTR1}/>
            </Avatar>
          }
       
          title="BY: DAGOGO CLINTON URANTA"
          subheader="April 19th, 2022"
         />
        <CardMedia
          component="img"
          height="170"
          image={TNAIL8}
          alt="Paella dish"
        />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <b>Visual Studio Code</b><br/>(18 mins long)
        </Typography>
      </CardContent>
      
    </Card>

        </Grid>
      

        <Grid item xs={5}>
        <Typography variant='h5' align="center" color="textPrimary" gutterBottom paragraph> 
         <b>Visual Studio Code</b> 
        </Typography>
        <p style={{fontSize: '15px'}}>
        This is a walkthrough , on installing and setting up visual studio code. VS code was created by microsoft,
         and is one of the most popular code editors in the world, because of it's multitude of features and simplicity to use.
          At the end of this tutorial,you will have downloaded and set up visual studio code. You will also be familiar with a basic navigation of VS code.
        </p>
        </Grid>
        <Grid item xs={2} direction-xs-column>
         
          <Stack  spacing={6} >
         
          
          <Button variant="contained" color="primary" style={{height:"40px",fontSize:"13px",padding:"1rem" }}>
          <Icon className="text-20" >
             videocam
           </Icon>
             &nbsp;
             <a href="https://youtu.be/akid1fziH_8" target="_blank" rel="noopener noreferrer"> <b>Watch</b> </a>
             
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
    </>
   }


{page5 &&
       <>
        <Grid container spacing={2} justify="center" style={{marginTop:"2rem", marginBottom:"2rem"}}>
       
       
        <Grid item xs={4}>
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src={AVTR1}/>
          </Avatar>
        }
       
        title="BY: DAGOGO CLINTON URANTA"
        subheader="April 19th, 2022"
      />
      <CardMedia
        component="img"
        height="170"
        image={TNAIL9}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <b>Creating your first Webpage</b><br/> (32 mins long).
        </Typography>
      </CardContent>
      
    </Card>

        </Grid>
       

        <Grid item xs={5}>
        <Typography variant='h5' align="center" color="textPrimary" gutterBottom paragraph> 
         <b>Creating your first Webpage</b>
        </Typography>
        <p style={{fontSize: '15px'}}>
        In this video , you will follow one of our developers, step by step, to create a basic page with html and css.
         This is to give you a taste of development of web pages and how they interact.
          You will create html , css and Javascript files in this video and implement some basic functionality.
        </p>
        </Grid>
        <Grid item xs={2} direction-xs-column>
         
          <Stack  spacing={6} >
         
          
          <Button variant="contained" color="primary" style={{height:"40px",fontSize:"13px",padding:"1rem" }}>
          <Icon className="text-20" >
             videocam
           </Icon>
             &nbsp;
             <a href="https://youtu.be/aa-cQp5wKU0" target="_blank" rel="noopener noreferrer">  <b>Watch</b> </a>
             
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
    </>
   }
      <hr/>
      {/* BUTTON NAVIGATION FOR MULTIPLE PAGES */}
      
      <Grid container justifyContent="center" columnSpacing={1} style={{marginTop:"1rem",marginBottom:"1rem"}} >
      <Button variant="contained" color="primary" onClick={page1Handler} style={{height:"40px",fontSize:"13px",padding:"1rem",marginLeft:"1rem",marginRight:"1rem"}}>
         
             &nbsp;
             <b>1</b>
          </Button>

          <Button variant="contained" color="primary" onClick={page2Handler}  style={{height:"40px",fontSize:"13px",padding:"1rem",marginLeft:"1rem",marginRight:"1rem"}}>
          
             &nbsp;
             <b>2</b>
          </Button>

          <Button variant="contained" color="primary" onClick={page3Handler}  style={{height:"40px",fontSize:"13px",padding:"1rem",marginLeft:"1rem",marginRight:"1rem"}}>
          
             &nbsp;
             <b>3</b>
          </Button>

          <Button variant="contained" color="primary" onClick={page4Handler}  style={{height:"40px",fontSize:"13px",padding:"1rem",marginLeft:"1rem",marginRight:"1rem"}}>
          
          &nbsp;
          <b>4</b>
       </Button>

       <Button variant="contained" color="primary" onClick={page5Handler}  style={{height:"40px",fontSize:"13px",padding:"1rem",marginLeft:"1rem",marginRight:"1rem"}}>
          
          &nbsp;
          <b>5</b>
       </Button>

     
     </Grid>
     </ThemeProvider>
     </Container>
    </>
  );
}

export default SessionsCard;
