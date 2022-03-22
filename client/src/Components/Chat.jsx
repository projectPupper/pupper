import React, { useState } from 'react';
import Messages from './Messages.jsx';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ReactDom from 'react-dom';

const Chat = ({ closeChat }) => {
  const [input, setInput] = useState(null);
  // const [send, setSend] = useState('disabled');
  const [chats, setChats] = useState({
    id: '12',
    time: '54321',
    users: ['12345', '67891'],
    messages: [{
      body: 'test 1',
      sender: '12345'
    },
    {
      body: 'test 2',
      sender: '67891'
    }]
  }
  )
  const handleChange = (e) => {
    e.preventDefault();
    // setSend('');
    let message = {
      body: e.target.value,
      sender: '12345'
    }
    setInput(message);
  }

  const sendMessage = (e) => {
    e.preventDefault();
    // setSend('disabled');
    let messages = chats;
    messages.messages.push(input);
    setChats(messages);
  }

  return (
    <div>
      {
        chats.messages.map((message, index) => {
          return <Messages message={message} key={index} />
        })
      }
      <TextField id="filled-basic" label="Type a Message" variant="filled" onChange={handleChange} />
      <Button onClick={sendMessage}>Send</Button>
    </div>
  )
}

export default Chat;

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
