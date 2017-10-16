var express = require('express');
var router = express.Router();
var request = require('request');
var bodyParser = require('body-parser');
import empcontroller from './web/EmpController'
var emp = new empcontroller();
var app = express(); 
import viewAttributesComposer from "./web/utils/viewAttributesComposer";
//http://localhost:3000/_getproduct/8821264 
router.get('/add',emp.addEmp);
router.get('/employees', function(req, res) { 
  console.log("router get");
          
      request.get({ url: "http://localhost:9000/employees" }, function(req,response, body) { 
              console.log("request");             
              var employees = JSON.parse(body);                        
              res.status(200).render('list-employees',viewAttributesComposer('All Employees', {employees}));
            
             }); 
     }); 
     router.get('/update/:id', function(req, res) { 
                 
          request.get({ url: "http://localhost:9000/employees/"+req.params.id}, function(req,response, body) { 
                  console.log(body);             
                  var employees = JSON.parse(body);                        
                  res.status(200).render('update-employee',viewAttributesComposer('Update Employees', {employees}));
                
                 }); 
         }); 
         router.post('/add-confirm',emp.addEmployeeConfirm);
         router.post('/update',emp.updateEmployeeConfirm);
         router.get('/delete/:id',emp.deleteEmp);
     module.exports = router;