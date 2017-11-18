import viewAttributesComposer from "./utils/viewAttributesComposer";
import EmployeeDao from "../model/EmployeeDao"
let employeeDao = new EmployeeDao();
class EmployeeController {
    addEmployee (request, response) {
        employeeDao.addEmployee(request.body.name, request.body.salary, (name, salary)=>{
            employeeDao.findAll((employee)=>{
                response.render("list-employee", viewAttributesComposer("All Employee", {employee}))
            })
        });
        response.render('add-employee', viewAttributesComposer('Add Employee', {employee}));
    }
    addEmployeeConfirm (request, response) {
        response.render('add-employee-confirm', viewAttributesComposer('Add Employee Confirm', {}));
    }
    listEmployees (request, response) {
        employeeDao.findAll((employees) => {
            response.render('list-employees', viewAttributesComposer('All Employees', {employees}));
        });

    }
    deleteEmployee (request, response) {
        response.render('delete-employee', viewAttributesComposer('Employee Deleted', {}));
    }
 }
 export default EmployeeController;