const model = require('../model/chats.js');

//CHATS
const getChats = async (req, res) => {
  let params = req.body.id;
  console.log('controller id', params);

  const results = await model.getChats(params, (err, results) => {
    if (err) {
      res.status(404).send();
    } else {
      res.send(results);
    }
  });
}

const postChats = async (req, res) => {
  let params = req.body;
  console.log('controller', params);

  const results = await model.postChats(params);
  res.status(201).send();
}

module.exports = {
  getChats,
  postChats
}
//   model.getChats(params, (err, results) => {
//   //   if (err) {
//   //     res.status(404).send();
//   //   } else {
//   //     res.send(results);
//   //   }
//   // })
//   const results = await model.getChats(params);
// }