const db = require('../../db/db.js');

module.exports = {
  postProfiles: (body, cb) => {
    // console.log('here in models!');
    // db.Swipe.updateOne({_id: body.id}, )
  },
  getOtherProfiles: (query, cb) => {
    db.Profile.find({_id: "623b6f5bd26a96dbf1b88c40"})
    .then((res) => {
      // console.log(res);
      let swipedList = res[0].swiped;
      swipedList.push("623b6f5bd26a96dbf1b88c40");
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