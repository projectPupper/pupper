import React, { useState } from 'react';
import {signInWithGoogle} from "../Firebase.js"
import ProfileSetup from "./ProfileSetup.jsx";


const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  function handleClick() {
   return Promise.resolve(signInWithGoogle())
    .then(result => {
      setLoggedIn(true)
    })
    .catch(err => {
      console.log(err);
    })
  }

  function handleRegistered() {
    setLoggedIn(false)
  }

  return (
    <>
      {loggedIn ? <ProfileSetup /> :
      <button onClick={handleClick}>login chewy</button>}
    </>
  )
}

export default Login;