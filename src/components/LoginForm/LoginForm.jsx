import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// MUI components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const style = {

  // position: 'absolute',
  // top: '50%',
  // left: '50%',
  // transform: 'translate(-50%, -50%)',
  width: 200,
  height: 250,
  padding: '23px',
  paddingTop: '10px',
  // bgcolor: 'lightblue',
  border: '2px solid purple',
  borderRadius: '30px',
  boxShadow: 10,
  boxShadowColor: 'red',
};

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <>
      {/* <form className="formPanel" onSubmit={login}>
      <h2>Login</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Log In" />
      </div>
    </form> */}
    
      <Box sx={style}>
        <h1>Login</h1>
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Username"
            multiline
            maxRows={4}
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <Button variant="contained" sx={{ m: 2 }} onClick={login}>login</Button>
      </Box>
    </>
  );
}

export default LoginForm;
