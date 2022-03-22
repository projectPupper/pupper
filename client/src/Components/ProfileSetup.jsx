import { useNavigate } from 'react-router-dom';
import { Button, Slider, TextField } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PetsIcon from '@mui/icons-material/Pets';
import React from 'react';

function ProfileSetup(props) {
  const navigate = useNavigate();
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

  function formatVal(value) {
    for (let i = 0; i < sizeMarks.length; i++) {
      if (sizeMarks[i].value === value) {
        return sizeMarks[i].label
      }
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <PetsIcon sx={{ color: 'action.active', mr: 1, my: 3 }} />
        <TextField id="input-with-sx" label="My name" variant="standard" /> <br />
        <AccountCircleIcon sx={{ color: 'action.active', mr: 1, my: 3 }} />
        <TextField id="input-with-sx" label="My owner's name" variant="standard" />
        Pupper Age:
        <Slider name="age" step={0.5} min={0} max={30} defaultValue={10} aria-label="Default"  valueLabelDisplay="auto" />
        Energy Level:
        <Slider name="energy" step={1} min={0} max={10} defaultValue={1} marks aria-label="Default"  valueLabelDisplay="auto" />
        Size:
        <Slider name="size" step={1} min={0} max={5} defaultValue={1} marks={sizeMarks} aria-label="Default"  valueLabelDisplay="auto" valueLabelFormat={formatVal}/>
        <Button type="submit">Register</Button>
      </form>
    </>
  )
}

export default ProfileSetup;