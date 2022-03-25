import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { LoadingButton } from '@mui/lab';
import { borderRadius } from '@mui/system';
import { useMainContext } from './Providers/MainProvider';
import EditProfile from './EditProfile';
import ProfileSetup from './ProfileSetup';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

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

const editStyle = {
  margin: '5% 0 0 80%'
}

function Profile() {
  const { userProfile } = useMainContext();
  const [setup, setSetup] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleLogOut() {
    setLoading(true);
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch(() => {
        console.log('Firebase logout error', err)
      })

  }

  console.log('setup lorene', setup)
  return (
    <>
      {setup ?
          <ProfileSetup submitLabel="Save Profile" />
      : (
          <div className='profileContainer' style={profileContainer}>
            <Card className='card' raised="true" style={cardStyle}>
              <div style={editStyle}>
                <EditProfile  setSetup={setSetup}/>
              </div>


              <Typography style={titleStyle}>{userProfile.name}</Typography>

              <div className='imgContainerWrapper' style={imgContainerWrapper}>
                <div className='imgContainer' style={imgContainer}>
                  <img className='img' style={imgStyle} src={userProfile.imgUrl} />
                </div>
              </div>

              <Typography sx={{ color: 'goldenrod' }}>{userProfile.aboutMe}</Typography>
              <br />
              <br />
              <Typography>Breed: {userProfile.breed}</Typography>
              <Typography>Gender: {userProfile.gender}</Typography>
              <Typography>Age: {userProfile.age}</Typography>
              <Typography>Energy: {userProfile.energy}</Typography>

              <Typography>Off-Leash: {userProfile.offLeash ? 'Yes' : 'No'}</Typography>
              <Typography>Owner: {userProfile.ownerName}</Typography>
              <br />
              <LoadingButton
                sx={{backgroundColor:'#ff9800'}}
                onClick={handleLogOut}
                size="small"
                loading={loading}
                loadingPosition="end"
                variant="contained"
                endIcon={<LogoutIcon />}
              >
                Log Out
              </LoadingButton>

            </Card>
          </div>
        )
      }
    </>


  )
}

export default Profile;

// use UID