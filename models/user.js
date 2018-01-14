var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    trainings: [{type: Schema.Types.ObjectId, ref: 'Training'}]
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);