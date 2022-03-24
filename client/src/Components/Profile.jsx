import React from 'react';
import axios from 'axios';
import { useMainContext } from './Providers/MainProvider.jsx'
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';

const profileContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const imgStyle = {
  width: '50%',
  height: '50%'
  // marginTop: '20px'
}


function Profile() {
  const { userProfile } = useMainContext();

  console.log('userProfile: ', userProfile)
  return (
    <div className='profileContainer' style={profileContainer}>
      <img className='img' style={imgStyle} src={userProfile.imgUrl} width="" height=""/>
      <Typography>Name</Typography>
      {userProfile.name}

      <Typography>Age</Typography>
      {userProfile.age}

      <Typography>Breed</Typography>
      {userProfile.breed}
    </div>
  )
}

export default Profile;

// use UID