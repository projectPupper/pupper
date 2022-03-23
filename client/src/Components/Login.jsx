import React, { useState } from 'react';
import { signInWithGoogle } from "../Firebase.js"
import ProfileSetup from "./ProfileSetup.jsx";
import Typography from '@mui/material/Typography';


function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  // setLoggedIn(true)

  function handleClick() {
    // signInWithGoogle()
    // .then(result => {
    //   setLoggedIn(true)
    //   console.log('google: ', result)
    // })
    // .catch(err => {
    //   console.log(err);
    // })
      setLoggedIn(true)

  }

  return (
    <>
      {loggedIn ?
        <ProfileSetup />
        :
        <>
          <Typography style={{ fontSize: 30, fontWeight: 700, color: '#ff9800', textAlign: 'center', fontFamily:'Courgette' }}>Pupper</Typography>
          <button onClick={handleClick}>login chewy</button>
        </>
      }
    </>
  )
}

export default Login;