const mongoose = require('mongoose');

// Establishing MongoDB connection with Mongoose
mongoose.connect('mongodb://localhost:27017/userThoughtDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Exporting the connection to be used elsewhere in the app
module.exports = mongoose.connection;
