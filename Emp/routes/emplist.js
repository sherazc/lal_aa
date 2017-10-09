var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Employee List' });
    res.render('index',{Flag:false});
    //res.send('respond with a resource Employee list');
});

module.exports = router;
