import React, { useState } from 'react';
import { signInWithGoogle } from "../Firebase.js"
import ProfileSetup from "./ProfileSetup.jsx";
import Typography from '@mui/material/Typography';


function Login() {
  const [loggedIn, setLoggedIn] = useState(false);

  function handleClick() {
    signInWithGoogle()
    .then(result => {
      setLoggedIn(true)
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <>
      {loggedIn ?
      <>
        <Typography style={{ fontSize: 30, fontWeight: 700, color: '#ff9800', textAlign: 'center', fontFamily:'Courgette' }}>Pupper</Typography> <ProfileSetup />
      </> :
      <>
        <Typography style={{ fontSize: 30, fontWeight: 700, color: '#ff9800', textAlign: 'center', fontFamily:'Courgette' }}>Pupper</Typography>
        <button onClick={handleClick}>login chewy</button>
      </>}
    </>
  )
}

export default Login;