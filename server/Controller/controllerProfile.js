const model = require('../Model');

module.exports = {
  getProfile: (req, res) => {
    model.modelProfile.findProfile(req.query.uid, req.query._id, (err, result) => {
      if (err) {
        res.status(418).send(err);
      } else {
        res.send(result);
      }
    })
  },

  postProfile: (req, res) => {
    model.modelProfile.createProfile(req.body, (err, result) => {
      if (err) {
        res.status(418).send(err);
      } else {
        res.status(201).send(result);
      }
    })
  }
}