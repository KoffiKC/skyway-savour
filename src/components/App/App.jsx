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

  console.log('values on main app user:', user, 'locations:', locations, );
  return (
    <Router>
      <div>
        <Nav />
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
              <LocationsList/>
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
            <p>itsa my profile!</p>
            <ProfileView />
          </ProtectedRoute>

          <Route exact path="/location/:id">
            <p>location stuffs!</p>
            <LocationView/>
          </Route>

          <Route exact path="/search">
            <p>where are the theeeeeeengs!</p>
          </Route>

          <Route exact path="/map">
            <MainMap/>
            <LocationsList/>
          </Route>


          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
            <Footer />
      </div>
    </Router>
  );
}

export default App;
