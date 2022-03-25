import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import ProfileSetup from "./ProfileSetup";



function EditProfile({ setSetup }) {

  function handleClick() {
    setSetup(true);
  }
  return (
    <>
      <EditIcon onClick={handleClick}> </EditIcon>
    </>
  )
}

export default EditProfile;