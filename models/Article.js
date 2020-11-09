const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Article
const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  route: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  author: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Article = mongoose.model('articles', ArticleSchema);
