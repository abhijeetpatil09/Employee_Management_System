import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import DepartmentService from '../Service/DepartmentService'
import Swal from 'sweetalert2';

const Department = () => {
    const [departments, setDepartments] = useState([])

    useEffect ( () => {
        getAllDepartments();
    }, [])

    const getAllDepartments = () => {
        DepartmentService.getAllDepartments().then((response) => {
            setDepartments(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteDepartment = (Id) => {
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
                DepartmentService.deleteDepartment(Id); 
                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${departments.deptName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 3000,
                });
                getAllDepartments();
               
            }   
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className = "container">
            <h2 className = "text-center"> List Department </h2>
            <Link to="/add-department" className = "btn btn-primary mb-2" > Add Department </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Department Id</th>
                    <th> Department Name </th> 
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        departments.map(
                            department =>
                            
                            <tr> 
                                <td>{department.deptId}</td>
                                <td>{department.deptName}</td>

                                
                                <td>
                                    <Link className="btn btn-info" to={`/edit-department/${department.deptId}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteDepartment(department.deptId)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <Link to="/employees" className = "btn btn-primary mb-2" > Back </Link>
        </div>
        
    )
}
export default Department