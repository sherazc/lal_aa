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
        let connection = this.connect();
        connection.query(sql,(err,data)=>{
            if(err){
                callback(null,err);
            }
            else{
                callback(data);
            }
        });
        this.endConnection(connection);
    }
}