import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Autocomplete, Button, Slider, TextField, TextareaAutosize } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PetsIcon from '@mui/icons-material/Pets';
import InfoIcon from '@mui/icons-material/Info';
import Typography from '@mui/material/Typography';
import breeds from '../../../breeds.js'
import { useMainContext } from './Providers/MainProvider.jsx';
import { LoadingButton } from '@mui/lab';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';


const setupContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

const individialStyleWrapper = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
}

const individialStyleContainer = {
  marginRight: '100px'
}

const buttonStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: '5%'
}

function ProfileSetup(props) {
  const { userProfile, setUserProfile } = useMainContext();
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState({
    aboutMe: '',
    age: '',
    breed: '',
    energy: '',
    gender: '',
    imgUrl: '',
    name: '',
    offLeash: '',
    ownerName: '',
    size: ''
  })
  let navigate = useNavigate();
  let { username } = useParams();

  useEffect(() => {
    console.log('userProfile: ', userProfile._id)
    console.log('info before: ', info)
    if (userProfile._id) {
      const config = { params: {_id: userProfile._id} }
      axios.get('/api/profile', config)
      .then ((res) => {
        console.log('res: ', res)
        setInfo({
          aboutMe: res.data.aboutMe,
          age: res.data.age,
          breed: res.data.breed,
          energy: res.data.energy,
          gender: res.data.gender,
          imgUrl: res.data.imgUrl,
          name: res.data.name,
          offLeash: res.data.offLeash,
          ownerName: res.data.ownerName,
          size: res.data.size
        })
      })
    }
  },[])

  console.log('info after: ', info);

  const sizeMarks = [
    {
      value: 0,
      label: 'Small',
    },
    {
      value: 1,
      label: 'Medium',
    },
    {
      value: 2,
      label: 'Large',
    }
  ];

  const ageMarks = [
    {
      value: 0,
      label: 'Puppy',
    },
    {
      value: 1,
      label: 'Adult',
    },
    {
      value: 2,
      label: 'Senior',
    },
  ];

  const genderMarks = [
    {
      value: 0,
      label: 'Female',
    },
    {
      value: 1,
      label: 'Male',
    },
  ];

  const energyMarks = [
    {
      value: 0,
      label: 'Low',
    },
    {
      value: 1,
      label: 'Medium',
    },
    {
      value: 2,
      label: 'High',
    },

  ];

  const leashMarks = [
    {
      value: 0,
      label: 'on',
    },
    {
      value: 1,
      label: 'off',
    },
  ];

  function reverseSearch(string, marksName, leashIndicator) {
    if (string && leashIndicator) {
      string ? string = "off" : string = "on"
    }
    for (let i = 0; i < marksName.length; i++) {
      if (marksName[i].label === string) {
        return sizeMarks[i].value;
      }
    }
  }

  function sizeFormatVal(value) {
    for (let i = 0; i < sizeMarks.length; i++) {
      if (sizeMarks[i].value === value) {
        return sizeMarks[i].label
      }
    }
  }

  function ageFormatVal(value) {
    for (let i = 0; i < ageMarks.length; i++) {
      if (ageMarks[i].value === value) {
        return ageMarks[i].label
      }
    }
  }

  function genderFormatVal(value) {
    for (let i = 0; i < genderMarks.length; i++) {
      if (genderMarks[i].value === value) {
        return genderMarks[i].label
      }
    }
  }

  function energyFormatVal(value) {
    for (let i = 0; i < energyMarks.length; i++) {
      if (energyMarks[i].value === value) {
        return energyMarks[i].label
      }
    }
  }

  function leashFormatVal(value) {
    for (let i = 0; i < leashMarks.length; i++) {
      if (leashMarks[i].value === value) {
        return leashMarks[i].label
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    e.persist();
    if (e.target.photo.files.length === 0) {
      let serverPackage = {
        name: e.target.name.value,
        age: ageFormatVal(Number(e.target.age.value)),
        gender: genderFormatVal(Number(e.target.gender.value)),
        breed: e.target.breed.value,
        size: sizeFormatVal(Number(e.target.size.value)),
        energy: energyFormatVal(Number(e.target.energy.value)),
        offLeash: e.target.offLeash.value === '1' ? true : false,
        ownerName: e.target.ownerName.value,
        aboutMe: e.target.aboutMe.value,
        uid: userProfile.uid,
        imgUrl: userProfile.imgUrl,
      };

      axios.post('/api/profile', serverPackage)
          .then((result) => {
            setUserProfile(result.data);
            localStorage.setItem('userProfile', JSON.stringify(result.data));
            localStorage.setItem('uid', result.data.uid);
            props.submitLabel === 'Register' ?
              navigate("/preferences")
              : props.exitOutEdit();
          })
          .catch(err => console.log(`Profile post error:`, err))
    } else {
      const data = new FormData();
      data.append('file', e.target.photo.files[0]);
      data.append('upload_preset', 'pupper');
      data.append('cloud_name', 'chewychewy');
      axios.post('https://api.cloudinary.com/v1_1/chewychewy/image/upload', data)
        .then((res) => {
          let serverPackage = {
            name: e.target.name.value,
            age: ageFormatVal(Number(e.target.age.value)),
            gender: genderFormatVal(Number(e.target.gender.value)),
            breed: e.target.breed.value,
            size: sizeFormatVal(Number(e.target.size.value)),
            energy: energyFormatVal(Number(e.target.energy.value)),
            offLeash: e.target.offLeash.value === '1' ? true : false,
            ownerName: e.target.ownerName.value,
            aboutMe: e.target.aboutMe.value,
            uid: userProfile.uid,
            imgUrl: res.data.url,
          };

          axios.post('/api/profile', serverPackage)
            .then((result) => {
              setUserProfile(result.data);
              localStorage.setItem('userProfile', JSON.stringify(result.data));
              localStorage.setItem('uid', result.data.uid)
              props.submitLabel === 'Register' ?
              navigate("/preferences")
              : props.exitOutEdit();
            })
            .catch(err => console.log(`Profile post error:`, err))
        })
        .catch((err) => {
          console.log('Cloudinary profile post err:', err);
        });
    }
  }


  return (
    <>
      {props.submitLabel === "Register" && <Typography style={{ fontSize: 30, fontWeight: 700, color: '#ff9800', textAlign: 'center', fontFamily:'Courgette' }}>Pupper</Typography>}
      {props.submitLabel === "Save Profile" && <CloseIcon onClick={props.exitOutEdit} sx={{ margin: '4% 0 0 90%', borderStyle: 'double', borderRadius: '50%', fontSize: '20px' }}></CloseIcon>}
      <form onSubmit={handleSubmit}>
        <div style={setupContainer}>

          <div style={individialStyleWrapper} >
            <div style={individialStyleContainer} >
              <PetsIcon sx={{ color: "chocolate", mr: 1, my: 3 }} />
              <TextField id="name" label="My name" variant="standard" defaultValue={userProfile && userProfile.name} />
            </div>
          </div>

          <div style={individialStyleWrapper} >
            <InfoIcon sx={{ color: "chocolate", mr: 1, my: 3 }} />
            <TextareaAutosize id="aboutMe" aria-label="empty textarea" minRows={4} defaultValue={userProfile && userProfile.aboutMe} placeholder="About Me" style={{ width: '260px', height: '55px' }} />
          </div>

          <div style={individialStyleWrapper} >
            <div style={individialStyleContainer} >
              <AccountCircleIcon sx={{ color: "chocolate", mr: 1, my: 3 }} />
              <TextField id="ownerName" defaultValue={userProfile && userProfile.ownerName} label="My owner's name" variant="standard" />
            </div>
          </div>

          <div style={individialStyleWrapper} >
            <Autocomplete
            defaultValue={userProfile && userProfile.breed}
            disablePortal
            id="breed"
            options={breeds}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Breed" />}
            />
          </div>

      </div>
        <Typography style={{ marginLeft: "30%", marginRight: "30%", color: 'chocolate' }}>

          <Typography style={{textAlign: "center", marginTop: "10px"}}>Size</Typography>
          <Slider name="size" step={1} min={0} max={2} defaultValue={reverseSearch(userProfile.size, sizeMarks)} marks={sizeMarks} aria-label="Default"  valueLabelDisplay="auto" valueLabelFormat={sizeFormatVal} style={{color: "#ff9800"}} />


          <Typography style={{textAlign: "center", marginTop: "10px"}}>Pupper Gender</Typography>
          <Slider name="gender" step={1} min={0} max={1} defaultValue={reverseSearch(userProfile.gender, genderMarks)} marks={genderMarks} valueLabelFormat={genderFormatVal} aria-label="Default"  valueLabelDisplay="auto" style={{color: "#ff9800"}} />


          <Typography style={{textAlign: "center"}}>Pupper Age</Typography>
          <Slider name="age" step={1} min={0} max={2} defaultValue={reverseSearch(userProfile.age, ageMarks)} marks={ageMarks} valueLabelFormat={ageFormatVal} aria-label="Default"  valueLabelDisplay="auto" style={{color: "#ff9800"}} />


          <Typography style={{textAlign: "center", marginTop: "10px"}}>Energy Level</Typography>
          <Slider name="energy" step={1} min={0} max={2} defaultValue={reverseSearch(userProfile.energy, energyMarks)} marks={energyMarks} valueLabelFormat={energyFormatVal} aria-label="Default"  valueLabelDisplay="auto" style={{color: "#ff9800"}} />


          <Typography style={{textAlign: "center", marginTop: "10px"}}>Leash On/Off</Typography>
          <Slider name="offLeash" step={1} min={0} max={1} defaultValue={reverseSearch(userProfile.offLeash, leashMarks, true)} marks={leashMarks} valueLabelFormat={leashFormatVal} aria-label="Default"  valueLabelDisplay="auto" style={{color: "#ff9800"}} />

        </Typography>
        <div style={buttonStyle}>
          <Button
            variant="contained"
            component="label"
            onClick={() => {console.log('im clicked')}}
            style={{backgroundColor: "#ff9800"}}
          >
            Upload Profile Pic
            <input
              required={props.submitLabel === "Register" ? true : false}
              id="photo"
              type="file"
              hidden
            />
          </Button>
          <LoadingButton
            type="submit"
            size="medium"
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            variant="contained"
            style={{backgroundColor: "#ff9800"}}
          >
            {props.submitLabel}
          </LoadingButton>
        </div>
      </form>
    </>
  )
}

export default ProfileSetup;