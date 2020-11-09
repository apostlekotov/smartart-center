const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const admin = require('./routes/api/admin');
const auth = require('./routes/api/auth');
const articles = require('./routes/api/articles');
const mailbox = require('./routes/api/mailbox');

const app = express();

// Connect DB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/admin', admin);
app.use('/api/auth', auth);
app.use('/api/articles', articles);
app.use('/api/mailbox', mailbox);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
