import React, { useState } from 'react';
import Messages from './Messages.jsx';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ReactDom from 'react-dom';
import axios from 'axios';
import { useMainContext } from './Providers/MainProvider.jsx';

const Chat = ({ closeChat, match }) => {
  const [input, setInput] = useState('Send a message');
  const [chats, setChats] = useState(match);
  const { userProfile, setUserProfile } = useMainContext();

  const handleChange = (e) => {
    e.preventDefault();

    console.log('match', match._id);

    let message = {
      id: match._id,
      users: match.users,
      message: {
        body: e.target.value,
        sender: userProfile._id
      }
    }
    setInput(message);
  }

  var intervalID = setInterval(getMessages, 500);

  const getMessages = () => {
    let params = {"id": match._id};

    axios.get('/api/messages', {params})
    .then((res) => {
      const data = res.data[0];
      console.log('match data', data);
      setChats(data);
    })
  }

  const sendMessage = (e) => {
    e.preventDefault();

    axios.post('/api/chats', input)
    .then(() => {
      getMessages();
    })
    setInput('Send a message');
  }

  return (
    <div>
      {
        chats.messages.map((message, index) => {
          return <Messages message={message} key={index} />
        })
      }
      <div style={{display: 'flex', flexDirection: 'row', position: 'fixed', bottom: '8%', width: '80%', justifyContent: 'space-evenly'}}>
        <TextField id="filled-basic" label="Send a message" variant="filled" onChange={handleChange} />
        <Button onClick={sendMessage}>Send</Button>
      </div>
    </div>
  )
}

export default Chat;

  // const [send, setSend] = useState('disabled');
  // {
  //   id: '12',
  //   time: '54321',
  //   users: ['12345', '67891'],
  //   messages: [{
  //     body: 'test 1',
  //     sender: '12345'
  //   },
  //   {
  //     body: 'test 2',
  //     sender: '67891'
  //   }]
  // }

// <div style={{zindex: '10001', backgroundColor: 'purple'}} >
// <div style={{zindex: '1000', position: 'absolute', backgroundColor: 'white'}} >
//    {
//     chats.messages.map((message, index) => {
//       return <Messages message={message} key={index} />
//     })
//    }
//     <TextField id="filled-basic" label="Type a Message" variant="filled" />
//     <Button disabled>Send</Button>
//     <Button onClick={closeChat}>Close</Button>
// </div>
// </div>,
// document.getElementById('chatPortal'),

  // display match profile picture and name at the top of the chat
  // find out if current match and user have a chat
  // render out chat (if none exists, will be empty)
  // include an input field for new message
