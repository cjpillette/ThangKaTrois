var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./user');

var schema = new Schema({
    content: {type: String, required: true},
    startDate: {type: String, required: true},
    endDate: {type: String, required: true},
    maxParticipants: {type: Number, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

// mongoose middleware - do the below after an action happens
// first argument the action you want to listen
schema.post('remove', function(training) {
    User.findById(training.user, function (err, user) {
        user.trainings.pull(training._id);
        user.save();
    });
});

module.exports = mongoose.model('Training', schema);