const db = require('../../db/db.js');

module.exports = {
  postProfiles: (body, cb) => {
    // console.log('here in models!');
    // db.Swipe.updateOne({_id: body.id}, )
  },
  getOtherProfiles: (query, cb) => {
    db.Profile.find({_id: query.id})
    .then((res) => {
<<<<<<< HEAD
      // console.log(res[0].swiped);
      let swipedList = '623b70e8d26a96dbf1b88de0'
      swipedList.push(query._id);
      // db.Profile.find({ _id: {$nin: swipedList} })
      db.Profile.find({})
=======
      // console.log(res);
      let swipedList = res[0].swiped;
      swipedList.push(query.id);
      db.Profile.find({ _id: {$nin: swipedList} })
      // db.Profile.find({})
>>>>>>> 07c84b81d76d15071381f9bdb9020c35bb1815f5
      .then((result) => {
        cb(null, result);
      })
      .catch((err) => {
        console.log('err in profiles model:', err);
        cb(err);
      })
    })

  }
}