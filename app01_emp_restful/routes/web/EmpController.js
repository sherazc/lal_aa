import express from 'express';
var request = require('request');
import viewAttributesComposer from "./utils/viewAttributesComposer";
export default class EmpController{
    addEmp(req,res){
        console.log('add emp');
        res.render('add-employee', { title: 'Add Employee' });
    }
    addEmployeeConfirm(req,res1){
        console.log('add emp confirm');
        const options = {  
            url: 'http://localhost:9000/employees',
            method: 'POST',
            json: req.body,
            headers: {
                'Accept': 'application/json',
                'Accept-Charset': 'utf-8',
                'User-Agent': 'my-reddit-client'
            }
        };        
        request(options, function(req,res, reqBody) { 
            console.log("back");             
            request.get({ url: "http://localhost:9000/employees" }, function(req,response, body) { 
                console.log("request");             
                var employees = JSON.parse(body);                        
                res1.render('list-employees',viewAttributesComposer('All Employees', {employees}));              
               });           
           }); 
    }
    updateEmployeeConfirm(req,res1){
        console.log('update emp confirm');        
        const options = {  
            url: 'http://localhost:9000/employees',
            method: 'PUT',
            json: req.body,
            headers: {
                'Accept': 'application/json',
                'Accept-Charset': 'utf-8',
                'User-Agent': 'my-reddit-client'
            }
        };        
        request(options, function(req,res, reqBody) { 
            console.log("back");             
            request.get({ url: "http://localhost:9000/employees" }, function(req,response, body) { 
                console.log("request");             
                var employees = JSON.parse(body);                        
                res1.render('list-employees',viewAttributesComposer('All Employees', {employees}));              
               });           
           }); 
    }
    deleteEmp(req1,res1){
        console.log('delete emp confirm');
        console.log(req1.params.id);
        const options = {  
            url: 'http://localhost:9000/employees',
            method: 'DELETE',
            json: req1,
            headers: {
                'Accept': 'application/json',
                'Accept-Charset': 'utf-8',
                'User-Agent': 'my-reddit-client'
            }
        };        
        request(options, function(req,res, reqBody) { 
            console.log("back");     
                  
            request.get({ url: "http://localhost:9000/employees" }, function(reque,respo, body) { 
                console.log("request");             
                var employees = JSON.parse(body);   
                console.log(body);                     
                res1.render('list-employees',viewAttributesComposer('All Employees', {employees}));              
               });           
           }); 
    }
}
