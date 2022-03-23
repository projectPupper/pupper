import React from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
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




const Filters = () => {

  const [sizes, setSizes] = React.useState(() => []);

  const handleSizes = (event, newSizes) => {
    setSizes(newSizes);
  };

  const theme = createTheme({
    palette: {
      primary: {
        light: orange[200],
        main: "##ff9800",
        dark: orange[800],
      },
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
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={breeds}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Breed" />}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            m: 1,
          },
        }}
      >
        <ThemeProvider theme={theme}>
          <ToggleButtonGroup fullWidth size="medium" aria-label="medium button group" value={sizes}
            onChange={handleSizes}>
            <ToggleButton value="small" aria-label="small">Small</ToggleButton>
            <ToggleButton value="medium">Medium</ToggleButton>
            <ToggleButton value="large">Large</ToggleButton>
          </ToggleButtonGroup>

          <ToggleButtonGroup fullWidth size="medium" aria-label="medium button group" value={sizes}
            onChange={handleSizes} >
            <ToggleButton value="male" aria-label="male">Male</ToggleButton>
            <ToggleButton value="female" aria-label="female">Female</ToggleButton>
          </ToggleButtonGroup>

          <ToggleButtonGroup fullWidth size="medium" aria-label="medium button group" value={sizes}
            onChange={handleSizes} >
            <ToggleButton value="puppy" aria-label="puppy" >Puppy</ToggleButton>
            <ToggleButton value="adult" aria-label="adult">Adult</ToggleButton>
            <ToggleButton value="senior" aria-label="senior">Senior</ToggleButton>
          </ToggleButtonGroup>

          <ToggleButtonGroup fullWidth size="medium" aria-label="medium button group" value={sizes}
            onChange={handleSizes} >
            <ToggleButton value="low" aria-label="low" >Low</ToggleButton>
            <ToggleButton value="medium" aria-label="medium">Medium</ToggleButton>
            <ToggleButton value="high" aria-label="high">High</ToggleButton>
          </ToggleButtonGroup>

          <ToggleButtonGroup fullWidth size="medium" aria-label="medium button group" value={sizes}
            onChange={handleSizes} >
            <ToggleButton value="yes" aria-label="yes" >Yes</ToggleButton>
            <ToggleButton value="no" aria-label="no">No</ToggleButton>
          </ToggleButtonGroup>
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