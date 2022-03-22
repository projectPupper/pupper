import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import App from './Components/App.jsx';
import Map from './Components/Map.jsx';
import Profile from './Components/Profile.jsx';
import Swipe from './Components/Swipe.jsx';
import Matches from './Components/Matches.jsx';
import Filters from './Components/Filters.jsx';

const appElement = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="profile" element={<Profile />} />
        <Route path="map" element={<Map />} />
        <Route path="swipe" element={<Swipe />} />
        <Route path="matches" element={<Matches />} />
        <Route path="filters" element={<Filters />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  appElement
);