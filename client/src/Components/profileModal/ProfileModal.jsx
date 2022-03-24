import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';



function ProfileModal({ user }) {
  console.log(user);
  return(
    <Box>
      <Box sx={{width: '100%', height: 250}}>
        <img src={user.imgUrl} style={{ position: "relative", width: '100%', height: '100%', borderTopLeftRadius: '10px 10px', borderTopRightRadius: '10px 10px' }} />
      </Box>
      <Box p={3}>
        <Typography sx={{ textAlign: 'center', fontFamily:'Courgette', color: '#ff9800',fontSize: 30, fontWeight: 700}}>
          {user.name}
        </Typography>
        <Typography sx={{ textAlign: 'center', fontSize: 20}}>
          Hi! I love toys and treats!
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
    </Box>
  );
}

export default ProfileModal;