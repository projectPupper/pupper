const models = require('../Model');

module.exports = {
  postSwipe: (req, res) => {
    models.swipe.postSwipe(req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(result);
      }
    });
  },
  getSwipe: (req, res) => {
    // console.log('here!');
    models.swipe.getSwipe(req.query, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  }
}