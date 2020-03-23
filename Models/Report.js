var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reportSchema = new Schema({
    post_id: String,
    title:String,
    description: String,
});

module.exports = mongoose.model('reports', reportSchema);