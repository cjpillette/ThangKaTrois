var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  streetAddress: {type: String, required: true},
  cityZip: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  mobilePhone: {type: String, required: true},
  training: {type: Schema.Types.ObjectID, ref: 'Training'}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Student', schema);
