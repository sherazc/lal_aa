    import messageFormat from './settings';
    import viewAttributesComposer from '../web/utils/viewAttributesComposer';
    export default class httpMssgs{
        show500(req,res,err){
            if(messageFormat.httpMssgs ==="HTML"){
                res.writeHead(500,"internal error occured",{"Content-Type":"text/html"});
                res.write("<html><head><title>500</title></head><body>500: internal error :" +err +"</body></html>");
            }
            else{
                res.writeHead(500,"internal error occured",{"Content-Type":"application/json"});
                res.write(JSON.stringify({data:"error occured:"+ err}));
            }
            res.end();
        }
        show200(req,res,data){
                res.writeHead(200,{"Content-Type":"application/JSON "});
                if(data){
                res.write(JSON.stringify(data));
                res.send("/view-list",viewAttributesComposer("test",{data}));              
                }
             
            res.end();
        }
        show405(req,res){
            if(messageFormat.httpMssgs ==="HTML"){
                res.writeHead(405,"method not supported",{"Content-Type":"text/html"});
                res.write("<html><head><title>405</title></head><body>405: methode doesnot supported</body></html>");
            }
            else{
                res.writeHead(405,"internal error occured",{"Content-Type":"application/json"});
                res.write(JSON.stringify({data:"method does not supported"}));
            }
            res.end();
        }
        show404(req,res){
            if(messageFormat.httpMssgs ==="HTML"){
                res.writeHead(404,"resource not supported",{"Content-Type":"text/html"});
                res.write("<html><head><title>404</title></head><body>404: resource doesnot supported</body></html>");
            }
            else{
                res.writeHead(404,"internal error occured",{"Content-Type":"application/json"});
                res.write(JSON.stringify({data:"resource does not supported"}));
            }
            res.end();
        }
        show413(req,res){
            if(messageFormat.httpMssgs ==="HTML"){
                res.writeHead(413,"request entity too large",{"Content-Type":"text/html"});
                res.write("<html><head><title>413</title></head><body>413: request entity too large</body></html>");
            }
            else{
                res.writeHead(413,"request entity too large",{"Content-Type":"application/json"});
                res.write(JSON.stringify({data:"request entity too large"}));
            }
            res.end();
        }
    }
    