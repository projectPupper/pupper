import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';



function ProfileModal({ user }) {

  return(
    <>
      <Card sx={{width: '100%', height: '50%'}}>
        <img src={user.imgUrl} style={{ position: "relative", width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%', borderTopLeftRadius: '4px 4px', borderTopRightRadius: '4px 4px',objectFit: 'cover' }} />
      </Card>
      <Box p={3}>
        <Typography sx={{ textAlign: 'center', fontFamily:'Courgette', color: '#ff9800',fontSize: 30, fontWeight: 700}}>
          {user.name}
        </Typography>
        <Typography sx={{ textAlign: 'center', fontSize: 20}}>
        {user.aboutMe}
        </Typography>
        <Stack spacing={1} mt={3}>
          <Chip label={'Breed: '+ user.breed} variant="outlined"/>
          <Chip label={'Gender: '+ user.gender} variant="outlined"/>
          <Chip label={'Size: '+ user.size} variant="outlined"/>
          {user.offLeash ?
          <Chip label='Off Leash' variant="outlined"/> :
          <Chip label='On Leash: ' variant="outlined"/>
          }

        </Stack>
      </Box>
    </>
  );
}

export default ProfileModal;