import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';

// main_components
import MainMap from '../../components_main/MainMap/MainMap';
import ProfileView from '../../components_main/ProfileView/ProfileView';
import LocationView from '../../components_main/LocationView/LocationView';
import LocationsList from '../../components_main/LocationsList/LocationsList';

//Drawer components
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

const drawerWidth = 393;

const Left = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      margin: 0,
      padding: 0,
    }),
  }),
);

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);
  const locations = useSelector(store => store.locations);
  const details = useSelector(store => store.details);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
    // dispatch({ type: 'FETCH_LOCATIONS'});
  }, [dispatch]);

  //Drawer functionality
  const [openLeft, setOpenLeft] = React.useState(false);
  const [openRight, setOpenRight] = React.useState(false);

  const handleDrawerRight = () => {
    setOpenRight(!openRight);
  };

  const handleDrawerleft = () => {
    setOpenLeft(!openLeft);
  };

  const handleDrawerClose = () => {
    setOpenLeft(false);
  };

  console.log('values on main app user:', user, 'locations:', locations,);
  return (
    <Router>
      {user.id ? <img src='../../../public/Untitled45_20220328073331.png' alt='logo'/>  : <></>}
      
      <div>
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />


          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              // <Redirect to="/user" />


              <Redirect to="/home" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              // <Redirect to="/user" />

              // <p>I am the locatiosn weeee</p>
              <LocationsList />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/profile"
          >
            <ProfileView/>
          </ProtectedRoute>

          <Route exact path="/location/:id">
            <LocationView />
          </Route>

          <Route exact path="/search">
            <p>where are the theeeeeeengs!</p>
          </Route>

          {/* <Route exact path="/map">

            <Box sx={{ display: 'flex' }}>
              <Drawer
                sx={{
                  width: drawerWidth,
                  flexShrink: 0,
                  '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                  },
                }}
                variant="persistent"
                anchor="left"
                open={openLeft}
              >
                <button onClick={handleDrawerClose}>Hewoo</button>
              </Drawer>
              <Left open={openLeft}>
                <button onClick={handleDrawerRight}>Adios!</button>
                <button onClick={handleDrawerleft}>Hewoo</button>
                <LocationsList />
              </Left>
              <Drawer
                sx={{
                  width: drawerWidth,
                  flexShrink: 0,
                  "& .MuiDrawer-paper": {
                    width: drawerWidth
                  }
                }}
                variant="persistent"
                anchor="right"
                open={openRight}
              >
                <p>Its me again!</p>
                <button onClick={handleDrawerClose}>Adios!</button>
              </Drawer>
            </Box>
          </Route> */}
          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
      </div>
      {user.id ?  <Footer />  : <></>}
        
    </Router>
  );
}

export default App;
