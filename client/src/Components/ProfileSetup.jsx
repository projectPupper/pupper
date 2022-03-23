import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Slider, TextField } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PetsIcon from '@mui/icons-material/Pets';
import Typography from '@mui/material/Typography';


function ProfileSetup(props) {
  let navigate = useNavigate();
  let { username } = useParams();
  function handleSubmit(e) {
    e.preventDefault();
    console.log('age', e.target.age.value);
    console.log('energy', e.target.energy.value);
    console.log('size', e.target.size.value);
    navigate("/preferences");
  }
  const sizeMarks = [
    {
      value: 1,
      label: 'Extra Small',
    },
    {
      value: 2,
      label: 'Small',
    },
    {
      value: 3,
      label: 'Medium',
    },
    {
      value: 4,
      label: 'Large',
    }
  ];

  const ageMarks = [
    {
      value: 1,
      label: 'Puppy',
    },
    {
      value: 2,
      label: 'Adult',
    },
    {
      value: 3,
      label: 'Senior',
    },
  ];

  const genderMarks = [
    {
      value: 0,
      label: 'Female',
    },
    {
      value: 1,
      label: 'Male',
    },

  ];

  const energyMarks = [
    {
      value: 0,
      label: 'Low',
    },
    {
      value: 1,
      label: 'Medium',
    },
    {
      value: 2,
      label: 'High',
    },

  ];

  const leashMarks = [
    {
      value: 0,
      label: 'on',
    },
    {
      value: 1,
      label: 'off',
    },

  ];

  function formatVal(value) {
    for (let i = 0; i < sizeMarks.length; i++) {
      if (sizeMarks[i].value === value) {
        return sizeMarks[i].label
      }
    }
  }

  function ageFormatVal(value) {
    for (let i = 0; i < ageMarks.length; i++) {
      if (ageMarks[i].value === value) {
        return ageMarks[i].label
      }
    }
  }

  function genderFormatVal(value) {
    for (let i = 0; i < genderMarks.length; i++) {
      if (genderMarks[i].value === value) {
        return genderMarks[i].label
      }
    }
  }

  function energyFormatVal(value) {
    for (let i = 0; i < energyMarks.length; i++) {
      if (energyMarks[i].value === value) {
        return energyMarks[i].label
      }
    }
  }

  function leashFormatVal(value) {
    for (let i = 0; i < leashMarks.length; i++) {
      if (leashMarks[i].value === value) {
        return leashMarks[i].label
      }
    }
  }

  return (
    <>
      <Typography style={{ fontSize: 30, fontWeight: 700, color: '#ff9800', textAlign: 'center', fontFamily:'Courgette' }}>Pupper</Typography>
      <form onSubmit={handleSubmit}>
        <PetsIcon sx={{ color: 'action.active', mr: 1, my: 3 }} />
        <TextField id="input-with-sx" label="My name" variant="standard" /> <br />
        <AccountCircleIcon sx={{ color: 'action.active', mr: 1, my: 3 }} />
        <TextField id="input-with-sx" label="My owner's name" variant="standard" />
        <div style={{marginLeft: "30%", marginRight: "30%"}}>


          <div style={{textAlign: "center", marginTop: "10px"}}>Size</div>
          <Slider name="size" step={1} min={1} max={4} defaultValue={1} marks={sizeMarks} aria-label="Default"  valueLabelDisplay="auto" valueLabelFormat={formatVal}/>


          <div style={{textAlign: "center", marginTop: "10px"}}>Pupper Gender</div>
          <Slider name="age" step={1} min={0} max={1} defaultValue={0} marks={genderMarks} valueLabelFormat={genderFormatVal} aria-label="Default"  valueLabelDisplay="auto" />


          <div style={{textAlign: "center"}}>Pupper Age</div>
          <Slider name="age" step={1} min={1} max={3} defaultValue={0} marks={ageMarks} valueLabelFormat={ageFormatVal} aria-label="Default"  valueLabelDisplay="auto" />


          <div style={{textAlign: "center", marginTop: "10px"}}>Energy Level</div>
          <Slider name="energy" step={1} min={0} max={2} defaultValue={1} marks={energyMarks} valueLabelFormat={energyFormatVal} aria-label="Default"  valueLabelDisplay="auto" />


          <div style={{textAlign: "center", marginTop: "10px"}}>Leash On/Off</div>
          <Slider name="energy" step={1} min={0} max={1} defaultValue={1} marks={leashMarks} valueLabelFormat={leashFormatVal} aria-label="Default"  valueLabelDisplay="auto" />

        </div>
        <Button type="submit">Register</Button>
      </form>
    </>
  )
}

export default ProfileSetup;