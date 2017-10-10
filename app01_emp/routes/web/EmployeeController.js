import viewAttributesComposer from "./utils/viewAttributesComposer";
import EmployeeDao from "../model/EmployeeDao";
let employeeDao = new EmployeeDao();

class EmployeeController {
       addEmployee (request, response) {
           response.render('add-employee', { title: 'Add Employee' });
       }
    
       addEmployeeConfirm (request, response) {
        employeeDao.addEmployee(request.body.name, request.body.salary, (name, salary) => {
                 employeeDao.findAll((employees) => {
                           response.render('list-employees', viewAttributesComposer('All Employees', {employees}));
                 });
             //response.render('add-employee-confirm', viewAttributesComposer('Add Employee Confirm', {name, salary}));
            });
          //response.render('add-employee-confirm', { title: 'Add Employee Confirm' });
       }
    
       listEmployees (request, response) {
            employeeDao.findAll((employees) => {
            response.render('list-employees', viewAttributesComposer('All Employees', {employees}));
            }); 
         //response.render('list-employees', { title: 'All Employees' });
       }
    
       deleteEmployee (request, response) {
        //        employeeDao.deleteById(request.params.id, employeeId => response.render('delete-employee', 
        //            viewAttributesComposer('Employee Deleted', {"deletedEmployeeId": employeeId})
        //          )        
        //         );
                employeeDao.deleteById(request.params.id, employeeId => {
                    employeeDao.findAll((employees) => {
                              response.render('list-employees', viewAttributesComposer('All Employees', {employees}));
                    });
                //response.render('add-employee-confirm', viewAttributesComposer('Add Employee Confirm', {name, salary}));
               });
       }
      updateEmployee (request, response) {
        let employeeId =  request.params.id;
        employeeDao.findEmpByID(employeeId,employees => {                 
                response.render('update-employee', viewAttributesComposer('selected Employee', {employees}));
            });
           }
        updateEmployeeConfirm (request, response) {
          employeeDao.updateEmployee(request.body.eid,request.body.name, request.body.salary,employees => {
                     employeeDao.findAll((employees) => {
                               response.render('list-employees', viewAttributesComposer('All Employees', {employees}));
                     });                
                });
           }
    }
    
    export default EmployeeController;