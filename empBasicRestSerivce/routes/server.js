import express from 'express';
var router = express.Router();
let app = express();
import emp from './Model/emp';
let objEmp = new emp();

router.get('/',(req,res)=>{
   objEmp.getAllEmp(req,res);
});
router.get('/:id',(req,res)=>{
    objEmp.getEmpById(req,res);    
});
router.post('/',(req,res)=>{
    objEmp.AddEmp(req,res); 
    res.end();   
});
router.put('/',(req,res)=>{
    objEmp.UpdateEmp(req,res);
    res.end();
});
router.delete('/:id',(req,res)=>{
    console.log('server delete');
    objEmp.DeleteEmp(req,res);
    res.end();
});
app.use(router);
app.listen(9000,()=>{
    console.log('server starts at port 9000');
});
module.exports=app;