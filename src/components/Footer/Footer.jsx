import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

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
  const history = useHistory();

  const handleClick = (page) => {
    // console.log(page, 'wow hats so cool');
    history.push(`/${page}`)
  }
  return (
    <>
      <div className='bottom-nav'>
      <Box sx={{ '& > :not(style)': { m: 1.2 } }}>
        <Fab color="secondary" variant="extended" aria-label="Search"
        onClick={() => handleClick('search')}>
          <ManageSearchIcon />
          search
        </Fab>
        <Fab color="secondary" variant="extended" aria-label="Home"
        onClick={() => handleClick('home')}>
          <MapIcon />
          Home
        </Fab>
        {/* <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab> */}
        <Fab color="secondary" variant="extended" aria-label="Profile"
        onClick={() => handleClick('profile')}>
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
