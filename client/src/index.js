import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './Components/App.jsx';
import Map from './Components/Map.jsx';
import Profile from './Components/Profile.jsx';
import Swipe from './Components/Swipe.jsx';
import Matches from './Components/Matches.jsx';

const appElement = document.getElementById('app');

ReactDOM.render(
  <Router>

        <Route exact path="/" component={Map} />
        <Route path="/profile" component={Profile} />
        <Route path="/swipe" component={Swipe} />
        <Route path="/chat" component={Matches} />

  </Router>
);

