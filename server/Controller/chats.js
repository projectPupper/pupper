const model = require('../Model/chats.js');

const getChats = async (req, res) => {
  let params = req.query.id;

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

  const results = await model.postChats(params);
  res.status(201).send();
}

const getMessages = async (req, res) => {
  let params = req.query.id;

  const results = await model.getMessages(params, (err, results) => {
    if (err) {
      res.status(404).send();
    } else {
      console.log('message controller results', results);
      res.send(results);
    }
  });
}

module.exports = {
  getChats,
  postChats,
  getMessages
}