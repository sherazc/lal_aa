var express = require('express');
var router = express.Router();
import app from 'express';
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
