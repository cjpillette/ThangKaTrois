var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index');
});

router.post('/stage', function (req, res, next){
  var stage = req.body.stage;
  res.redirect('/');
})

module.exports = router;
