const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = 3000;
const controller = require('./Controller')

const db = require('../db/db.js');
const model = require('../db');
const breedsList = require('../breeds.js');

app.use(express.static('client/dist'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/api/breeds', function(req, res) {
  res.send(breedsList.breedsList);
})

app.post('/api/swipe', controller.swipe.postSwipe);
app.get('/api/swipe', controller.swipe.getSwipe);

app.post('/api/profiles', controller.profiles.postProfiles);

//get profiles except for main user
app.get('/api/profiles', controller.profiles.getOtherProfiles);

// DO NOT REMOVE OR ROUTES WON'T WORK ON REFRESH.
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
