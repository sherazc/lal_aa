var express = require("express");
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
   
   let mysql = require("mysql");
    let conString = {
        host: "localhost",    
        user:"arif",
        password:"abc123",
        port:3306,
        database:"shop"
    };

    let con= mysql.createConnection(conString);
    con.connect((error)=>{
        if(error){
           // res.json({"Error" :true, "Message":"Error while opening connection"});
            //res.write(error.fatal);
        }
        else{
            // res.write('Successful');
            //res.json({"Error": "true", "Message": "Successfully connected"});
        }
    });
    //res.json({"test": "test", "Message": "Successfully connected"});
    let queryObject ={
        Name:"test",
        salary:100
    }
    let query = con.query("INSERT INTO emp set ?",queryObject,function(error,result){
        if(error) {
            res.json({"Error" : true, "Message" : "Error executing MySQL query"});
        } else {
            res.json({"Error" : false, "Message" : "User Added !"});
        }
    });

    con.end((error)=>{
        if(error){
            res.json({"connection disconnect Error":"true"});
        }
        else{
            res.json({"Connection close.":"close"});
        }
    });
    //res.send('respond with a resource employee');
});
module.exports = router;