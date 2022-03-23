import React, {useState, useEffect} from 'react';
import Match from './Match.jsx';

function Matches () {
  const [userData, setUserData] = useState({
    chats: ['12'],
    id: '12345',
  })

//   const [chats, setChats] = useState([{
//     id: '12',
//     time: '54321',
//     users: ['12345', '67891'],
//     messages: [{
//       body: 'test 1',
//       sender: '12345'
//     },
//     {
//       body: 'test 2',
//       sender: '67891'
//     }]
//   }
// ])

  // get all current users matches (profiles?)
  // render out each match to a chat component
  return (
    <>
      <div id={'chatPortal'} ></div>
      <div style={{zindex: '1'}} >
        {
        userData.chats.map((match, index) => {
          return <Match id={match} key={index} />
        })
        }
      </div>
    </>
  );
}

export default Matches;


// , {
//   id: '13',
//   time: '68891',
//   users: ['12345', '55555'],
//   messages: [{
//     body: 'test 3',
//     sender: '12345'
//   },
//   {
//     body: 'test 4',
//     sender: '55555'
//   }]
// }