import React, { useState } from 'react';
import Chat from './Chat.jsx';
import Button from '@mui/material/Button';
import { Outlet, Link } from "react-router-dom";

const Match = ({ id }) => {
  const [showModal, setShowModal] = useState(false);
  // get current match profile?
  // render out matches photo and name, name with be clickable and display matches profile
  // remove button to remove this match
  // chat button to render out this matches chat conversation
  //
  const showChat = (e) => {
    e.preventDefault();
    setShowModal(true);
    // setValue(newValue);
  }

  const closeChat = (e) => {
    e.preventDefault();
    setShowModal(false);
  }

  return (
    <div>
     <img src='https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg' style={{width: 100 + 'px'}}/>
     <Button onClick={showChat} component={Link} to='/chat'>Chat</Button>
     <Button>Remove</Button>
     {showModal &&
     <Chat closeChat={closeChat}/>
     }
    </div>
  )
}

export default Match;