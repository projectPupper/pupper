const model = require('../model/chats.js');

const getChats = async (req, res) => {
  let params = req.query.id;
  console.log('get controller id', params);

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
  console.log('post controller', params);

  const results = await model.postChats(params);
  res.status(201).send();
}

const getMatch = async (req, res) => {
  let params = req.body.id;

}

module.exports = {
  getChats,
  postChats,
  getMatch
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