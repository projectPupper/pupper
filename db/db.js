const mongoose = require('mongoose');

const authenticationSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String
})

const swipeSchema = new mongoose.Schema({
  like: Boolean,
  user1: Number,
  user2: Number
})

const profileSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
  size: String,
  energy: String,
  offLeash: Boolean,
  ownerName: String,
  ownerNumber: String,
  location: String,
  aboutMe: String,
  photos: [],
  prefrences: {
    age: Number,
    breed: String,
    size: String,
    energy: String,
    offLeash: Boolean,
  },
  chats: [],
  username: String
});

const messageSchema = new mongoose.Schema({
  body: String,
  sender: String
},
{timestamps: true}
);

const chatSchema = new mongoose.Schema({
  time: Date,
  users: [],
  messages: [messageSchema]
});




const Auth = mongoose.model('Auth', authenticationSchema);
const Profile = mongoose.model('Profile', profileSchema);
const Swipe = mongoose.model('Swipe', swipeSchema);
const Chat = mongoose.model('Chat', chatSchema);


module.exports = { Profile, Chat, Swipe, Auth };