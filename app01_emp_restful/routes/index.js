var express = require('express');
var router = express.Router();
import servers from './model/server';
import viewAttributesComposer from './web/utils/viewAttributesComposer';
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/employees', function(req, res, next) {
  res.render('list-emp', servers.create);
});
module.exports = router;
