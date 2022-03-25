const db = require('../../db/db.js');

const getChats = async (params, callback) => {
  try {
    db.Profile.find({ _id: params})
      .then((result) => {
        db.Chat.find({_id: result[0].chats})
        .then((results) => {
          callback(null, results);
        })
      })
  }
  catch (e) {
    console.log('get error', e);
  }
}

const postChats = async (params) => {

  try {
    db.Chat.updateOne(
       { _id : params.id },
       { $push : {messages: params.message}}
    )
    .catch((err) => {
      console.log('post error with model', err);
    })
  }
  catch (e){
    print(e);
  }
}

const getMessages = async (params, callback) => {
  db.Chat.find({_id: params})
  .then((results) => {
    callback(null, results);
  })
  .catch((err) => {
    console.log('error with getting chat', err);
  })
}

module.exports = {
  getChats,
  postChats,
  getMessages
}
