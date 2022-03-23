const db = require('../../db/db.js');

module.exports = {
  postProfiles: (body, cb) => {
    // console.log('here in models!');
    // db.Swipe.updateOne({_id: body.id}, )
  },
  getOtherProfiles: (query, cb) => {
    db.Profile.find({_id: query.id})
    .then((res) => {
      // console.log(res);
      let swipedList = res[0].swiped;
      swipedList.push(query.id);
      db.Profile.find({ _id: {$nin: swipedList} })
      // db.Profile.find({})
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