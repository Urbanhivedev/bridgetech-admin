import '@fake-db';
import FuseAuthorization from '@fuse/core/FuseAuthorization';
import FuseLayout from '@fuse/core/FuseLayout';
import FuseTheme from '@fuse/core/FuseTheme';
import history from '@history';
// import { Router } from 'react-router-dom';
import React, { useEffect } from 'react'
import { Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import withAppProviders from './withAppProviders';
import PrivateRoute from './shared-components/HOC/PrivateRoute';
import CandidateApp from './main/apps/urbanhive-candidates/CandidateApp';
import Login from './main/apps/urbanhive-login/Login';
import Register from './main/apps/urbanhive-register/Register';


const App = () => {  
  return (
      <Router history={history}>
        <FuseAuthorization>
          <FuseTheme>
            <SnackbarProvider
              maxSnack={5}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              classes={{
                containerRoot: 'bottom-0 right-0 mb-52 md:mb-68 mr-8 lg:mr-80 z-99',
              }}
            >
              <FuseLayout /> 
            
            </SnackbarProvider>
          </FuseTheme>
        </FuseAuthorization>
      </Router>

);
};

// export default App;
export default withAppProviders(App)();


//Other Routing Format

{/* <Router history={history}>
<FuseAuthorization>
  <FuseTheme>
    <SnackbarProvider
      maxSnack={5}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      classes={{
        containerRoot: 'bottom-0 right-0 mb-52 md:mb-68 mr-8 lg:mr-80 z-99',
      }}
    >

<Switch>
<PrivateRoute path="/candidates" exact component={CandidateApp} />


<Route path="/login" component={isAuth ? CandidateApp : Login} />
<Route path="/register" component={isAuth ? CandidateApp : Register} />
</Switch>
</SnackbarProvider>
  </FuseTheme>
</FuseAuthorization>
</Router> */}



