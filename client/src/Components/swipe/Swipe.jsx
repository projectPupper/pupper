import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PersonIcon from '@mui/icons-material/Person';
import CheckIcon from '@mui/icons-material/Check';
import { useMainContext } from '../Providers/MainProvider.jsx';
import ProfileModal from '../profileModal/ProfileModal.jsx';


const swipeStyle = {
  position: "absolute",
  display: "inline-block",
  zIndex: 9998
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
    fontSize: "20px",
    fontWeight:700,
    margin: "5px",
    marginLeft: "20px"
}

const smallFontStyle = {
  // position: "absolute",
  color: "#fff",
  textAlign: "right",
  fontSize: "13px",
  fontWeight: 300,
  marginRight: "20px",
  margin: "10px"
}

const cardWrapper = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const modalStyle = {
  position: 'absolute',
  display: 'flex',
  top: '50%',
  left: '50%',
  width: '70vw',
  maxWidth: 330,
  height: "60vh",
  transform: 'translate(-50%, -50%)',
  borderRadius: 3,
  bgcolor: 'background.paper',
  boxShadow: 24,
  alignItems: 'center',
  flexDirection: 'column'
};


function Swipe () {
  const { userProfile, swipeList, setSwipeList } = useMainContext();
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  const [lastDirection, setLastDirection] = useState();
  const [swipedRight, setSwipedRight] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [profileList, setprofileList] = useState(null);

  useEffect(() => {
    // console.log("swipe mounted:", userProfile, swipeList);
    if (userProfile) {
    axios.get('/api/swipeprofiles', { params: { id: userProfile._id, prefer: swipeList }})
      .then((res) => {
        setprofileList(res.data);
      })
    }

  }, []);

  const showAlert = () => {
    setAlert(true);
    setTimeout(() => {
      // After 3 seconds set the show value to false
      setAlert(false)
    }, 2000)
  }

  const swiped = (direction, nameToDelete, idToDelete) => {
    if(direction === 'left') {
      axios.post('/api/swipe', { id: userProfile._id, like: false, swipedId: idToDelete })
        .then((res) => {
          // console.log('swipe false posted!');
        })
    } else {
      setSwipedRight(nameToDelete);
      axios.post('/api/swipe', { id: userProfile._id, like: true, swipedId: idToDelete })
        .then((res) => {
            if (res.data) {
              showAlert();
            }
        })
    }
    setLastDirection(direction);
  }

  const outOfFrame = (name) => {
    // console.log(name + ' left the screen!')
  }

  const handleClick = (user) => {
    setCurrentUser(user)
    setOpen(true);
  }
  const handleClose = () => setOpen(false);

  return (
    <>
    <div className='tinderCardWrapper' style={cardWrapper}>
      <Box sx={{ height: 30 }} mt={2.5}>
      {alert &&
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      You are matched with {swipedRight} !
    </Alert>
      }
      </Box>
      {!profileList &&
        <Box>
          <Typography sx={{color: '#e0e0e0', display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center' }}>Loading ...</Typography>
        </Box>
      }
      {profileList &&
      <>
      <div style={cardContainer}>
        {profileList.map((character) =>
        <>
          <TinderCard className='swipe' style={swipeStyle} key={character.name} onSwipe={(dir) => swiped(dir, character.name, character._id)} onCardLeftScreen={() => outOfFrame(character.name)}  >
            <div className='card' style={cardStyle} >
            <img  src={character.imgUrl} style={{ position: "relative", width: '100%', height: '75%', borderTopLeftRadius: '10px 10px', borderTopRightRadius: '10px 10px' }}/>
            <Box sx={{ display: "flex", justifyContent: "space-between"}}>
              <Typography sx={fontStyle}>{character.name}</Typography>
              <Typography sx={{ fontSize: '18px', marginTop: "35px", marginLeft: "20px", textAlign: 'left', color: '#fff'}}>{character.breed}</Typography>
              <Typography sx={smallFontStyle}> {character.size}  size<br/>{character.energy} energy<br/> {character.age} | {character.gender} </Typography>
            </Box>
            </div>
            <IconButton sx={{position: 'absolute', backgroundColor: '#fff', margin: '20px 90px'}} onTouchStart={() => handleClick(character)} onClick={() => handleClick(character)}aria-label="delete" size="large"><PersonIcon /></IconButton>
          </TinderCard>
          </>
        )}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
        <ProfileModal user={currentUser}/>
        </Box>
      </Modal>

      <Box sx={{position: 'absolute', textAlign:'center', width: '90vw', maxWidth: '330px', height: '55vh', marginTop: '5vh', marginBottom: '3vh', zIndex: -999}}>
          <img  src="https://res.cloudinary.com/chewychewy/image/upload/v1648228295/Screen_Shot_2022-03-25_at_12.01.35_PM_b1zciu.jpg" style={{ position: "relative", width: '100%', height: '100%', borderRadius: "10px"}}/>
        </Box>
        </>
      }
    </div>

          </>
  )
}

export default Swipe


