const mongoose = require('mongoose');


mongoose.set('strictQuery', false);


(async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connection to MongoDB succesful');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
})();


mongoose.connection.on('error', (error) => {
  console.error('MongoDB error:', error);
  process.exit(1);
});


module.exports = mongoose.connection;
