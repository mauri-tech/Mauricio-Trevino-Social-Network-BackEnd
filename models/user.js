const { Schema, model } = require('mongoose');

// Schema for User model
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email address",]
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought"
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
  ]
}, {
  toJSON: {
    virtuals: true, // allows virtuals to be included in JSON response
    getters: true, // use custom getters
  },
  id: false // prevents default _id from showing up
});

// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.
userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

// Creating User model
const User = model('User', userSchema);

// Exporting User model
module.exports = User;
