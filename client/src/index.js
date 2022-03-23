import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Login from './Components/Login.jsx';
import App from './Components/App.jsx';
import Map from './Components/Map.jsx';
import Profile from './Components/Profile.jsx';
import Swipe from './Components/swipe/Swipe.jsx';
import Matches from './Components/Matches.jsx';
import Filters from './Components/Filters.jsx';
import Typography from '@mui/material/Typography';
import WithNavi from './Components/Layout/WithNavi.jsx';
import WithoutNavi from './Components/Layout/WithoutNavi.jsx';
import MainProvider from './Components/Providers/MainProvider.jsx'



const appElement = document.getElementById('app');


// const loginContainer =  <>
//   <Route path="/" render={() => <Navigate to="/login" />} />
//   <Route path="/login" component={Login} />
// </>;

// const defaultContainer = <>
// <Routes>
//       {/* <Route path="/" element={<Navigate to="/login" />} />
//       <Route path="/login" element={<Login />} /> */}
//       <Route path="home" element={<App />}>
//         <Route path="profile" element={<Profile />} />
//         <Route path="map" element={<Map />} />
//         <Route path="swipe" element={<Swipe />} />
//         <Route path="matches" element={<Matches />} />
//         <Route path="preferences" element={<Filters />} />
//       </Route>
//     </Routes></>

ReactDOM.render(
  <MainProvider>
    <BrowserRouter>
      {/* <Typography style={{ fontSize: 30, fontWeight: 700, color: '#ff9800', textAlign: 'center', fontFamily:'Courgette' }}>Pupper</Typography> */}
      <Routes>
        <Route element={<WithoutNavi />}>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<WithNavi />}>
          <Route path="profile" element={<Profile />} />
          <Route path="map" element={<Map />} />
          <Route path="swipe" element={<Swipe />} />
          <Route path="matches" element={<Matches />} />
          <Route path="preferences" element={<Filters />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </MainProvider>,
  appElement
);