var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var UsersModel = new Schema({
    name : {type : String,unique : true},
    createdDate : {type : Date, default : Date.now}
})
module.exports = mongoose.model('User',UsersModel)