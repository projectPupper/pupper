import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { borderRadius } from '@mui/system';
import { useMainContext } from './Providers/MainProvider';

const profileContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '20px 10px 0px 10px'
}

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: '70px',
  backgroundColor: 'blanchedalmond',
  color: 'black'
}

const imgContainerWrapper = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '300px',
  // height: '300px',
  objectFit: 'contain',
  marginBottom: '20px'
}

const imgContainer = {
  width: '200px',
  height: '200px'
}


const imgStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  marginBottom: '20px',
  objectFit: 'cover'
}

const titleStyle = {
  color: 'cornflowerblue',
  fontFamily: 'Courgette',
  fontSize: '25px',
  margin: '20px 0 10px 0'
}

function Profile() {
  const { userProfile } = useMainContext();

  return (
    <div className='profileContainer' style={profileContainer}>
      <Card className='card' raised="true" style={cardStyle}>
        <Typography style={titleStyle}>{userProfile.name}</Typography>

        <div className='imgContainerWrapper' style={imgContainerWrapper}>
          <div className='imgContainer' style={imgContainer}>
            <img className='img' style={imgStyle} src={userProfile.imgUrl} />
          </div>
        </div>

        <Typography>Age: {userProfile.age}</Typography>
        <Typography>Breed: {userProfile.breed}</Typography>
        <Typography>Owner: {userProfile.ownerName}</Typography>
        <Typography>Energy: {userProfile.energy}</Typography>

      </Card>
    </div>
  )
}

export default Profile;

// use UID