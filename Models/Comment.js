var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    author: String,
    body:   String,
    post_id: String,
    likes:  {type: Number, default: 0},
});

module.exports = mongoose.model('comments', commentSchema);