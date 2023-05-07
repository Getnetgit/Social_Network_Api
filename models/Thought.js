const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const getCurrentDateFormatted = require('../utils/helper');
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    get: function (value) {
      const date = new Date(value);
      return getCurrentDateFormatted(date);
    }
  },
  username: {
    type: String,
    required: true
  },
  reactions: [reactionSchema]
}, { toJSON: { virtuals: true }, id: false });

thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);
const mewmdl=new Thought()
console.log(mewmdl.createdAt)
module.exports = Thought;