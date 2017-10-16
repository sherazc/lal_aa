import BaseDao from "./BaseDao";

export default class EmployeeDao extends BaseDao {
    findAll(employeeProcessor) {
        let connection = super.connect();
        connection.query('select id, name, salary from employee', (error, employees) => {
            console.log(employees);
            employeeProcessor(employees);
            super.endConnection(connection);
         });
    }
    findEmpByID(employeeId,updateemployeeProcessor) {
        let connection = super.connect();
     
        connection.query('select id, name, salary from employee where id=?',employeeId, (error, employees) => {
            updateemployeeProcessor(employees);
            super.endConnection(connection);
         });
    }
    deleteById(employeeId, deleteEmployeeProcessor) {
       
        let connection = super.connect();
        connection.query('delete from employee where id=?', employeeId, (error, result) => {
            deleteEmployeeProcessor(employeeId);
            super.endConnection(connection);
         });
    }

    addEmployee(name, salary, addEmployeeProcessor) {
        
        let connection = super.connect();
        let queryObject ={
            name: name,
            salary:salary
        }
        //connection.query('insert into employee set ?', {name: name, salary: salary}, (error, result) => {
        connection.query('insert into employee set ?', queryObject, (error, result) => {
            console.log(error);
            addEmployeeProcessor(name, salary);
            super.endConnection(connection);
         });
    }

    updateEmployee(id,name, salary, upEmployeeProcessor) {
       
        let connection = super.connect();
        var sql = "UPDATE employee set name =? , salary =?  WHERE id = ?";
        connection.query(sql,[name,salary,id], (error, result) => {
            if(error){
                console.log("error" + error);
            }
            console.log("called update " + name);
            upEmployeeProcessor(id,name, salary);
            super.endConnection(connection);
         });
    }

}