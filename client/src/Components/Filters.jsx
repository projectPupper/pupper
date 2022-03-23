import React from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Radio from '@mui/material/Radio';
import { borders } from '@mui/system';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { orange } from '@mui/material/colors';
import breedList from '../../../breeds.js';




const Filters = () => {

  const [sizes, setSizes] = React.useState(() => []);
  const [preferences, setPreferences] = React.useState(() => {});

  const handleSizes = (event, newSizes) => {
    setSizes(newSizes);
    console.log(event);
  };

  const handlePreferences = (event, preference) => {
    setPreferences(event.target.value = preference);
    console.log(preferences);
  }


  // const handleEnergy = (event, newEnergy) => {
  //   setEnergy(newEnergy);
  // };

  const theme = createTheme({
    palette: {
      primary: {
        light: orange[200],
        main: orange[500],
        dark: orange[800],
      },
    },
    typography: {
      fontFamily: 'Roboto'
    },
  });

  const buttonStyles = {
    color: '#6b6b6b',
    borderColor: '#ff9800',
    '&:hover': {
      bgcolor: '#ffe0b2',
      borderColor: '#f57c00'
    },
  };

  return (

    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}>

<Typography style={{ fontSize: 16, fontWeight: 500, color: '#ff9800', textAlign: 'left', fontFamily:'Courgette' }}>What Kind of Playmate is Your Pup Looking For?</Typography>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={breedList}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Breed" />}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
             m: 0,
          },
        }}
      >
        <ThemeProvider theme={theme}>
        <Typography style={{ fontSize: 14, fontWeight: 400, color: '#ff9800', textAlign: 'left', fontFamily:'Roboto' }}>Size</Typography>
          <ToggleButtonGroup fullWidth size="medium" aria-label="medium button group" value={sizes}
            onChange={handleSizes}>
            <ToggleButton value="extraSmall" aria-label="extraSmall">Extra Small</ToggleButton>
            <ToggleButton value="small" aria-label="small">Small</ToggleButton>
            <ToggleButton value="medium">Medium</ToggleButton>
            <ToggleButton value="large">Large</ToggleButton>
          </ToggleButtonGroup>

          <Typography style={{ fontSize: 14, fontWeight: 400, color: '#ff9800', textAlign: 'left', fontFamily:'Roboto' }}>Gender</Typography>
          <ToggleButtonGroup fullWidth size="medium" aria-label="medium button group" value={sizes}
            onChange={handleSizes, handlePreferences}>
            <ToggleButton value="male" aria-label="male">Male</ToggleButton>
            <ToggleButton value="female" aria-label="female">Female</ToggleButton>
          </ToggleButtonGroup>

          <Typography style={{ fontSize: 14, fontWeight: 400, color: '#ff9800', textAlign: 'left', fontFamily:'Roboto' }}>Age</Typography>
          <ToggleButtonGroup fullWidth size="medium" aria-label="medium button group" value={sizes}
            onChange={handleSizes} >
            <ToggleButton value="puppy" aria-label="puppy" >Puppy</ToggleButton>
            <ToggleButton value="adult" aria-label="adult">Adult</ToggleButton>
            <ToggleButton value="senior" aria-label="senior">Senior</ToggleButton>
          </ToggleButtonGroup>

          <Typography style={{ fontSize: 14, fontWeight: 400, color: '#ff9800', textAlign: 'left', fontFamily:'Roboto' }}>Energy Level</Typography>
          <ToggleButtonGroup fullWidth size="medium" aria-label="medium button group" value={sizes}
            onChange={handleSizes} >
            <ToggleButton value="low" aria-label="low" >Low</ToggleButton>
            <ToggleButton value="Medium" aria-label="medium">Medium</ToggleButton>
            <ToggleButton value="high" aria-label="high">High</ToggleButton>
          </ToggleButtonGroup>

          <ToggleButtonGroup fullWidth size="medium" aria-label="medium button group" value={sizes}
            onChange={handleSizes} >
            <ToggleButton value="yes" aria-label="yes" >On-Leash</ToggleButton>
            <ToggleButton value="no" aria-label="no">Off-Leash</ToggleButton>
          </ToggleButtonGroup>
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <Button variant="contained" sx={{bgcolor: '#ff9800', '&:hover': {bgcolor: '#ff9800'}}}>Submit</Button>
        </ThemeProvider>
      </Box>
    </Box>

  )
}

const breeds = [{ label: 'Labrador', id: 1 },
{ label: 'Poodle', id: 2 },
{ label: 'Shiba Inu', id: 3 },
{ label: 'Cocker Spaniel', id: 4 }]

export default Filters;