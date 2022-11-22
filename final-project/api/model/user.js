let mongoose = require('mongoose');
let Schema = mongoose.Schema;

mongoose.connect(
  "mongodb://localhost:27017/users"
);

let userSchema = new Schema({
  name: String,
  age: Number
});

let User = mongoose.model('User', userSchema);

module.exports = User;