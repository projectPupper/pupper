const db = require('../../db/db.js');
//CHATS
const getChats = async (params, callback) => {
  try {
    db.Profile.find({ _id: params})
      .then((result) => {
        console.log('model result', result);
        db.Chat.find({_id: result.chats})
        .then((results) => {
          callback(null, results);
        })
      })
  }
  catch (e) {
    console.log('error', e);
  }
}

const postChats = async (params) => {
  try {
    db.Chat.updateOne(
       { _id : params.id },
       { $push : {messages: params.message}}
    )
    .catch((err) => {
      console.log('error with model', err);
    })
  }
  catch (e){
    print(e);
  }
}

module.exports = {
  getChats,
  postChats
}
// sort: { "points" : 1 },