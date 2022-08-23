import axios from 'axios'

const Department_BASE_REST_API_URL = 'http://localhost:8080/department';

class DepartmentService{

    getAllDepartments(){
        return axios.get(Department_BASE_REST_API_URL + '/show')
    }

    createDepartment(department){
        return axios.post(Department_BASE_REST_API_URL + '/add', department)
    }

    getDepartmentById(Id){
        return axios.get(Department_BASE_REST_API_URL + '/show/' +Id);
    }

    updateDepartment(department){
        return axios.put(Department_BASE_REST_API_URL + '/update', department);
    }

    deleteDepartment(Id){
        return axios.delete(Department_BASE_REST_API_URL + '/delete/' + Id);
    }
    
}

export default new DepartmentService();