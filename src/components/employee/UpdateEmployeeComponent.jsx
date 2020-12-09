import React, { Component } from 'react'
import EmployeeService from '../../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employeeName: '',
            phoneNumber: '',
            employeeEmail: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePhoneNoHandler = this.changePhoneNoHandler.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
            let employee = res.data;
            this.setState({employeeName: employee.employeeName,
                employeeEmail : employee.employeeEmail,
                phoneNumber: employee.phoneNumber
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {employeeId: this.state.id, employeeName: this.state.employeeName, phoneNumber: this.state.phoneNumber,  employeeEmail: this.state.employeeEmail};
        console.log('employee => ' + JSON.stringify(employee));
        console.log('id => ' + JSON.stringify(this.state.id));
        EmployeeService.updateEmployee(employee, this.state.id).then( res => {
            this.props.history.push('/employees');
        });
    }
    
    changeNameHandler= (event) => {
        this.setState({employeeName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({ employeeEmail: event.target.value});
    }

    cancel(){
        this.props.history.push(`/employees/${this.state.id}`);
    }

    changePhoneNoHandler= (event) => {
        this.setState({phoneNumber: event.target.value});
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center" style={{color: "red"}}>Update Employee</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="Full Name" name="employeeName" className="form-control" 
                                                value={this.state.employeeName} onChange={this.changeNameHandler} />
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="employeeEmail" className="form-control" 
                                                value={this.state.employeeEmail} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Phone Number: </label>
                                            <input type="number" minLength="10" maxLength="10" placeholder="Phone Number" name="phoneNumber" className="form-control" 
                                                value={this.state.phoneNumber} onChange={this.changePhoneNoHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.updateEmployee}>&#x2713;Save</button>
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

export default UpdateEmployeeComponent
