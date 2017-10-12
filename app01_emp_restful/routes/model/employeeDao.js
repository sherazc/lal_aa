import baseDao from './baseDao';
import httpMssgs from './httpMssgs';

let msg = new httpMssgs();
import util from 'util';
export default class employeeDao extends baseDao{
 getEmpList(req,res){
    super.execSql("select * from employee",function(data,err){
        if(err){
                msg.show500(req,res,err);
        }
        else{
            msg.show200(req,res,data);
        }
       // res.end();
    });
 }   
 getEmpByID(req,res,empid){
    super.execSql("select * from employee where id="+empid,function(data,err){
        if(err){
                msg.show500(req,res,err);
        }
        else{
            msg.show200(req,res,data);
        }
        //res.end();
    });
 }
 AddEmp(req,res,reqBody){
    try{
            if(!reqBody){
                    throw new error("Input invalid");
            }
            var data = JSON.parse(reqBody);
            if(data){
                let sql = "insert into employee(name,salary) values";
                sql+=util.format("('%s', %d)",data.name,data.salary);
                console.log(sql);
                super.execSql(sql,function(data,err){
                    if(err){
                            msg.show500(req,res,err);
                    }
                    else{
                        msg.show200(req,res,data);
                    }
                    //res.end();
                });

            }
            else{
                msg.show500(req,res,ex);
            }
    }
    catch(ex){
        msg.show500(req,res,ex);
    }
 }
 updateEmp(req,res,reqBody){
    if(!reqBody){
        throw new error("invalid input");
    }
    let data = JSON.parse(reqBody);
    if(data){
    if(!data.id){ throw new error("empid not provided")};
    var sql = "UPDATE employee set ";
    sql+="name='"+data.name+"', salary="+data.salary+" where id="+ data.id;
    super.execSql(sql,function(data,err){
        if(err){
                msg.show500(req,res,err);
        }
        else{
            msg.show200(req,res,data);
        }
     });
    }
 }
  deleteEmp(req,res,reqBody){
    if(!reqBody){
        throw new error("invalid input");
    }
    let data = JSON.parse(reqBody);
    if(data){
    if(!data.id){ throw new error("empid not provided")};
    var sql = "delete from employee  ";
    sql+= "where id="+ data.id;
    super.execSql(sql,function(data,err){
        if(err){
                msg.show500(req,res,err);
        }
        else{
            msg.show200(req,res,data);
        }
     });
    }        
 }
}