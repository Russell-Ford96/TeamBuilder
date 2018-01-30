var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    userName: {type: String, required: true},
    dob:{type:String},
    gender:{type:String},
    country:{type: String,required: true},
    subscription: {type: Schema.Types.ObjectId, ref: 'Subscription'}

});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);