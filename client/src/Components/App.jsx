import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import MapIcon from '@mui/icons-material/Map';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Typography from '@mui/material/Typography';
import { Outlet, Link } from "react-router-dom";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const App = () => {
    const [value, setValue] = React.useState("/");
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const theme = createTheme({
      typography: {
        fontFamily: 'Roboto'
      },
    });

  return (
    <>
      <ThemeProvider theme={theme}>
      <Typography style={{ fontSize: 30, fontWeight: 700, color: '#ff9800', textAlign: 'center', fontFamily:'Courgette' }}>Pupper</Typography>
      <Outlet />
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
          <BottomNavigationAction sx={{color: "#fff"}} label="swipe" value="/swipe" icon={<FavoriteIcon />}  component={Link} to='/swipe'/>
          <BottomNavigationAction sx={{color: "#fff"}} label="map" value="/map" icon={<MapIcon />} component={Link} to='/map'/>
          <BottomNavigationAction sx={{color: "#fff"}} label="matches" value="/matches" icon={<ChatBubbleIcon />} component={Link} to='/matches'/>
          <BottomNavigationAction sx={{color: "#fff"}} label="profile" value="/profile" icon={<PersonIcon /> } component={Link} to='/profile'/>
      </BottomNavigation>
      </ThemeProvider>
    </>
  )
};

export default App;
