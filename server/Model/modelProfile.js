const { Profile } = require('../../db/db.js')

module.exports = {
  findProfile: (uid, _id, cb) => {
    Profile.find({uid, _id})
    .then((result) => {
      cb(null, result[0])
    })
    .catch((err) => {
      cb(err);
    })
  },

  createProfile: (body, cb) => {
    Profile.updateOne({uid: body.uid}, body, {upsert: true})
      .then((result) => {
        Profile.find({uid: body.uid})
          .then(result => cb(null, result[0]))
          .catch(err => cb(err));
      })
      .catch(err => cb(err));
  },
}