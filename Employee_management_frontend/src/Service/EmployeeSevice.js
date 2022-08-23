import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/emp';

class EmployeeService{

    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL + '/show')
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_REST_API_URL + '/add', employee)
    }

    getEmployeeById(Id){
        return axios.get(EMPLOYEE_BASE_REST_API_URL + '/show/' +Id);
    }

    updateEmployee(employee){
        return axios.put(EMPLOYEE_BASE_REST_API_URL + '/update', employee);
    }

    deleteEmployee(Id){
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/delete/' + Id);
    }
    getAllEmployeeByPages(page,size){

        return axios.get(EMPLOYEE_BASE_REST_API_URL + '/paging/' + page + '/' + size)

    }
    
}

export default new EmployeeService();