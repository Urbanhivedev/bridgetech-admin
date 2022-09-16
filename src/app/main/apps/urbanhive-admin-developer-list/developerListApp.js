import FusePageSimple from '@fuse/core/FusePageSimple';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import withReducer from 'app/store/withReducer';
import _ from '@lodash';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, Redirect } from 'react-router-dom';
import { logout } from '../../../../redux/actions/auth.action';
import { fb, db, auth } from 'config/firebase';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import DeveloperListTable from './components/DeveloperListTable';

const useStyles = makeStyles((theme) => ({
  content: {
    '& canvas': {
      maxHeight: '100%',
    },
  },
}));

function developerListApp(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isAuth } = useSelector((state) => state.login);
  const { allUsers, isLoading } = useSelector((state) => state.user);
  const classes = useStyles(props);
  const pageLayout = useRef(null);
  const [tabValue, setTabValue] = useState(0);


  if (!isAuth) return <Redirect to={'/login'}/>
  return (
    // <div style={{margin: "30px"}}>
    <FusePageSimple
      classes={{
        header:
          'min-h-160 h-160 lg:ltr:rounded-br-20 lg:rtl:rounded-bl-20 lg:ltr:mr-12 lg:rtl:ml-12',
        toolbar: 'min-h-56 h-56 items-end',
        rightSidebar: 'w-288 border-0 py-12',
        content: classes.content,
      }}
      // header={
      //   <div className="flex flex-1 items-center justify-between p-12 md:p-24" style={{backgroundColor: "#000000"}}>
      //     <div className="flex flex-col">
      //       <div className="flex items-center mb-16">
      //         <Icon className="text-18" color="action">
      //           home
      //         </Icon>
      //         <Icon className="text-16" color="action">
      //           chevron_right
      //         </Icon>
      //         <Typography color="textSecondary" className="font-medium">
      //           SessionsApp
      //         </Typography>
      //       </div>
      //       <Typography variant="h6" className="text-18 sm:text-24 font-semibold">
      //         Book a Developer
      //       </Typography>
      //     </div>
      //   </div>
      // }
      content={
        // <div className="p-12 lg:ltr:pr-0 lg:rtl:pl-0">
        <div className="p-12 md:p-24 max-w-2xl">
           <DeveloperListTable />
        </div>
      }
      // rightSidebarContent={<CandidateAppSidebar />}
      ref={pageLayout}
    />

    // </div>
  

  );
  
}

export default developerListApp;
