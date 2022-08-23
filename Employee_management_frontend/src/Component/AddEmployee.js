import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams } from 'react-router-dom';
import EmployeeSevice from '../Service/EmployeeSevice';
import Swal from 'sweetalert2';

const AddEmployee = () => {

    const [id, setId] = useState('')
    const [age, setAge] = useState('')
    const [name, setName] = useState('')
    const [salary, setSalary] = useState('')
    const [email, setEmail] = useState('')
    const [JoiningDate, setJoingdate] = useState('')
    const [deptId, setdeptId] = useState('')
    const [deptName, setdeptName] = useState('')
    const history = useHistory();
    const {eid} = useParams();

   const department={
    deptId,
    deptName
   }

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const employee={id, age, name, salary, email, JoiningDate, department}

        if(eid){
            
            Swal.fire({
                icon: 'warning',
                title: 'Are you sure?',
                text: "Do you want to Update it really ?",
                showCancelButton: true,
                confirmButtonText: 'Yes, Update it!',
                cancelButtonText: 'No, cancel!',
            })
            .then((response) => {
                if(response.value){
                    EmployeeSevice.updateEmployee(employee);
                    console.log(response.data);
                    Swal.fire({
                        icon: 'success',
                        title: 'Updated!',
                        text: `${employee.name}'s data has been updated.`,
                        showConfirmButton: false,
                        timer: 3000
                    });
                    history.push('/employees')
                }   
            }).catch((error) => {
                console.log(error);
            })
        }
        else{
            Swal.fire({
                icon: 'warning',
                title: 'Are you sure?',
                text: "Do you want to Add this record ?",
                showCancelButton: true,
                confirmButtonText: 'Yes, Add it!',
                cancelButtonText: 'No, cancel!',
            })
            .then((response) => {
                if(response.value){
                    EmployeeSevice.createEmployee(employee);
                    console.log(response.data);
                    Swal.fire({
                        icon: 'success',
                        title: 'Added!',
                        text: `${employee.name}'s data has been Added.`,
                        showConfirmButton: false,
                        timer: 3000
                    });
                history.push('/employees')
                }    
            }).catch((error) => {
                console.log(error)
            })
        }  
    }

    useEffect(() => {

        EmployeeSevice.getEmployeeById(eid).then((response) =>{
            setId(response.data.id)
            setAge(response.data.age)
            setName(response.data.name)
            setSalary(response.data.salary)
            setEmail(response.data.email)
            setJoingdate(response.data.JoiningDate)
            setdeptId(response.data.department.deptId)
            setdeptName(response.data.deptName)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(eid){
            return <h2 className = "text-center">Update Employee</h2>
        }else{
            return <h2 className = "text-center">Add Employee</h2>
        }
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                       
                        <div className = "card-body">
                            <form>
                           
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Abhijeet Patil"
                                        name = "name"
                                        className = "form-control"
                                        value = {name}
                                        onChange = {(e) => setName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Age:</label>
                                    <input
                                        type = "number"
                                        placeholder = "xx"
                                        name = "age"
                                        className = "form-control"
                                        value = {age}
                                        onChange = {(e) => setAge(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Salary :</label>
                                    <input
                                        type = "number"
                                        placeholder = "000000"
                                        name = "salary"
                                        className = "form-control"
                                        value = {salary}
                                        onChange = {(e) => setSalary(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email :</label>
                                    <input
                                        type = "text"
                                        placeholder = "xyz@abc.com"
                                        name = "email"
                                        className = "form-control"
                                        value = {email}
                                        onChange = {(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> JoiningDate :</label>
                                    <input
                                        type = "date"
                                        placeholder = "yyyy-mm-dd"
                                        name = "JoiningDate"
                                        className = "form-control"
                                        value = {JoiningDate}
                                        onChange = {(e) => setJoingdate(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Department Id :</label>
                                    <input
                                        type = "number"
                                        placeholder = "dept _id"
                                        name = "deptId"
                                        className = "form-control"
                                        value = {deptId}
                                        onChange = {(e) => setdeptId(e.target.value)}
                                    >
                                    </input>
                                </div>
                

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateEmployee(e)} >Submit </button>
                                <Link to="/employees" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddEmployee
