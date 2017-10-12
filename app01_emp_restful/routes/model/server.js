import http from 'http';
import employeeDao from './employeeDao';
import conf from './settings';
import httMssgs from './httpMssgs';
let msg = new httMssgs();
http.createServer(function(req,res){
    let emp = new employeeDao();
    switch(req.method){
        case "GET":
        if(req.url==="/employees"){
            emp.getEmpList(req,res);
        }
        else{
            
            var empPat = "[0-9]+";
            var pat= new RegExp("/employees/"+empPat);
            if(pat.test(req.url)){
                pat = new RegExp(empPat);
                let empid=pat.exec(req.url);
                emp.getEmpByID(req,res,empid);
            }
            else{
                msg.show404(req,res);
            }
        }
        break;
        case "POST":
        if(req.url==="/employees"){
            let reqBody="";
            req.on("data",function(data){
                reqBody+=data;
            });
            req.on("end",function(){
                emp.AddEmp(req,res,reqBody);
            });
        }
        else{
            msg.show404(req,res);
        } 
        break;
        case "PUT":
        if(req.url==="/employees"){
            let reqBody="";
            req.on("data",function(data){
                reqBody+=data;
            });
            req.on("end",function(){
                emp.updateEmp(req,res,reqBody);
            });
        }
        else{
            msg.show404(req,res);
        } 
        break;
        case "DELETE":
        if(req.url==="/employees"){
            let reqBody="";
            req.on("data",function(data){
                reqBody+=data;
            });
            req.on("end",function(){
                emp.deleteEmp(req,res,reqBody);
            });
        }
        else{
            msg.show404(req,res);
        } 
        break;
        default:
            msg.show405(req,res);
        break;
    }

}).listen(conf.webport,function(){
    console.log("server started listening at: " + conf.webport);
})