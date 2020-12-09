import React, { Component } from 'react'
import LeaveService from '../../services/LeaveService'

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            empId: this.props.match.params.id,
            leaves: []
        }
        this.addLeave = this.addLeave.bind(this);
        this.updateLeave = this.updateLeave.bind(this);
        this.removeLeave = this.removeLeave.bind(this);
        this.viewLeave = this.viewLeave.bind(this);
    }

    viewLeave(leaveId){
        this.props.history.push(`/view-leave/${leaveId}`);
    }

    removeLeave(leaveId){
        LeaveService.removeLeave(leaveId).then( res => {
            this.setState({leaves: this.state.leaves.filter(leave => leave.leaveId !== leaveId)});
        });
    }
    updateLeave(leaveId){
        this.props.history.push(`/leave-update/${leaveId}`);
    }
    addLeave(empId){
        this.props.history.push(`/add-leave/${empId}`);
    }

    componentDidMount(){
        LeaveService.getAllLeaves(this.state.empId).then((res) => {
            this.setState({ leaves: res.data});
            console.log("employee id=> ",this.state.empId);
        });
    }

    

    render() {
        return (
            <div>
                 <h2 className="text-center">Leaves List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={() => this.addLeave(this.state.empId)}> Add Leave</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> From Date</th>
                                    <th> To Date</th>
                                    <th> Employee Name</th>
                                    <th> Status</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.leaves.map(
                                        leave => 
                                        <tr key = {leave.leaveId}>
                                             <td> {leave.fromDate} </td>   
                                             <td> {leave.toDate}</td>
                                             <td> {leave.employee.employeeName}</td>
                                             <td> {leave.status}</td>
                                             <td>
                                                 <button onClick={ () => this.updateLeave(leave.leaveId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.removeLeave(leave.leaveId)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewLeave(leave.leaveId)} className="btn btn-info">View </button>
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
