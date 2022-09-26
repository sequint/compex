const { model, Schema } = require('mongoose');

const User = new Schema({
  firstName: String,
  lastName: String,
  username: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
    unique: true
  },
  userType: String,
  inventory: [{
    type: Schema.Types.ObjectId,
    ref: 'InevtoryItem'
  }]
});

User.plugin(require('passport-local-mongoose'));

module.exports = module('User', User);
