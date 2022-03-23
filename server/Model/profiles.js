const db = require('../../db/db.js');

module.exports = {
  postProfiles: (body, cb) => {
    console.log('here in models!');
    // db.Swipe.updateOne({_id: body.id}, )
  },
  getOtherProfiles: (query, cb) => {
    db.Profile.find({_id: query._id})
    .then((res) => {
      // console.log(res[0].swiped);
      let swipedList = '623b70e8d26a96dbf1b88de0'
      swipedList.push(query._id);
      // db.Profile.find({ _id: {$nin: swipedList} })
      db.Profile.find({})
      .then((result) => {
        cb(null, result);
      })
      .catch((err) => {
        console.log(err);
        cb(err);
      })
    })

  }
}