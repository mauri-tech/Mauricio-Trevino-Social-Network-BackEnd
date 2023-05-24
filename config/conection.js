const mongoose = require('mongoose');

// Establishing MongoDB connection with Mongoose
mongoose.connect('mongodb://localhost:27017/userThoughtDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Handling connection events
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Exporting the connection to be used elsewhere in the app
module.exports = db;
