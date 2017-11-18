import BaseDao from "./BaseDao";
export default class EmployeeDao extends BaseDao{
    findAll(employeeProcessor){
        let connection = super.connect();
        connection.query("select id, name, salary from employee",  (error, result)=>{
            employeeProcessor(result);
            console.log(result);
            super.endConnection(connection);
        });
    }
    addEmployee(employeeProcessor){
        let connection = super.connect();
        connection.query("insert into employeedb.employee (id, name, salary) values(2, 'test', 200)",  (error, result)=>{
            employeeProcessor(result);
            console.log(result);
            super.endConnection(connection);
        });
    }
}
