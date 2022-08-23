import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddEmployee from './Component/AddEmployee';
import Department from './Component/Department';
import EmployeeList from './Component/EmployeeList';
import Header from './Component/Header';
import AddDepartment from './Component/AddDepartment';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className= "container">
          <Switch>
              <Route exact path = "/" component = {EmployeeList}></Route>
              <Route exact path = "/employees" component = {EmployeeList}></Route>
              <Route exact path = "/departments" component = {Department}></Route>
              <Route exact path = "/add-department" component = {AddDepartment} ></Route>
              <Route exact path = "/edit-department/:did" component = {AddDepartment}></Route>

              <Route exact path = "/add-employee" component = {AddEmployee} ></Route>
              <Route exact path = "/edit-employee/:eid" component = {AddEmployee}></Route>
              <Route exact path = "/show-department" component= {Department}></Route>
            </Switch>
        </div>
       
        
        
        </Router>
    </div>
  );
}

export default App;
