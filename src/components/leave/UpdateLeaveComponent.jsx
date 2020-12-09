import React, { Component } from 'react'
import LeaveService from '../../services/LeaveService';

class UpdateLeaveComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            leaveId: this.props.match.params.id,
            fromDate: '',
            toDate: '',
            empId:''
        }
        this.changeFromDateHandler = this.changeFromDateHandler.bind(this);
        this.changeToDateHandler = this.changeToDateHandler.bind(this);
        this.updateLeave = this.updateLeave.bind(this);
    }

    componentDidMount(){
        LeaveService.getLeaveById(this.state.leaveId).then( (res) =>{
            let leave = res.data;
            this.setState({fromDate: leave.fromDate,
                toDate: leave.toDate,
                empId : leave.employee.employeeId
            });
            console.log('leave => ' + JSON.stringify(leave));
            console.log(this.state.empId);
        });
    }

    updateLeave = (e) => {
        e.preventDefault();
        let leave = {fromDate: this.state.fromDate, toDate: this.state.toDate};
        console.log('leave => ' + JSON.stringify(leave));
        console.log('id => ' + JSON.stringify(this.state.leaveId));
        LeaveService.updateLeave(leave, this.state.leaveId).then( res => {
            this.props.history.push(`/leave/${this.state.empId}`);
        });
    }
    
    changeFromDateHandler= (event) => {
        this.setState({fromDate: event.target.value});
    }

    changeToDateHandler= (event) => {
        this.setState({toDate: event.target.value});
    }


    cancel(){
        this.props.history.push(`/leave/${this.state.empId}`);
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Leave</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> From Date: </label>
                                            <input type="date" placeholder="From Date" name="fromDate" className="form-control" 
                                                value={this.state.fromDate} onChange={this.changeFromDateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> To date: </label>
                                            <input type="date" placeholder="To Date" name="toDate" className="form-control" 
                                                value={this.state.toDate} onChange={this.changeToDateHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateLeave}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateLeaveComponent
