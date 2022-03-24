const db = require('../../db/db.js');

module.exports = {
  postPreference: (body, cb) => {
    console.log('here in model!', body);
    db.Profile.updateOne({_id: body.id}, {prefrences: body.input})
      .then((result) => {
        cb(null, result);
      })
      .catch((err) => {
        cb(err);
      })
  },
  getPreference: (body, cb) => {

  }
}