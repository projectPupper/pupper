const { Profile } = require('../../db/db.js')

module.exports = {
  findProfile: (uid, _id, cb) => {
    if (uid) {
      Profile.find({uid})
        .then((result) => {
          cb(null, result[0])
        })
        .catch((err) => {
          cb(err);
        })
    }
    if (_id) {
      Profile.find({_id})
      .then((result) => {
        cb(null, result[0])
      })
      .catch((err) => {
        cb(err);
      })
    }

  },

  createProfile: (body, cb) => {
    console.log('createprofileAWbody:', body)
    Profile.findOneAndUpdate({uid: body.uid}, body, {upsert: true, new: true})
      .then(result => {
        console.log('AWcreateprofileresultCL', result)
        cb(null, result)
      })
      .catch(err => cb(err));
  },
}