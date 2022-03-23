import React, {useState, useEffect} from 'react';
import Match from './Match.jsx';
import axios from 'axios';

function Matches () {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    let params = {'id': '623aae77a72fd39be4eb7bfe'};

    axios.get('/api/chats', {params})
    .then((res) => {
      const data = res.data;
      console.log('match front data', data);
      setUserData(data);
    })
  }, [])

  return (
    <>
      <div id={'chatPortal'} ></div>
      <div style={{zindex: '1'}} >
        {userData &&
          userData.map((match, index) => {
            return <Match match={match} key={index} />
          })
        }
      </div>
    </>
  );
}

  // {
  //   chats: ['12'],
  //   id: '12345',
  // }

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