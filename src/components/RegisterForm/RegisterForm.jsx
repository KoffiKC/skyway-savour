import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// MUI components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';

// MUI Styles
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  height: 250,
  bgcolor: 'lightblue',
  border: '4px solid blue',
  borderRadius: '30px',
  boxShadow: 23,
  p: 4,
  paddingTop: 1,
};

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cohort, setCohort] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  //handels open/close of modal form
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const registerUser = (event) => {
    event.preventDefault();

    
    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        cohort: cohort,
      },
    });
  }; // end registerUser
  
  const demoFill = () => {
    console.log('yo');
    setUsername('KoffiK')
    setPassword('1234')
    setCohort('Adams')
  }
  return (
    <center>
      <div>
      <h4>New to Skyway Savor?</h4>
        <Button variant="outlined" onClick={handleOpen} sx={{marginTop: '-10px'}}>Join Here</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"

        >
          <Box sx={style}>
            <h2 onClick={demoFill}>Register User</h2>
            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Username"
                multiline
                maxRows={4}
                color="secondary"
                value={username}
                required
                onChange={(event) => setUsername(event.target.value)}
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                color="secondary"
                value={password}
                required
                onChange={(event) => setPassword(event.target.value)}
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Cohort"
                multiline
                maxRows={4}
                color="secondary"
                value={cohort}
                onChange={(event) => setCohort(event.target.value)}
              />
            </div>
              <Button
              variant="contained"
              color="secondary"
              onClick={registerUser}
              sx={{marginLeft: '50px', marginTop: '5px'}}>Sign up</Button>
          </Box>
        </Modal>
      </div>
      
    </center>
  );
}

export default RegisterForm;
