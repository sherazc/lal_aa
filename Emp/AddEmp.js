let mysql = require("mysql");
let conString = {
    host: "localhost",    
    user:"sa",
    password:"abc123",
    port:8889,
    database:"emp"
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

con.end((error)=>{
    if(error){
        console.log("connection disconnect Error");
    }
    else{
        console.log("Connection close");
    }
});