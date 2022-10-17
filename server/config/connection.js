const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://cluster0.hbpincv.mongodb.net/myFirstDatabase', {
  // mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mern-shopping", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
