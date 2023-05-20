const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// Schema for reaction subdocument
const reactionSchema = new Schema(
  {
    // unique identifier for a reaction
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    // the reaction's text
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    // the username who gave the reaction
    username: {
      type: String,
      required: true,
    },
    // timestamp of the reaction
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal), // formatted timestamp
    },
  },
  {
    toJSON: {
      getters: true, // allows virtuals to be included in JSON response
    },
  }
);

// Schema for Thought model
const thoughtSchema = new Schema(
  {
    // the thought's text
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
    },
    // timestamp of the thought
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal), // formatted timestamp
    },
    // the username who wrote the thought
    username: {
      type: String,
      required: true,
    },
    // list of reactions to the thought
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true, // allows virtuals to be included in JSON response
      getters: true, // use custom getters
    },
    id: false, // prevents default _id from showing up
  }
);

// Virtual field to count reactions
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

// Creating Thought model
const Thought = model('Thought', thoughtSchema);

// Exporting Thought model
module.exports = Thought;
