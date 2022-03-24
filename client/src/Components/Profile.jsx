import React from 'react';
import axios from 'axios';
import { useMainContext } from './Providers/MainProvider.jsx'
import { Typography } from '@mui/material';

function Profile() {
  const { userProfile } = useMainContext();

  console.log('userProfile: ', userProfile)
  return (
    <>
      <img src={userProfile.imgUrl} width="" height=""/>
      <Typography>Name</Typography>
      {userProfile.name}

      <Typography>Age</Typography>
      {userProfile.age}

      <Typography>Breed</Typography>
      {userProfile.breed}
    </>
  )
}

export default Profile;

// use UID