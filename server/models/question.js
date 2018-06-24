const mongoose = require('mongoose');
const random = require('mongoose-simple-random');

const { Schema } = mongoose;

/** Answer Schema:
 * Contains all information about an answer */
const answerSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  answer: {
    type: String,
    required: true,
  },
});

/** Question Schema.
 * Contains all information about a question and its answers */
const questionSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answers: {
    type: [answerSchema],
    default: [],
  },
});

questionSchema.plugin(random);

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;