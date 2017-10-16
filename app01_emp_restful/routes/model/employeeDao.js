import baseDao from './baseDao';
import httpMssgs from './httpMssgs';

let msg = new httpMssgs();
import util from 'util';
export default class employeeDao extends baseDao{
 getEmpList(req,res){
    super.execSql("select * from employee",function(err,data){
        if(err){
            console.log("ERRor");   
            msg.show500(req,res,err);
            console.log(err);
        }
        else{
            console.log("success");
            msg.show200(req,res,data);
        }
       // res.end();
    });
 }   
 getEmpByID(req,res,empid){
    super.execSql("select * from employee where id="+empid,function(err,data){
        if(err){
                msg.show500(req,res,err);
        }
        else{
            console.log(data);
            msg.show200(req,res,data);
        }
        //res.end();
    });
 }
 AddEmp(req,res,reqBody){
    try{
        console.log("server post");
        //console.log(req);
            if(!reqBody){
                    throw new error("Input invalid");
            }
            var data = JSON.parse(reqBody);
            console.log(data);
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
    console.log("update emp....");
    if(!reqBody){
       console.log("invalid data");
    }
    console.log('data');
    let data = JSON.parse(reqBody);
    console.log(data);
    if(data){
    if(!data.eid){ console.log("empid not provided")};
    var sql = "UPDATE employee set ";
    sql+="name='"+data.name+"', salary="+data.salary+" where id="+ data.eid;
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
      console.log("delete empppp");
    if(!reqBody){
        //throw new error("invalid input");
        next(new Error('problem error'));
    }
    let data = JSON.parse(reqBody);
    if(data){console.log(data.params.id);
    if(!data.params.id){ throw new Error("empid not provided");}
    var sql = "delete from employee  ";
    sql+= "where id="+data.params.id;
    super.execSql(sql,function(data,err){
        if(err){
                msg.show500(req,res,err);
        }
        else{
            console.log("before 200");
            msg.show200(req,res,data);
            console.log("after 200");
        }
     });
    }        
 }
}