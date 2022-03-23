import React from 'react';
import axios from 'axios';
import { useMainContext } from './Providers/MainProvider.jsx'
import { Typography } from '@mui/material';

function Profile() {
  const { userProfile } = useMainContext();


  return (
    <>
    {/* Profile Pic
    <Typography>Name</Typography>
    {userProfile.name}
    <Typography>Age</Typography>
    {userProfile.age}
    <Typography>Breed</Typography>
    Breed
    {userProfile.breed} */}


    </>
  )
}

export default Profile;

// use UID