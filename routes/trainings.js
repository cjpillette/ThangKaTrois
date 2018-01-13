var express = require('express');
var router = express.Router();

var Training = require('../models/training');

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

router.post('/', function (req, res, next) {
    var training = new Training({
        content: req.body.content,
        startDate: req.body.startDate
    });
    training.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved message',
            obj: result
        });
    });
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