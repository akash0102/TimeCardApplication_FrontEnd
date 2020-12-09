import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8081/api/v2/employees";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL+"/all");
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL + '/CreateEmployee/' + 2 , employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/getById/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/deleteEmployee/' + employeeId);
    }
}

export default new EmployeeService()