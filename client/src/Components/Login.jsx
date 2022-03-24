import React, { useEffect, useState } from 'react';
import { signInWithGoogle, auth, onAuthStateChanged } from "../Firebase.js"
import ProfileSetup from "./ProfileSetup.jsx";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useMainContext } from './Providers/MainProvider.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoadingButton from '@mui/lab/LoadingButton';

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
            // console.log("result.data", result.data)
            if (result.data.name) {
              setUserProfile(result.data);
              localStorage.setItem('userProfile', JSON.stringify(result.data));
              navigate("/swipe");
            } else {
              setUserProfile(user.uid);
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
      setUserProfile(result.user.uid);
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
        <ProfileSetup />
        :
        <>
          <Typography style={{ fontSize: 30, fontWeight: 700, color: '#ff9800', textAlign: 'center', fontFamily:'Courgette' }}>Pupper</Typography>
          <LoadingButton loading={loading} variant="contained" sx={{backgroundColor:'#ff9800'}} onClick={handleClick}>login chewy</LoadingButton>
        </>
      }
    </>
  )
}

export default Login;