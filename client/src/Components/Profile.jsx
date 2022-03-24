import React from 'react';
import axios from 'axios';
import { useMainContext } from './Providers/MainProvider.jsx'
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { borderRadius } from '@mui/system';

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

const imgStyle = {
  width: '50%',
  height: '50%',
  borderRadius: '50%',
  marginBottom: '20px'
}

const titleStyle = {
  color: 'cornflowerblue',
  fontFamily: 'Courgette',
  fontSize: '25px',
  margin: '20px 0 10px 0'
}

function Profile() {
  const { userProfile } = useMainContext();

  console.log('userProfile: ', userProfile)
  return (
    <div className='profileContainer' style={profileContainer}>
      <Card className='card' raised="true" style={cardStyle}>
        <Typography style={titleStyle}>{userProfile.name}</Typography>


          <img className='img' style={imgStyle} src={userProfile.imgUrl} width="" height=""/>

          <Typography>Age {userProfile.age}</Typography>
          <Typography>Breed {userProfile.breed}</Typography>
          <Typography>Owner {userProfile.ownerName}</Typography>
          <Typography>Energy {userProfile.energy}</Typography>
          


      </Card>
    </div>
  )
}

export default Profile;

// use UID