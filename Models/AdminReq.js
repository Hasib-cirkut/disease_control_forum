var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminReqSchema = new Schema({
	username: String
});

module.exports = mongoose.model('adminRequests', adminReqSchema);
