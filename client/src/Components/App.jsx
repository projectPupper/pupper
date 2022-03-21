import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import MapIcon from '@mui/icons-material/Map';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { Outlet, Link } from "react-router-dom";

const App = () => {
    const [value, setValue] = React.useState("/");
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <>
      <h1>Pupper</h1>
      <BottomNavigation value={value} onChange={handleChange} showLabels={true}>
          <BottomNavigationAction label="swipe" value="/swipe" icon={<FavoriteIcon />}  component={Link} to='/'/>
          <BottomNavigationAction label="map" value="/" icon={<MapIcon />} component={Link} to='/map'/>
          <BottomNavigationAction label="profile" value="/profile" icon={<PersonIcon /> } component={Link} to='/profile'/>
          <BottomNavigationAction label="matches" value="/matches" icon={<ChatBubbleIcon />} component={Link} to='/matches'/>
      </BottomNavigation>
     <Outlet />
    </>
  )
};

export default App;
