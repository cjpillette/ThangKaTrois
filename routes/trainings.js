var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var Training = require('../models/training');
var User = require('../models/user');

router.get('/', function (req, res, next) {
    Training.find()
        .exec(function (err, trainings) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: trainings
            });
        });
});

// on each request this router is reached except get request 
// which is handled before this second method
router.use('/', function(req, res, next){
    jwt.verify(req.query.token, 'secret', function(err, decoded) {
        if (err) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: err 
            })
        }
        // to let the request continue:
        next();
    });
});

router.post('/', function (req, res, next) {
    // need to fetch user in order to associate it to training
    var decoded = jwt.decode(req.query.token);
    User.findById(decoded.user._id, function(err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        var training = new Training({
            content: req.body.content,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            maxParticipants: req.body.maxParticipants,
            user: user._id
        });
        training.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            user.trainings.push(result);
            user.save();
            res.status(201).json({
                message: 'Saved message',
                obj: result
            });
        });
    })
});


router.patch('/:id', function (req, res, next) {
    Training.findById(req.params.id, function (err, training) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!training) {
            return res.status(500).json({
                title: 'No Training Found!',
                error: {message: 'Training not found'}
            });
        }
        training.content = req.body.content;
        training.startDate = req.body.startDate;
        training.endDate = req.body.endDate;
        training.maxParticipants = req.body.maxParticipants;
        training.save(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated training',
                obj: result
            });
        });
    });
});

router.delete('/:id', function(req, res, next) {
    Training.findById(req.params.id, function (err, training) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!training) {
            return res.status(500).json({
                title: 'No Training Found!',
                error: {message: 'Training not found'}
            });
        }
        training.remove(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted training',
                obj: result
            });
        });
    });
});

module.exports = router;