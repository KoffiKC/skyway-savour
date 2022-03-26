import React from 'react';
import './Footer.css';
import Box from '@mui/material/Box';
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
      <Box sx={{ width: 393 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Advanced Search" icon={<ManageSearchIcon />} />
          <BottomNavigationAction label="Favorites" icon={<MapIcon />} />
          <BottomNavigationAction label="Profile" icon={<EmojiEmotionsIcon />} />
        </BottomNavigation>
      </Box>
      {/* <footer>&copy; 2022 || SKYWAY SAVOR || Koffi Kittleson</footer>; */}
    </>
  )
}

export default Footer;
