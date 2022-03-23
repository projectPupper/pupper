import React, { useState, useContext } from 'react';

const MainContext = React.createContext();

export function useMainContext() {
  return useContext(MainContext);
}

export default function MainProvider({ children }) {
  const [userProfile, setUserProfile] = useState();

  return (
    <MainContext.Provider value={{userProfile, setUserProfile}}>
      {children}
    </MainContext.Provider>
  )
}

