var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    username: String,
    email: String,
    age: String,
    profession: String,
    password: String
});

module.exports = mongoose.model('users', userSchema);