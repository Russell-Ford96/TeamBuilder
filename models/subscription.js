var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    subscription_type: {type: String, required: true},
    music_type: [{type:String, required:true}],
    price:{type:String},
    user: {type: Schema.Types.ObjectId, ref: 'User'}

});


module.exports = mongoose.model('Subscription', schema);