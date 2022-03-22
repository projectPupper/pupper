import React from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Radio from '@mui/material/Radio';

const Filters = () => {

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
      {/* <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Distance"
          defaultValue={5}
          valueLabelDisplay="auto"
          step={5}
          marks
          min={5}
          max={50}
        />
      </Box> */}
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
        <ButtonGroup size="large" aria-label="large button group">
          <Button key="small" >Small</Button>
          <Button key="medium">Medium</Button>
          <Button key="large">Large</Button>
        </ButtonGroup>

        <ButtonGroup size="large" aria-label="large button group">
          <Button key="male">Male</Button>
          <Button key="female" value="female" control={<Radio />}>Female</Button>
        </ButtonGroup>

        <ButtonGroup size="large" aria-label="large button group">
          <Button key="puppy" >Puppy</Button>
          <Button key="adult">Adult</Button>
          <Button key="senior">Senior</Button>
        </ButtonGroup>

        <ButtonGroup size="large" aria-label="large button group">
          <Button key="low" >Low</Button>
          <Button key="medium">Medium</Button>
          <Button key="high">High</Button>
        </ButtonGroup>

        <ButtonGroup size="large" aria-label="large button group">
          <Button key="yes" >Yes</Button>
          <Button key="no">No</Button>
        </ButtonGroup>
      </Box>
    </Box>
  )
}

const breeds = [{ label: 'Labrador', id: 1 },
{ label: 'Poodle', id: 2 },
{ label: 'Shiba Inu', id: 3 },
{ label: 'Cocker Spaniel', id: 4 }]

export default Filters;