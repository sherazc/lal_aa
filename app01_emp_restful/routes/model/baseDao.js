import mysql from 'mysql';
import settings from './settings';

export default class baseDao{
    connect() {
        let connection = mysql.createConnection(settings.connectionString);
       
        connection.connect((error) => {
           if (error) {
               console.log("Error connecting.", error);
           } else {
               console.log("Connected to DB");
           }
        });
        return connection
    }
    endConnection(connection) {
        connection.end((error) => {
            if (error) {
                console.log("Error disconnecting.", error);
            } else {
                console.log("Disconnected DB");
            }
         });         
    }
    execSql(sql,callback){
        console.log(sql);
        let connection = this.connect();
        connection.query(sql,(err,data)=>{
            if(err){
                console.log(err);
                callback(err,null);
            }
            else{
                console.log("else");
                callback(null,data);
            }
        });
        console.log("before close");
        this.endConnection(connection);
        console.log("after close");
    }
}