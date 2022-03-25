const db = require('../../db/db.js');

module.exports = {
  postProfiles: (body, cb) => {
    // console.log('here in models!');
    // db.Swipe.updateOne({_id: body.id}, )
  },
  getOtherProfiles: (query, cb) => {
    db.Profile.find({_id: query.id})
    .then((res) => {
      console.log(res, query);
      let preference = res[0].prefrences;
      let swipedList = res[0].swiped;
      swipedList.push(query.id);
      console.log('preference', preference.offLeash);
      // db.Profile.find({ _id: {$nin: swipedList}, 'prefrences.offLeash': preference.offLeash, 'prefrences.age': preference.age, 'prefrences.energy': preference.energy, 'prefrences.size': preference.size })

      //use this
      db.Profile.find({ _id: {$nin: swipedList}, 'size': preference.size, 'age': preference.age })
      // db.Profile.find({ _id: {$nin: swipedList}})
      .then((result) => {
        console.log('after query', result);
        cb(null, result);
      })
      .catch((err) => {
        console.log('err in profiles model:', err);
        cb(err);
      })
    })

  }
}