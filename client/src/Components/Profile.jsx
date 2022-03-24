import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { borderRadius } from '@mui/system';
import { allowRefresh } from './Providers/AllowRefresh';

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

  return (
    <div className='profileContainer' style={profileContainer}>
      <Card className='card' raised="true" style={cardStyle}>
        <Typography style={titleStyle}>{allowRefresh("name")}</Typography>

        <img className='img' style={imgStyle} src={allowRefresh("imgUrl")} width="" height=""/>

        <Typography>Age {allowRefresh("age")}</Typography>
        <Typography>Breed {allowRefresh("breed")}</Typography>
        <Typography>Owner {allowRefresh("ownerName")}</Typography>
        <Typography>Energy {allowRefresh("energy")}</Typography>

      </Card>
    </div>
  )
}

export default Profile;

// use UID