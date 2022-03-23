const mongoose = require('mongoose');

// const authenticationSchema = new mongoose.Schema({
//   username: String,
//   password: String,
//   email: String
// })

const swipeSchema = new mongoose.Schema({
  like: Boolean,
  user1: String,
  user2: String
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
  swiped: [],
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




// const Auth = mongoose.model('Auth', authenticationSchema);
const Profile = mongoose.model('Profile', profileSchema, 'profile');
const Swipe = mongoose.model('Swipe', swipeSchema, 'swipe');
const Chat = mongoose.model('Chat', chatSchema, 'chat');


module.exports = { Profile, Chat, Swipe };