import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './SignUpPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import LoginForm from '../LoginForm/LoginForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch({
      type: 'FETCH_LOCATIONS'
    });
  }, [])

  const onLogin = (event) => {
    history.push('/registration');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
           SKYWAY SAVOR, the most comprehensive store of food locations within the skyway that Prime has ever seen!
          </p>
        </div>
        <div className="grid-col grid-col_4">
          <LoginForm />

          <center>
            <h4>New to Skyway Savor?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Join here
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
