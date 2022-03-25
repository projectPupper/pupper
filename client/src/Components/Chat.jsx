import React, { useState, useEffect } from 'react';
import Messages from './Messages.jsx';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ReactDom from 'react-dom';
import axios from 'axios';
import { useMainContext } from './Providers/MainProvider.jsx';

const Chat = ({ closeChat, match, recipient }) => {
  // const [input, setInput] = useState('Send a message');
  const [chats, setChats] = useState(match);
  const { userProfile, setUserProfile } = useMainContext();

  function handleSubmit(e) {
    e.preventDefault();
    let message = {
      id: match._id,
      users: match.users,
      message: {
        body: e.target.textfield.value,
        sender: userProfile._id
      }
    }
    e.persist();
    axios.post('/api/chats', message)
    .then(() => {
      getMessages();
      e.target.reset();
    })
  }

  const getMessages = () => {
    let params = {"id": match._id};

    axios.get('/api/messages', {params})
    .then((res) => {
      const data = res.data[0];
      console.log('match data', data);
      setChats(data);
    })
  }
  const func = getMessages;
  // setInterval(func, 1000);

  const sendMessage = (e) => {
    e.preventDefault();
    axios.post('/api/chats', e)
    .then(() => {
      getMessages();
    })
  }

  useEffect(() => {
    const refresh = setInterval(func, 1000);
    return () => clearInterval(refresh);
  }, []);

  // useEffect(() => {
  //   const element = document.getElementById("scroll");
  //   element.scrollTop = element.scrollHeight;
  // })

  return (
    <div>
      <div id='scroll' style={{overflow: 'scroll', position: 'relative', height: '75vh'}}>
        {
          chats.messages.map((message, index) => {
            return <Messages message={message} key={index} recipient={recipient}/>
          })
        }
      </div>
      <div style={{display: 'flex', flexDirection: 'row', position: 'fixed', bottom: '8%', width: '80%', justifyContent: 'space-evenly', position: 'absolute', 'marginLeft': '7%', alignItems: 'center'}}>
        <form onSubmit={handleSubmit}>
          <TextField sx={{ width: '70vw'}} id="textfield" label="Send a message" variant="filled"/>
          <Button type="submit" id="submit" style={{paddingTop: '15px'}} >Send</Button>
        </form>
      </div>
    </div>
  )
}

export default Chat;

  // const handleChange = (e) => {
  //   e.preventDefault();

  //   console.log('match', match._id);

  //   let message = {
  //     id: match._id,
  //     users: match.users,
  //     message: {
  //       body: e.target.value,
  //       sender: userProfile._id
  //     }
  //   }
    // setInput(message);
  // }
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
