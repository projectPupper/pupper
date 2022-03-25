const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = 3000;
const controller = require('./Controller');
const yelp = require('yelp-fusion');
const apiKey = 'BwDL8KP6X9hDs-HgPPLomyUfctPLyAUyBcIhfXcowvAABUJMhlgJQeiMchnp7Q4gOmX3JC8hv0Oij_xp-es7q0ei0qpI_YDq-MJUWAPL9JVfPltLIhvvkB3OMf84YnYx';

const db = require('../db/db.js');
const model = require('../db');
const breedsList = require('../breeds.js');

app.use(express.static('client/dist'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/api/breeds', function(req, res) {
  res.send(breedsList.breedsList);
})


//CHAT
app.get('/api/chats', function(req, res) {
  controller.chats.getChats(req, res);
})
app.post('/api/chats', function(req, res) {
  controller.chats.postChats(req, res);
})

// AUTHENTICATE
app.get('/api/profile', controller.controllerProfile.getProfile)
app.post('/api/profile', controller.controllerProfile.postProfile)

//SWIPE
app.post('/api/swipe', controller.swipe.postSwipe);
app.get('/api/swipe', controller.swipe.getSwipe);

app.post('/api/profiles', controller.profiles.postProfiles);
//get profiles except for main user
app.get('/api/profiles', controller.profiles.getOtherProfiles);

//Yelp
app.get(`/api/yelp`, (req, res) => {
  {console.log('REQ :', req.query)}
  const searchRequest = {
    term:req.query.term,
    latitude: Number(req.query.latitude),
    longitude: Number(req.query.longitude)
  };

  const client = yelp.client(apiKey);
  client.search(searchRequest).then(response => {
    const allResult = response.jsonBody.businesses;
    const prettyJson = JSON.stringify(allResult, null, 4);
    res.send(prettyJson);
  }).catch(e => {
    console.log(e);
  });
})

// DO NOT REMOVE OR ROUTES WON'T WORK ON REFRESH. KEEP AT BOTTOM.
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
})
