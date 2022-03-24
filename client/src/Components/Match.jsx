import React, { useState, useEffect } from 'react';
import Chat from './Chat.jsx';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';
import { useMainContext } from './Providers/MainProvider.jsx';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: '100vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Match = ({ match }) => {
  const [showModal, setShowModal] = useState(false);
  const { userProfile, setUserProfile } = useMainContext();
  const [matchData, setMatchData] = useState(null);

  const showChat = (e) => {
    e.preventDefault();
    setShowModal(true);
  }

  const closeChat = (e) => {
    e.preventDefault();
    setShowModal(false);
  }

  useEffect(() => {
    const params = {};
    if (userProfile._id === match.users[0]) {
      params._id = match.users[1];
    } else {
      params._id = match.users[0];
    }
    console.log('params', params);
    axios.get('/api/profile', {params})
      .then((res) => {
        console.log('match 1', res.data)
        setMatchData(res.data);
      })
  }, []);

  return matchData && (
    <div>
      <Stack direction="row" spacing={2}>
        <Avatar
        src={matchData.imgUrl}
        alt="Profile Pic"
        />
        <Button onClick={showChat}>Chat</Button>
        <Button>Remove</Button>
      </Stack>
      <Modal
        open={showModal}
        onClose={closeChat}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
        <Button onClick={closeChat}>Close Chat</Button>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Chatroom
          </Typography>
          <Chat match={match}/>
        </Box>
      </Modal>
    </div>
  )
}

export default Match;

    // get current match profile?
  // render out matches photo and name, name with be clickable and display matches profile
  // remove button to remove this match
  // chat button to render out this matches chat conversation


    // setValue(newValue);

    // <div>
    //  <img src='https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg' style={{width: 100 + 'px'}}/>
    //  <Button onClick={showChat} component={Link} to='/chat'>Chat</Button>
    //  <Button>Remove</Button>
    //  {showModal &&
    //  <Chat closeChat={closeChat}/>
    //  }
    // </div>