const mongoose = require('mongoose');
const mongoPath = require('./dbconfig.js');
mongoose.connect(mongoPath, {useNewUrlParser: true,
  useUnifiedTopology: true});
