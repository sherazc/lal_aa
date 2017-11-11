var express = require('express');
var router = express.Router();
var request = require('request');
import viewCom from './Model/viewAttributesComposer';
/* GET home page. */
router.get('/add',function (req,res){  
  res.status(200).render('add-employee', { title: 'Add Employee' });
});
router.get('/', function(req, res) {
 // res.render('index', { title: 'Express' });
    request.get({ url:"http://localhost:9000" },(req,res1,callback)=>{
      //console.log(Employees);
      let Employees = JSON.parse(callback);
      res.status(200).render('empList',viewCom('All Employee',{ Employees }));
    });
});
router.post('/add',(req,res)=>{
  const options = {  
    url: 'http://localhost:9000/',
    method: 'POST',
    json: req.body,
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'my-reddit-client'
    }
};       
      request.post(options,(req,resp,callback)=>{
        res.redirect("/");
      });
});

router.get('/delete/:id', function(req, res) {
  
  res.redirect('/');
 });
module.exports = router;
