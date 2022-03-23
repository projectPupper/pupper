import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const db =
[{
  name: "Woody",
  age: "Adult",
  imgUrl: "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500",
  gender: "Male",
  breed: "Golden doodle",
  size: "Medium",
  energy: "High",
  offLeash: true,
  ownerName: "Inny",
  ownerNumber: "132-456-7910",
  location: "Chicago, Illinois",
  aboutMe: "I am chill",
  photos: [],
  prefrences: {
    age: "Adult",
    breed: ["Golden Doodle", "Golden Retriever", "Poodle"],
    size: "Medium",
    energy: "High",
    offLeash: true,
  },
  chats: [],
  swiped: [],
  username: "Inny Choi"
},
{
  name: "Hansel",
  age: "Audult",
  imgUrl: "https://upload.wikimedia.org/wikipedia/commons/0/04/Labrador_Retriever_%281210559%29.jpg",
  gender: "Male",
  breed: "Labrador",
  size: "Large",
  energy: "Medium",
  offLeash: true,
  ownerName: "Kat",
  ownerNumber: "132-456-8654",
  location: "Seattle, Washington",
  aboutMe: "I love treats!",
  photos: [],
  prefrences: {
    age: "Adult",
    breed: ["Golden Doodle", "Golden Retriever", "Labrador"],
    size: "Large",
    energy: "Medium",
    offLeash: true,
  },
  chats: [],
  swiped: [],
  username: "Kat"
},
{
  name: "Ditto",
  age: "Puppy",
  imgUrl: "https://www.thelabradorsite.com/wp-content/uploads/2020/05/10-tips.jpg",
  gender: "Male",
  breed: "Mixed",
  size: "Small",
  energy: "High",
  offLeash: true,
  ownerName: "Luna",
  ownerNumber: "132-456-8520",
  location: "Seattle, Washington",
  aboutMe: "I have a lot of energy!",
  photos: [],
  prefrences: {
    age: "Puppy",
    breed: ["Golden Retriever", "Labrador"],
    size: "Small",
    energy: "High",
    offLeash: true,
  },
  chats: [],
  swiped: [],
  username: "Luna"
},
{
  name: "Joey",
  age: "Adult",
  gender: "Male",
  imgUrl: "https://upload.wikimedia.org/wikipedia/commons/0/04/Labrador_Retriever_%281210559%29.jpg",
  breed: "Australian Cattle Dog",
  size: "Medium",
  energy: "Medium",
  offLeash: true,
  ownerName: "Luna",
  ownerNumber: "132-456-1234",
  location: "Seattle, Washington",
  aboutMe: "I love my mom!",
  photos: [],
  prefrences: {
    age: "Puppy",
    breed: ["Australian Cattle Dog", "Labrador"],
    size: "Medium",
    energy: "Medium",
    offLeash: true,
  },
  chats: [],
  swiped: [],
  username: "Marley"
}
];

const swipeStyle = {
  position: "absolute",
  display: "inline-block",
}

const cardStyle = {
  position: "absolute",

  backgroundColor: "#ff9800",
  width: 330,
  maxWidth: "85vw",
  height: "60vh",
  borderRadius: '10px',
  'backgroundSize': "cover",
  boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.05)',
  'backgroundPosition': "center"
}

const cardContainer = {
  textAlign:'center',
  width: '90vw',
  maxWidth: '330px',
  height: '70vh',
  marginTop: '5vh',
  marginBottom: '3vh'
}

const fontStyle = {
    position: "absolute",
    color: "#fff",
    fontSize: "30px",
    fontWeight:700,
    margin: "10px",
    marginLeft: "20px"
}

const smallFontStyle = {
  // position: "absolute",
  color: "#fff",
  textAlign: "right",
  fontSize: "18px",
  fontWeight: 500,
  marginRight: "20px",
  margin: "10px"
}

const cardWrapper = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}




function Swipe () {
  const currentId = "623a9cb9db7e4550a2086855";

  const characters = db;
  const [lastDirection, setLastDirection] = useState();
  const [profileList, setprofileList] = useState(null);


  useEffect(() => {
    axios.get('/api/profiles', { params: { id: currentId }})
      .then((res) => {
        setprofileList(res.data);
      })
  }, []);

  const swiped = (direction, nameToDelete, idToDelete) => {
    if(direction === 'left') {
      axios.post('/api/swipe', { id: currentId, like: false, swipedId: idToDelete })
        .then((res) => {
          console.log('swipe false posted!')
        })
    } else {
      axios.post('/api/swipe', { id: currentId, like: true, swipedId: idToDelete })
        .then((res) => {
          console.log('swipe true posted!')
        })
    }
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div className='tinderCardWrapper' style={cardWrapper}>
      {profileList &&
      <div style={cardContainer}>
        {profileList.map((character) =>
          <TinderCard className='swipe' style={swipeStyle} key={character.name} onSwipe={(dir) => swiped(dir, character.name, character._id)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div className='card' style={cardStyle}>
            <img src={character.imgUrl} style={{ position: "relative", width: '100%', height: '75%', borderTopLeftRadius: '10px 10px', borderTopRightRadius: '10px 10px' }}/>
              <Typography sx={fontStyle}>{character.name}</Typography>
              <Typography sx={smallFontStyle}> {character.size}  size<br/>{character.energy} energy<br/> {character.age} | {character.gender} </Typography>
            </div>
          </TinderCard>
        )}
      </div>
      }
      {lastDirection ? <Typography className='infoText'>You swiped {lastDirection}</Typography> : <Typography className='infoText' />}
    </div>
  )
}

export default Swipe
