const db = require('../../db/db.js');

const getChats = async (params, callback) => {
  try {
    db.Profile.find({ _id: params})
      .then((result) => {
        console.log('get model result', result);
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
  console.log('new params', params);

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

const findMatch = async (params) => {
  try {
    db.Profile.find({_id: params})
  }
  catch (e){
    print(e);
  }
}

module.exports = {
  getChats,
  postChats
}
