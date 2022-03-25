import React, { useState, useEffect } from 'react';
import Chat from './Chat.jsx';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';
import { useMainContext } from './Providers/MainProvider.jsx';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';

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

const iconStyle = {
  position: 'relative',
  width: 70,
  height: 70
  // margin: 4,
};

const gridStyle = {
  alignItems: 'center',
  justifyContent: 'space-around'
}

const divContainer = {
  display: 'flex',
  justifyContent: 'space-between'
}

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
      <Box sx={{ flexGrow: 1, alignItems: 'center', justifyContent: 'space-between', m: 5 }}>
        <Grid container spacing={4} sx={gridStyle}>
          <Grid item xs={3}>
            <Avatar
            src={matchData.imgUrl}
            alt="Profile Pic"
            sx={iconStyle}
            />
           </Grid>
           <Grid item xs={3}>
            <Typography sx={{width: '150px'}}>{matchData.name}</Typography>
           </Grid>
           <Grid item xs={2}>
            <Button onClick={showChat}>Chat</Button>
           </Grid>
           <Grid item xs={2}>
            <Button><DeleteIcon/></Button>
           </Grid>
        </Grid>
      </Box>
      <Modal
        open={showModal}
        onClose={closeChat}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
        <IconButton sx={{ml: 2}} onClick={closeChat}><ArrowBackIcon/></IconButton>
          <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
            Pup Pod
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