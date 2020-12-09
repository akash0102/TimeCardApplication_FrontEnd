import React, { Component } from 'react'
import EmployeeService from '../../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            employeeId: this.props.match.params.employeeId,
            employeeName: '',
            employeeEmail: '',
            employeeRole:'',
            phoneNumber:'',
        }
        this.changeEmployeeNameHandler = this.changeEmployeeNameHandler.bind(this);
        this.changePhoneNoHandler = this.changePhoneNoHandler.bind(this);
        this.changeRoleHandler = this.changeRoleHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {employeeName: this.state.employeeName, employeeEmail: this.state.employeeEmail, phoneNumber: this.state.phoneNumber, employeeRole: this.state.employeeRole};
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        EmployeeService.createEmployee(employee).then(res =>{
            this.props.history.push('/employees');
        });
        
    }
    
    changePhoneNoHandler= (event) => {
        this.setState({phoneNumber: event.target.value});
    }

    changeRoleHandler= (event) => {
        this.setState({employeeRole: event.target.value});
    }

    changeEmployeeNameHandler= (event) => {
        this.setState({employeeName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({employeeEmail: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    getTitle(){
        return <h3 className="text-center" style={{color: "red"}}>Add Employee</h3>
    }
    render() {
        return (
            <div>
                <br/>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Name: </label>
                                        <input placeholder="First Name" name="employeeName" className="form-control" 
                                            value={this.state.employeeName} onChange={this.changeEmployeeNameHandler} />
                                    </div>
                                    <div className = "form-group">
                                        <label> Email Id: </label>
                                        <input placeholder="Email Address" name="employeeEmail" className="form-control" 
                                            value={this.state.employeeEmail} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Role: </label>
                                        <input placeholder="Employee Role" name="employeeRole" className="form-control" 
                                            value={this.state.employeeRole} onChange={this.changeRoleHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Phone Number: </label>
                                        <input type="number" minLength="10" maxLength="10" placeholder="Phone Number" name="phoneNumber" className="form-control" 
                                            value={this.state.phoneNumber} onChange={this.changePhoneNoHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveEmployee}>&#x2713;Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>&#x2716;Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent
