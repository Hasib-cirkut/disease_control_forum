var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    bio: String,
    work: String,
    profession: String,
    joined: { type: Date, default: Date.now},
    location: String,
    type: String
});

module.exports = mongoose.model('users', userSchema);