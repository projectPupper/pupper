import React from 'react';
import { useMainContext } from './Providers/MainProvider.jsx';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

const myStyle = {
  textAlign: 'right'
}

const myNameStyle = {
  color: '#9e9e9e',
  textAlign: 'right',
  fontSize: '14px'
}

const myStyleCard = {
  backgroundColor: 'cornflowerblue',
  color: 'white',
  maxWidth: '50%',
  padding: '1%'
}

const recipientStyle = {
  textAlign: 'left'
}

const rNameStyle = {
  color: '#9e9e9e',
  textAlign: 'left',
  fontSize: '14px'
}

const recipientStyleCard = {
  left: '0px',
  backgroundColor: '#eeeeee',
  color: 'black',
  maxWidth: '50%',
  padding: '1%'
}

const myCardContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end'
}

const rCardContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start'
}

const chatContainer = {
  padding: '15px',
  overflow: 'scroll',
  overflowWrap: 'normal'
}

const Messages = ({ message, recipient }) => {
  const { userProfile, setUserProfile } = useMainContext();

  return userProfile._id === message.sender ? (
    <div style={chatContainer}>
      <div style={myCardContainer}>
        <Card sx={myStyleCard}>
          <Typography sx={myStyle}>{message.body}</Typography>
        </Card>
      </div>
        <Typography sx={myNameStyle}>{userProfile.name}</Typography>
    </div>
  ) :
    <div style={chatContainer}>
      <div style={rCardContainer}>
        <Card sx={recipientStyleCard}>
          <Typography sx={recipientStyle}>{message.body}</Typography>
        </Card>
      </div>
        <Typography sx={rNameStyle}>{recipient.name}</Typography>
    </div>
}

export default Messages;