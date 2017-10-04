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
        console.log(error);
        console.log(error.fatal);
    }
    else{
        console.log("Successful");
    }
});

let queryObject ={
    Name:"Quazi",
    salary:100
}
let query = con.query("INSERT INTO emp set ?",queryObject,function(error,result){
    console.log("insret query", query.sql);
    console.log("insert id",result. insertId);
    console.log("Ending..");
});

con.end((error)=>{
    if(error){
        console.log("connection disconnect Error");
    }
    else{
        console.log("Connection close");
    }
});