import React, { Component } from 'react'
import LeaveService from '../../services/LeaveService'

class FindLeaveComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            empId:'',
            leave: {}
        }
    }

    componentDidMount(){
        LeaveService.getLeaveById(this.state.id).then( res => {
            this.setState({leave: res.data});
            this.setState({empId: this.state.leave.employee.employeeId});
            console.log(this.state.leave);
        })
    }

    cancel(){
        this.props.history.push(`/leave/${this.state.empId}`);
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Leave Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Leave From Date: </label>
                            <div> { this.state.leave.fromDate }</div>
                        </div>
                        <div className = "row">
                            <label> Leave To Date: </label>
                            <div> { this.state.leave.toDate }</div>
                        </div>
                        <div className = "row">
                            <label> Emp ID: </label>
                            <div> { this.state.empId }</div>
                        </div>
                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default FindLeaveComponent
