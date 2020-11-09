const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create letter
const LetterSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Letter = mongoose.model('letters', LetterSchema);
