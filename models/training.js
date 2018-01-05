var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  type: {type: String, required: true},
  startDate: {type: Date, required: true},
  endDate: {type: Date, required: true},
  students: [{type: Schema.Types.ObjectID, ref: 'Student'}]
});

module.exports = mongoose.model('Training', schema);
