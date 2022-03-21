import React from 'react';
// import { BottomNavigation, BottomNavigationAction } from '@mui/material'
// import PersonIcon from '@mui/icons-material/Person';
// import MapIcon from '@mui/icons-material/Map';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { Outlet, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <h1>Pupper</h1>
      <Link to="/profile">Profile</Link>
      <Link to="/swipe">Swipe</Link>
      <Link to="/map">Map</Link>
      <Link to="/matches">Matches</Link>
      {/* <BottomNavigation>
        <BottomNavigationAction label="Profile" icon={<PersonIcon />}>
          <Link to="/profile">Profile</Link>
        </BottomNavigationAction>
      </BottomNavigation> */}
     <Outlet />
    </>
  )
};

export default App;
{/* <BottomNavigationAction label="Swipe" icon={<FavoriteIcon />} to={"/swipe"} component={Link}/>
<BottomNavigationAction label="Map" icon={<MapIcon />} to={"/map"} component={Link}/>
<BottomNavigationAction label="Matches" icon={<ChatBubbleIcon />} to={"/matches"} component={Link}/> */}

{/* <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      ></BottomNavigation> */}


      {/* <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
      <BottomNavigationAction label="Swipe" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Map" icon={<MapIcon />} />
      <BottomNavigationAction label="Matches" icon={<ChatBubbleIcon />} /> */}