import React, { useState, useContext } from 'react';

const MainContext = React.createContext();

export function useMainContext() {
  return useContext(MainContext);
}

export default function MainProvider({ children }) {
  const [userProfile, setUserProfile] = useState({
    prefrences: {
      breed: [],
      age: 'Senior',
      size: 'Large',
      energy: 'Medium',
      offLeash: false
    },
    _id: "623bc640d26a96dbf1b92b8e",
    uid: 'tyrox7wHdzTTmhOkfDtBEn6mBLI3',
    __v: 0,
    age: 'Senior',
    breed: 'Golden Doodle',
    chats: [ "623bdc00cd73384846bb5394" ],
    energy: 'Low',
    gender: 'Female',
    imgUrl: 'http://res.cloudinary.com/chewychewy/image/upload/v1648084544/pupper/vo5fmrqlrzxiygllvpvg.jpg',
    name: 'Woody',
    offLeash: false,
    ownerName: 'inny',
    size: 'Large',
    swiped: [ '623bc29bd26a96dbf1b922d7' ]
  });

  return (
    <MainContext.Provider value={{userProfile, setUserProfile}}>
      {children}
    </MainContext.Provider>
  )
}

