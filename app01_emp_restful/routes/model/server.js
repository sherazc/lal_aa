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
            console.log("All emp get if");
            emp.getEmpList(req,res);
            
        }
        else{
            //console.log("get Else");
            var empPat = "[0-9]+";
            var pat= new RegExp("/employees/"+empPat);
            if(pat.test(req.url)){
                pat = new RegExp(empPat);
                let empid=pat.exec(req.url);
                //console.log("empid"+empid);
                emp.getEmpByID(req,res,empid);
            }
            else{
                msg.show404(req,res);
            }
        }
        break;
        case "POST":
        console.log("post add");
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
        //console.log(req);
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
        console.log('DDD');
        if(req.url==="/employees"){
            let reqBody="";
            req.on("data",function(data){
                reqBody+=data;
            });
            
            req.on("end",function(){
                emp.deleteEmp(req,res,reqBody);
            });
        }   
        break;
        default:
            msg.show405(req,res);
        break;
    }

}).listen(conf.webport,function(){
    console.log("server started listening at: " + conf.webport);
})