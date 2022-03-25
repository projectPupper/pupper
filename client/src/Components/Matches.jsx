import React, {useState, useEffect} from 'react';
import Match from './Match.jsx';
import axios from 'axios';
import { useMainContext } from './Providers/MainProvider.jsx';

const matchStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  zindex: '1',
  marginRight: '30px'
}

function Matches () {
  const [userData, setUserData] = useState(null);
  const { userProfile, setUserProfile } = useMainContext();

  useEffect(() => {
    let params = {'id': userProfile._id};

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
      <div style={matchStyle} >
        {userData &&
          userData.map((match, index) => {
            return <Match match={match} key={index} />
          })
        }
      </div>
    </>
  );
}
export default Matches;

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