import mysql from 'mysql';
import http from 'http';
import setting from './config';
export default class emp
{
   
    getAllEmp(req,res){
        var con = mysql.createConnection(setting.connectionString);
        con.connect();
        con.query("select * from employee",(err,data)=>{
            if(err){
                res.send(err);
            }    
            //console.log(JSON.stringify(data));
            res.send(data);     
        })
        con.end();
        
    }
    getEmpById(req,res){
       var con = mysql.createConnection(setting.connectionString);
        try{
            con.connect();
            let id =  req.params.id;
            console.log(id);
            con.query("Select * from employee where id="+id,(err,data)=>{
                    if(err){
                        res.send(err);
                    }
                    res.send(data);
            });
       }
       catch(err){
            console.log(err);
       }
       finally{
                con.end();
                console.log('connection closed!');
       }
    }  
    AddEmp(req,res,callback){
        console.log('add emp');
        let con = mysql.createConnection(setting.connectionString);
        try{
            
            console.log('before req body');
            let reqBody="";
            req.on("data",(data)=>{
                reqBody+=data;
            });
            req.on("end",()=>{
                          
            //console.log(reqBody);
            let data = JSON.parse(reqBody);
            console.log(data);
            let empdetails={
                "name":reqBody.name,
                "salary": reqBody.salary
            }            
            console.log(data.name);
            //con.connect();
            con.query('insert into employee set ?',data,(err,da)=>{
                if(err){
                    console.log('errror');
                    console.log(err);
                    res.send(err);
                    
                   
                }
                console.log('before res send');
                //res.send(data);
             
            });
        });
        }
        catch(err){
            console.log(err);
        }
        finally{
                   // con.end();
        }
    }
    UpdateEmp(req,res,callback){
        let reqBody="";
        req.on("data",(data)=>{
            reqBody+=data;    
        });
        req.on("end",()=>{
             let param = JSON.parse(reqBody);
             let con = mysql.createConnection(setting.connectionString);
             con.query('update employee set name=?,salary=? where id=?',[param.name,param.salary,param.id],(err,data)=>{
                if(err){
                    console.log(err);
                }                
            });
        });
    }
    DeleteEmp(req,res,callback){
        console.log('delete from method ' + req.params.id);
        let id= req.params.id;
       // param= JSON.parse(id);
        console.log(id);
        let con = mysql.createConnection(setting.connectionString);
        con.query("delete from employee where id=?",[id],(err,data)=>{
            if(err){
                console.log(err);
            }
            
        });    
    }
}