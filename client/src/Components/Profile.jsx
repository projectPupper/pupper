import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { allowRefresh } from './Providers/AllowRefresh';

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

  return (
    <div className='profileContainer' style={profileContainer}>
      <img className='img' style={imgStyle} src={allowRefresh("imgUrl")} width="" height=""/>
      <Typography>Name</Typography>
      {allowRefresh("name")}

      <Typography>Age</Typography>
      {allowRefresh("age")}

      <Typography>Breed</Typography>
      {allowRefresh("breed")}

    </div>
  )
}

export default Profile;

// use UID