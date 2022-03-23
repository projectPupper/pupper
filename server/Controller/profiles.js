const models = require('../Model');

module.exports = {
  postProfiles: (req, res) => {
    console.log('here!');
    models.profiles.postProfiles(req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send();
      }
    });
  },
  getOtherProfiles: (req, res) => {
    models.profiles.getOtherProfiles(req.query, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  }
}