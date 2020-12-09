import React, { Component } from 'react'
import EmployeeService from '../../services/EmployeeService'

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(employeeId){
        EmployeeService.deleteEmployee(employeeId).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.employeeId !== employeeId)});
        });
    }
    viewEmployee(employeeId){
        this.props.history.push(`/profile/${employeeId}`);
    }
    editEmployee(employeeId){
        this.props.history.push(`/update-employee/${employeeId}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
        
    }

    addEmployee(){
        this.props.history.push('/add-employee');
    }

    render() {
        return (
            <div>
                <h2 className="text-center" style={{color: "red"}}>Employees List</h2>
                <div className = "row">
                <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
                </div>
                <br></br>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead className="thead-dark">
                            <tr>
                            <th> Employee ID</th>
                                <th> Employee Name</th>
                                <th> Employee Role</th>
                                <th> Employee Contact Number</th>
                                <th> Employee Email Id</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee => 
                                    <tr key = {employee.employeeId}>
                                            <td> {employee.employeeId}</td>
                                            <td> {employee.employeeName} </td>   
                                            <td> {employee.employeeRole}</td>
                                            <td> {employee.phoneNumber}</td>
                                            <td> {employee.employeeEmail}</td>
                                            <td>
                                                <button onClick={ () => this.editEmployee(employee.employeeId)} className="btn btn-info">&#x270E;Update </button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.employeeId)} className="btn btn-danger">Delete </button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.employeeId)} className="btn btn-info">View </button>
                                            </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ListEmployeeComponent
