var express = require("express");
var router = express.Router();
var bodyparser= require("body-parser");
var http = require('http');
// var app = express();
// app.use(bodyparser());
/* GET users listing. */
router.post('/', function(req, res, next) {
    var strconcat="";
let mysql = require("mysql");
let conString = {
    host: "localhost",    
    user:"arif",
    password:"abc123",
    port:3306,
    database:"shop"
};

let con= mysql.createConnection(conString);
con.connect();
//res.json({"test": "test", "Message": "Successfully connected"});
let queryObject ={
    Name: req.body.empname,
    salary:req.body.salary
}
let query = con.query("INSERT INTO emp set ?",queryObject,function(error,result){
    console.log("Insert query ",query.sql);
    console.log(result.insertId);
    if(error) {
       console.log(error);
    } else {
        console.log("User Added !");
        strconcat = strconcat.concat(`${queryObject.Name} added successfully!<br />`);
    }
});

let querySel = con.query("select * from emp order by id",function(error,result){
    console.log("select query ",querySel.sql);
    strconcat=strconcat.concat('<table border="1">');
    var tempcon="";
    result.forEach(record=>{
        tempcon = `<tr>
        <td>${record.id}</td>
        <td>${record.Name}</td>
        <td>${record.salary}</td>
        </tr>`;
        strconcat =strconcat.concat(tempcon);
        console.log(`emp name ${record.Name} : salary ${record.salary}`);
    });
    strconcat =strconcat.concat("</table>");
    console.log(strconcat);
    req.body.emplist = strconcat;
    res.send(strconcat);
});
con.end();

});


  
module.exports = router;