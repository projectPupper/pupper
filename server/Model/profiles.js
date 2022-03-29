const db = require('../../db/db.js');

module.exports = {
  getOtherProfiles: (query, cb) => {
    db.Profile.find({_id: query.id})
    .then((res) => {
      let preference = res[0].prefrences;
      let swipedList = res[0].swiped;
      swipedList.push(query.id);
      // db.Profile.find({ _id: {$nin: swipedList}, 'prefrences.offLeash': preference.offLeash, 'prefrences.age': preference.age, 'prefrences.energy': preference.energy, 'prefrences.size': preference.size })
      //use this
      if (query.prefer === 'true') {
        db.Profile.find({ _id: {$nin: swipedList}, 'size': preference.size, 'age': preference.age })
        .then((result) => {
          cb(null, result);
        })
        .catch((err) => {
          cb(err);
        })
      } else {
        db.Profile.find({ _id: {$nin: swipedList}})
        .then((result) => {
          cb(null, result);
        })
        .catch((err) => {
          cb(err);
        })
      }
    })


  }
}