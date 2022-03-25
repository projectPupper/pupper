import React, { useState, useEffect } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import MapIcon from '@mui/icons-material/Map';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FilterListIcon from '@mui/icons-material/FilterList';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Outlet, Link } from "react-router-dom";
import {signInWithGoogle} from "../Firebase.js";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const App = () => {
    const [value, setValue] = React.useState("/");
    const [coords, setCoords] = useState({ });
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    useEffect(() => {
      navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude} }) => {
        setCoords({ lat: latitude, lng: longitude });
      })
    }, []);

    const theme = createTheme({
      typography: {
        fontFamily: 'Roboto'
      },
    });

  return (
    <>
      <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: '#ff9800', height: 80, paddingTop: 2}}>
      <Typography style={{ fontSize: 40, fontWeight: 700, color: '#fff', textAlign: 'center', fontFamily:'Courgette' }}>Pupper</Typography>
      </Box>
      <BottomNavigation value={value} onChange={handleChange} showLabels={true}  sx={{
          bgcolor: '#ff9800',
          '& .Mui-selected': {
            '& .MuiBottomNavigationAction-label': {
              fontSize: theme => theme.typography.caption,
              transition: 'none',
              lineHeight: '20px'
            },
            '& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label': {
              color: "#bf360c"
            }
          }
        }}>
          <BottomNavigationAction sx={{color: "#fff"}} label="pawswipe" value="/swipe" icon={<FavoriteIcon />}  component={Link} to='/swipe'/>
          <BottomNavigationAction sx={{color: "#fff"}} label="pupplaces" value="/map" coords={coords} setCoords={setCoords} icon={<MapIcon />} component={Link} to='/map'/>
          <BottomNavigationAction sx={{color: "#fff"}} label="puppals" value="/matches" icon={<ChatBubbleIcon />} component={Link} to='/matches'/>
          <BottomNavigationAction sx={{color: "#fff"}} label="pupferences" value="/preferences" icon={<FilterListIcon /> } component={Link} to='/preferences'/>
          <BottomNavigationAction sx={{color: "#fff"}} label="pupfile" value="/profile" icon={<PersonIcon /> } component={Link} to='/profile'/>
      </BottomNavigation>
      </ThemeProvider>
    </>
  )
};

export default App;
