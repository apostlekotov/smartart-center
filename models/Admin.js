const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Admin
const AdminSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = Admin = mongoose.model('admins', AdminSchema);
