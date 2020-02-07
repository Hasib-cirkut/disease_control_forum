var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    firstname: String,
    lastname: String,
    username: String,
    age: String,
    profession: String
});

module.exports = mongoose.model('users', postSchema);