const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;
// const controller = require('./Controller')

app.use(express.static('client/dist'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
})
