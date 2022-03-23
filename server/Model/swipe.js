const db = require('../../db/db.js');

module.exports = {
  postSwipe: (body, cb) => {
    // console.log(body);
    db.Profile.updateOne({_id: body.id}, { $push: { swiped: body.swipedId}})
     .then((updateRes) => {
    db.Swipe.create({user1: body.id, like: body.like, user2: body.swipedId})
      .then((res) => {
        // console.log('added swipe info!', res);
        if(body.like) {
          db.Swipe.find({user1: body.swipedId, user2: body.id, like: true})
            .then((result) => {
              if(result.length) {
                // console.log('found switched swipe!', result);
                db.Chat.create({time: new Date(), users: [body.id, body.swipedId]})
                  .then((insert) => {
                    // console.log('body id', body.id);
                    db.Profile.updateMany({_id: [body.swipedId, body.id] }, { $push: {chats: insert._id}})
                      .catch((err) => {
                        console.log('profile chats error', err);
                      })
                    // console.log('insert id', insert._id);
                    cb(null, insert);
                  })
              } else {
                cb(null);
              }
            })
        }
      })
      .catch((err) => {
        console.log('err', err);
        cb(err);
      })
    })
  },
  getSwipe: (req, res) => {
    console.log('here!');
  }
}