const mongoose = require('mongoose');
const assert = require('assert');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, (err) => {
  assert.equal(err, null);
  console.log('Successfully Connected to the Local Database.');
});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB Connection Error:'));
mongoose.set('debug', false);

module.exports = mongoose.connection;
