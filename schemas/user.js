const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const userMethods = require('../../methods/userMethods');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, 'Username is required'],
    minLength: [5, 'too little username'],
    unique: true,
  },
  permission: { type: String },
  text: { type: String },
});

userSchema.plugin(uniqueValidator);
userSchema.methods = userMethods();

const User = mongoose.models.User || mongoose.model('User', userSchema);
module.exports = User;
