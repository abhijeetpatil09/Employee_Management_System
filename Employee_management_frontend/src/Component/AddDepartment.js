import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams } from 'react-router-dom';
import DepartmentService from '../Service/DepartmentService';
import Swal from 'sweetalert2';

const AddDepartment = () => {
    const [deptId, setdeptId] = useState('')
    const [deptName, setdeptName] = useState('')
    const history = useHistory();
    const {did} = useParams();

    const saveOrUpdateDepartment = (e) => {
        e.preventDefault();

        const department={ deptId, deptName }

        if(did){
            
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
                    DepartmentService.updateDepartment(department);
                    console.log(response.data);
                    Swal.fire({
                        icon: 'success',
                        title: 'Updated!',
                        text: `${department.deptName}'s data has been updated.`,
                        showConfirmButton: false,
                        timer: 3000
                    });
                    history.push('/departments')
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
                    DepartmentService.createDepartment(department);
                    console.log(response.data);
                    Swal.fire({
                        icon: 'success',
                        title: 'Added!',
                        text: `${department.deptName}'s data has been Added.`,
                        showConfirmButton: false,
                        timer: 3000
                    });
                history.push('/departments')
                }    
            }).catch((error) => {
                console.log(error)
            })
        }  
    }

    useEffect(() => {

        DepartmentService.getDepartmentById(did).then((response) =>{
            setdeptId(response.data.deptId)
            setdeptName(response.data.deptName)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(did){
            return <h2 className = "text-center">Update Department</h2>
        }else{
            return <h2 className = "text-center">Add Department</h2>
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
                           

                                {/* <div className = "form-group mb-2">
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
                                </div> */}
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Department Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "dept_name"
                                        name = "deptName"
                                        className = "form-control"
                                        value = {deptName}
                                        onChange = {(e) => setdeptName(e.target.value)}
                                    >
                                    </input>
                                </div>
                

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateDepartment(e)} >Submit </button>
                                <Link to="/departments" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddDepartment
