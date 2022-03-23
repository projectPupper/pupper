const mongoose = require('mongoose');

const swipeSchema = new mongoose.Schema({
  like: Boolean,
  user1: Number,
  user2: Number
})

const profileSchema = new mongoose.Schema({
  name: String,
  imgUrl: String,
  age: {
    type: String,
    enum : ['Puppy','Adult', 'Senior'],
    default: 'Adult'
},
  gender: {
    type: String,
    enum : ['Female', 'Male'],
    default: 'Male'
},
  breed: String,
  size: {
    type: String,
    enum : ['Small', 'Medium', 'Large'],
    default: 'Medium'
},
  energy: {
    type: String,
    enum : ['Low', 'Medium', 'High'],
    default: 'Medium'
},
  offLeash: Boolean,
  ownerName: String,
  ownerNumber: String,
  location: String,
  aboutMe: String,
  imgUrl: String,
  prefrences: {
    age: {
      type: String,
      enum : ['Puppy','Adult', 'Senior'],
      default: 'Adult'
    },
    breed: [],
    size: {
      type: String,
      enum : ['Small','Medium', 'Large'],
      default: 'Medium'
  },
    energy: {
      type: String,
      enum : ['Low', 'Medium', 'High'],
      default: 'Medium'
  },
    offLeash: Boolean,
  },
  chats: [],
  username: String,
  uid: String
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




// const Auth = mongoose.model('Auth', authenticationSchema);
const Profile = mongoose.model('Profile', profileSchema);
const Swipe = mongoose.model('Swipe', swipeSchema);
const Chat = mongoose.model('Chat', chatSchema);


module.exports = { Profile, Chat, Swipe };