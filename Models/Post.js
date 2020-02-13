var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    title:  String, 
    author: String,
    body:   String,
    likes: Number,
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('posts', postSchema);