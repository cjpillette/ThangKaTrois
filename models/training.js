var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    content: {type: String, required: true},
    startDate: {type: String, required: true},
    endDate: {type: String, required: true},
    maxParticipants: {type: Number, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Training', schema);