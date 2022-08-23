import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import EmployeeSevice from '../Service/EmployeeSevice'
import Swal from 'sweetalert2'
import Pagination from "@material-ui/lab/Pagination";

const EmployeeList = () => { 
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(0);
    const [size, setSize] = useState(2);
    const pageSizes = [2,3,4,5];

    const [employees ,setEmployees]= useState([])

    useEffect(() => retrieveEmployees(), [page, size]);
    const getRequestParams = (page, size) => {

        let params = {};

        if (page) {

          params["page"] = page - 1;

        }

        if (size) {

          params["size"] = size;

        }

        return params;

      };

   

    const retrieveEmployees = () => {

    const params = getRequestParams(page, size);

    EmployeeSevice.getAllEmployeeByPages(params.page,params.size)

        .then((response) => {

        const { employee, totalPages } = response.data;

        setEmployees(employee);

        setCount(totalPages);

        console.log(response.data);

        })

        .catch((e) => {

        console.log(e);

        });

    };



    const handlePageChange = (event, value) => {

        setPage(value);

    };

    const handlePageSizeChange = (event) => {

        setSize(event.target.value);

        setPage(1);



    };
    
        const getAllEmployees = () => {
        EmployeeSevice.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteEmployee = (Id) => {

        Swal.fire({

            icon: 'warning',

            title: 'Are you sure?',

            text: "You won't be able to revert this!",

            showCancelButton: true,

            confirmButtonText: 'Yes, delete it!',

            cancelButtonText: 'No, cancel!',

        }).

        then((response) => {

            if(response.value){

                EmployeeSevice.deleteEmployee(Id);

                Swal.fire({

                    icon: 'success',

                    title: 'Deleted!',

                    text: `${employees.name}'s data has been deleted.`,

                    showConfirmButton: false,

                    timer: 3000,

                });

                getAllEmployees();

               

            }  

        }).catch((error) => {

            console.log(error)

        })

    }

    return (
        <div className = "container">
            <h2 className = "text-center"> List Employees </h2>
            <Link to="/add-employee" className = "btn btn-primary mb-2" > Add Employee </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Name </th>
                    <th> Age </th>
                    <th> Email </th>
                    <th> Salary </th>
                    <th> Department Name </th>
                    <th> Joining date </th>
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                            <tr> 
                                <td>{employee.name}</td>
                                <td> {employee.age} </td>
                                <td>{employee.email}</td>
                                <td>{employee.salary}</td>
                                <td>{employee.department.deptName}</td>
                                <td>{employee.JoiningDate}</td>
                                                               
                                <td>
                                    <Link className="btn btn-info" to={`/edit-employee/${employee.id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteEmployee(employee.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <div className="mt-3">
          {"Items per Page: "}
          <select onChange={handlePageSizeChange} value={size}>
            {pageSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <Pagination
            className="my-3"
            count={count}
            page={page}
            siblingCount={1}
            boundaryCount={1}
            variant="outlined"
            shape="rounded"
            onChange={handlePageChange}
          />
        </div>
           
        </div>
    )
}

export default EmployeeList
