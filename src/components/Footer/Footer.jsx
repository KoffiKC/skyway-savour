import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import MapIcon from '@mui/icons-material/Map';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <div className='bottom-nav'>
      <Box sx={{ '& > :not(style)': { m: 1.4 } }}>
        <Fab color="secondary" variant="extended" aria-label="Search">
          <ManageSearchIcon />
          search
        </Fab>
        <Fab color="secondary" variant="extended" aria-label="Home">
          <MapIcon />
          Home
        </Fab>
        {/* <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab> */}
        <Fab color="secondary" variant="extended" aria-label="Profile">
          <EmojiEmotionsIcon />
          Profile
        </Fab>
      </Box>
      {/* <Box sx={{ width: 393 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        > */}
      {/* <Link to="/user"> */}
      {/* <BottomNavigationAction label="Advanced Search" icon={<ManageSearchIcon />} /> */}
      {/*  </Link>
          <Link to="/home"> */}
      {/* <BottomNavigationAction label="Home" icon={<MapIcon />} /> */}
      {/*  </Link>
          <Link to="/profile"> */}
      {/* <BottomNavigationAction label="Profile" icon={<EmojiEmotionsIcon />} /> */}
      {/*< /Link> */}
      {/* </BottomNavigation>
      </Box> */}
      {/* <footer>&copy; 2022 || SKYWAY SAVOR || Koffi Kittleson</footer>; */}
    </div>
    </>
  )
}

export default Footer;
