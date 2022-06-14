import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import './Footer.css';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import MapIcon from '@mui/icons-material/Map';

function Footer() {
  const [value, setValue] = React.useState(0);
  const history = useHistory();
  
  // function to handle where users go when they click
  const handleClick = (page) => {
    //each button sends a unique string which is used to determine what view they go to
    history.push(`/${page}`)
  }
  
  // Component for app navigation
  return (
    <>
      <div className='bottom-nav'>
      <Box sx={{ '& > :not(style)': { m: 1.2 } }}>
        {/* sends users the the Advanced search page TBA page */}
        <Fab color="secondary" variant="extended" aria-label="Search"
        onClick={() => handleClick('search')}>
          <ManageSearchIcon />
          search
        </Fab>
        {/* sends users the the home page */}
        <Fab color="secondary" variant="extended" aria-label="Home"
        onClick={() => handleClick('home')}>
          <MapIcon />
          Home
        </Fab>
        {/* sends users the the profile page */}
        <Fab color="secondary" variant="extended" aria-label="Profile"
        onClick={() => handleClick('profile')}>
          <EmojiEmotionsIcon />
          Profile
        </Fab>
      </Box>
    </div>
    </>
  )
}

export default Footer;

// // Unused components
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import { Link } from 'react-router-dom';