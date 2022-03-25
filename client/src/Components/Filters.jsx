import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Radio from '@mui/material/Radio';
import { borders } from '@mui/system';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { orange } from '@mui/material/colors';
import breedList from '../../../breeds.js';
import axios from 'axios';
import { useMainContext } from './Providers/MainProvider.jsx'




const Filters = () => {
  const { userProfile, setSwipeList  } = useMainContext();
  const [sizes, setSizes] = React.useState('');
  const [gender, setGenders] = React.useState('');
  const [age, setAges] = React.useState('');
  const [energy, setEnergy] = React.useState('');
  const [leash, setLeash] = React.useState('');
  const navigate = useNavigate();

  const handleSizes = (event, input) => {
    setSizes(input);
  };

  const handleGenders = (event, input) => {
    setGenders(input);
  };

  const handleAges = (event, input) => {
    setAges(input);
  };

  const handleEnergy = (event, input) => {
    setEnergy(input);
  };

  const handleLeash = (event, input) => {
    setLeash(input);
  };

  const handleClear = () => {
    console.log('clear clicked!');
    setSwipeList(false);
    navigate("/swipe");
    // axios.get('/api/swipeprofiles', { params: { id: userProfile._id }})
    //   .then((res) => {
    //     console.log('get is working in Swipe!');
    //     setSwipeList(res.data);
    //   })
    //   .catch((err) => {
    //     console.log('preference clear error!');
    //   })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const preference = {
      input: {
      age,
      size: sizes,
      gender,
      energy,
      offLeash: leash === 'No'
      },
      id: userProfile._id
    }
    axios.post('/api/preference', preference)
      .then((res) => {
        console.log('preference posted!');
        setSwipeList(true);
        navigate("/swipe");
      //   axios.get('/api/swipeprofiles', { params: { id: userProfile._id, prefer: true }})
      // .then((res) => {
      //   console.log(res.data);
      //   setSwipeList(res.data);
      // })
      })
      .catch((err) => {
        console.log('preference post error!');
      })
    console.log(preference);
  }

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
        marginTop: 3,
        '& > *': {
          m: 1,
        },
      }}>

<Typography style={{ fontSize: 16, fontWeight: 500, color: '#ff9800', textAlign: 'left', fontFamily:'Courgette' }}>What Kind of Playmate is Your Pup Looking For?</Typography>
      {/* <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={breedList}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Breed" />}
      /> */}
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
        <form onSubmit={(e) => handleSubmit(e)} style={
          {display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'}}>
        <Stack spacing={1} direction="column" justifyContent="center" alignItems="center" >
        <Typography style={{ fontSize: 14, fontWeight: 400, color: '#ff9800', textAlign: 'left', fontFamily:'Roboto' }}>Size</Typography>
          <ToggleButtonGroup exclusive fullWidth size="medium" aria-label="size button group" value={sizes}
            onChange={handleSizes}>
            <ToggleButton value="Small" aria-label="small">Small</ToggleButton>
            <ToggleButton value="Medium">Medium</ToggleButton>
            <ToggleButton value="Large">Large</ToggleButton>
          </ToggleButtonGroup>

          <Typography style={{ fontSize: 14, fontWeight: 400, color: '#ff9800', textAlign: 'left', fontFamily:'Roboto' }}>Gender</Typography>
          <ToggleButtonGroup exclusive fullWidth size="medium" aria-label="gender button group" value={gender}
            onChange={handleGenders}>
            <ToggleButton value="Male" aria-label="male">Male</ToggleButton>
            <ToggleButton value="Female" aria-label="female">Female</ToggleButton>
          </ToggleButtonGroup>

          <Typography style={{ fontSize: 14, fontWeight: 400, color: '#ff9800', textAlign: 'left', fontFamily:'Roboto' }}>Age</Typography>
          <ToggleButtonGroup exclusive fullWidth size="medium" aria-label="age button group" value={age}
            onChange={handleAges} >
            <ToggleButton value="Puppy" aria-label="puppy" >Puppy</ToggleButton>
            <ToggleButton value="Adult" aria-label="adult">Adult</ToggleButton>
            <ToggleButton value="Senior" aria-label="senior">Senior</ToggleButton>
          </ToggleButtonGroup>

          <Typography style={{ fontSize: 14, fontWeight: 400, color: '#ff9800', textAlign: 'left', fontFamily:'Roboto' }}>Energy Level</Typography>
          <ToggleButtonGroup exclusive fullWidth size="medium" aria-label="energy button group" value={energy}
            onChange={handleEnergy} >
            <ToggleButton value="Low" aria-label="low" >Low</ToggleButton>
            <ToggleButton value="Medium" aria-label="medium">Medium</ToggleButton>
            <ToggleButton value="High" aria-label="high">High</ToggleButton>
          </ToggleButtonGroup>

          <Typography style={{ fontSize: 14, fontWeight: 400, color: '#ff9800', textAlign: 'left', fontFamily:'Roboto' }}>Ideal Play Session</Typography>
          <ToggleButtonGroup required exclusive fullWidth size="medium" aria-label="offleash button group" value={leash}
            onChange={handleLeash} >
            <ToggleButton value="Yes" aria-label="yes" >On-Leash</ToggleButton>
            <ToggleButton value="No" aria-label="no">Off-Leash</ToggleButton>
          </ToggleButtonGroup>
          </Stack>
          <Button variant="contained" type="submit" sx={{bgcolor: '#ff9800', '&:hover': {bgcolor: '#ff9800'}, padding: '6px 130px', marginTop: 5}}>Submit</Button>
        </form>
        <Button variant="contained" onClick={handleClear} sx={{bgcolor: '#ff9800', '&:hover': {bgcolor: '#ff9800'}, padding: '6px 89px', marginTop: 1}}>Clear Preference</Button>
      </Box>
    </Box>

  )
}

const breeds = [{ label: 'Labrador', id: 1 },
{ label: 'Poodle', id: 2 },
{ label: 'Shiba Inu', id: 3 },
{ label: 'Cocker Spaniel', id: 4 }]

export default Filters;