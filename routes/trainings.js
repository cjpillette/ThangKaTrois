var express = require('express');
var router = express.Router();

var Training = require("../models/Training")

router.get('/', function(req, res, next) {
  Training.find()

    .exec(function(err, docs){
      if (err) {
        return res.status(500).json({
          title: 'an error occured',
          error: err
        });
      }
      res.status(200).json({
        message: "Success",
        obj: docs
      })
    });
})

router.post('/', function (req, res, next) {
  var training = new Training({
    level: req.body.level,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    maxNumberOfParticipants: req.body.maxNumberOfParticipants
  });
  training.save(function(err, result){
    if (err) {
      // sending the error to the front end
      return res.status(500).json({
        title: 'an error occured',
        error: err
      });
    }
    // allows to get trainingID from the db
    // obj contains the result of the db operation
    res.status(201).json({
      message: 'Saved training',
      obj: result
    })
  });
});

module.exports = router;
