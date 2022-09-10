import FusePageSimple from '@fuse/core/FusePageSimple';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@mui/material';
import ProfileForm from './components/ProfileForm';


function ProfileApp() {
  return (
    <FusePageSimple
      header={
        <div className="flex flex-1 items-center justify-between p-12 md:p-24" style={{backgroundColor: "#000000"}}>
          <div className="flex flex-col">
            <div className="flex items-center mb-16">
              <Icon className="text-18" color="action">
                home
              </Icon>
              <Icon className="text-16" color="action">
                chevron_right
              </Icon>
              <Typography color="textSecondary" className="font-medium">
                Profile
              </Typography>
            </div>
            <Typography variant="h6" className="text-18 sm:text-24 font-semibold">
              My Profile
            </Typography>
          </div>
        </div>
      }
      content={
        <div className="p-12 md:p-24 max-w-2xl">
          {/* <div>
            <Typography className="mb-8" variant="h5">
              Profile Screen
            </Typography>
          </div>

          <div>
            <Typography className="mt-32 mb-8" variant="h5">
              Profile Form will be displayed here...
            </Typography>

            <Typography className="mb-16" component="p">
              On the process.. <b>bridge tech</b> ng
              no1 cross matcher platform
            </Typography>
          </div> */}
          <Paper height="100vh" display="flex" flexDirection="column" sx={{ padding: 5 }}>
          <ProfileForm />
          </Paper>
        </div>
      }
    />
  );
}

export default ProfileApp;
