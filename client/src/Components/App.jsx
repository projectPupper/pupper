import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import MapIcon from '@mui/icons-material/Map';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { Outlet, Link } from "react-router-dom";

const App = () => {
  const pathname = window.location.pathname; // in case user visits the path directly. The BottomNavBar is able to follow suit.
    const [value, setValue] = React.useState("/");
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <>
      <h1>Pupper</h1>

      <BottomNavigation value={value} onChange={handleChange} showLabels={true}>
          <BottomNavigationAction label="map" value="/" icon={<MapIcon />} component={Link} to='/'/>
          <BottomNavigationAction label="profile" value="/profile" icon={<PersonIcon /> } component={Link} to='/profile'/>
          <BottomNavigationAction label="swipe" value="/swipe" icon={<FavoriteIcon />}  component={Link} to='/swipe'/>
          <BottomNavigationAction label="chat" value="/chat" icon={<ChatBubbleIcon />} component={Link} to='/chat'/>
      </BottomNavigation>
     <Outlet />
    </>
  )
};

export default App;

{/* <Link to="/profile">Profile</Link>
<Link to="/swipe">Swipe</Link>
<Link to="/map">Map</Link>
<Link to="/matches">Matches</Link> */}
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