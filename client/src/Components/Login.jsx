import React, { useEffect, useState } from 'react';
import { signInWithGoogle, auth, onAuthStateChanged } from "../Firebase.js"
import ProfileSetup from "./ProfileSetup.jsx";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useMainContext } from './Providers/MainProvider.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoadingButton from '@mui/lab/LoadingButton';

const loginBackground = {
  backgroundImage: "url('https://res.cloudinary.com/chewychewy/image/upload/v1648179068/Screen_Shot_2022-03-24_at_8.30.51_PM_anh8ed.png')",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}

const loginStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

const loginButtonStyle = {
  marginBottom: '99%',
  marginTop: '5%',
}

function Login() {
  const { setUserProfile } = useMainContext()
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const config = { params: {uid: user.uid} }
        axios.get('/api/profile', config)
          .then((result) => {
            console.log('loginGetAW:', result.data)
            if (result.data.name) {
              setUserProfile(result.data);
              localStorage.setItem('userProfile', JSON.stringify(result.data));
              navigate("/swipe");
            } else {
              setUserProfile({uid: user.uid});
              setLoggedIn(true);
            }
            localStorage.setItem('uid', user.uid);
          })
      } else {
        setLoading(false);
      }
    })
  }, []);

  function handleClick() {
    signInWithGoogle()
    .then(result => {
      setUserProfile({uid: result.user.uid});
      setLoggedIn(true);
      console.log('google: ', result)
    })
    .catch(err => {
      console.log(err);
    })

  }

  return (
    <>
      {loggedIn ?
        <ProfileSetup submitLabel="Register"/>
        :
        <div style={loginBackground}>
          <div style={loginStyle}>
            <Typography style={{ fontSize: 50, fontWeight: 700, color: '#ff9800', textAlign: 'center', fontFamily:'Courgette', marginTop: '88%'}}>Pupper</Typography>
            <LoadingButton loading={loading} variant="contained" sx={{backgroundColor:'#ff9800'}} style={loginButtonStyle} onClick={handleClick}>login playground</LoadingButton>
          </div>
        </div>
      }
    </>
  )
}

export default Login;