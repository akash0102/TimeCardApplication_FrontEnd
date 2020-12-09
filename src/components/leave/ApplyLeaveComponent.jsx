import React, { Component } from 'react'
import LeaveService from '../../services/LeaveService';

class ApplyLeaveComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            leaveId: '',
            fromDate: '',
            toDate: '',
            status:'',
            empId: this.props.match.params.id
        }
        this.changeFromDateHandler = this.changeFromDateHandler.bind(this);
        this.changeToDateHandler = this.changeToDateHandler.bind(this);
        this.appplyLeave = this.appplyLeave.bind(this);
        this.changeEmpIdHandler = this.changeEmpIdHandler.bind(this);
    }

    // step 3
   
    appplyLeave = (e) => {
        e.preventDefault();
        let leave = {fromDate: this.state.fromDate, toDate: this.state.toDate, empId: this.state.empId};
        console.log('leave => ' + JSON.stringify(leave));

        // step 5
        
            LeaveService.addLeave(leave).then(res =>{
                this.props.history.push(`/leave/${this.state.empId}`);
            });
        
    }
    
    changeFromDateHandler= (event) => {
        this.setState({fromDate: event.target.value});
    }

    changeToDateHandler= (event) => {
        console.log(event.target.value);
        this.setState({toDate: event.target.value});
    }
    changeEmpIdHandler= (event) => {
        this.setState({empId: event.target.value});
    }

    cancel(){
        this.props.history.push(`/leave/${this.state.empId}`);
    }

    getTitle(){
       
        return <h3 className="text-center">Add Leave</h3>
        
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> FromDate: </label>
                                            <input type="date" name="fromDate" className="form-control" 
                                                value={this.state.fromDate} onChange={this.changeFromDateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> ToDate: </label>
                                            <input type="date" name="toDate" className="form-control" 
                                                value={this.state.toDate} onChange={this.changeToDateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Emp Id: </label>
                                            <input placeholder="Employee Id" name="empId" className="form-control" 
                                                value={this.state.empId} onChange={this.changeEmpIdHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.appplyLeave}>Save</button>
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

export default ApplyLeaveComponent
