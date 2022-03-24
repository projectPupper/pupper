const models = require('../Model');

module.exports = {
  postPreference: (req, res) => {
    console.log('here!');
    models.preference.postPreference(req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send();
      }
    });
  },
  getPreference: (req, res) => {

  }
}