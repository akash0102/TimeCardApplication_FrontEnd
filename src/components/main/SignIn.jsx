
import React, { Component } from 'react'
import EmployeeService from '../../services/EmployeeService';



class SignIn extends Component{

    constructor(props) {
        super(props)

        this.state = {
            pwd:'',
            empId:''
        }
        
        this.validate = this.validate.bind(this);
    }

    validate(){
        EmployeeService.findCredentials(this.state.empId,this.state.pwd).then((res)=>{
            this.props.history.push(`/alternate/${this.state.empId}`);
        });
    }

    render() {
        return (
            <div className="theme">
                <div class="cont">
                    <div class="cen">
                        <form position="center">
                            <h1>Login page</h1>

                            <label for="email"><b>Employee Id</b></label>
                            <input type="text" placeholder="Enter Employee Id" name="empid" required/>

                            <label for="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required/>

                            <button className="bttn btn-success" onClick={this.validate}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn