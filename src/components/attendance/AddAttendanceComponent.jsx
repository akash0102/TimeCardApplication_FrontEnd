import React, { Component } from 'react'
import AttendanceService from '../../services/AttendanceService';

class AddAttendanceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            attendanceId: '',
            fromDate: '',
            toDate: '',
            inTime: '',
            offTime: '',
            empId: this.props.match.params.id
        }
        this.changeFromDateHandler = this.changeFromDateHandler.bind(this);
        this.changeToDateHandler = this.changeToDateHandler.bind(this);
        this.changeInTimeHandler = this.changeInTimeHandler.bind(this);
        this.changeOffTimeHandler = this.changeOffTimeHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // step 3
   
    saveAttendance = (e) => {
        e.preventDefault();
        let attendance = {fromDate: this.state.fromDate, toDate: this.state.toDate, 
                        inTime: this.state.inTime, offTime: this.state.offTime, 
                        empId: this.state.empId};
        console.log('attendance => ' + JSON.stringify(attendance));

        // step 5
        
            AttendanceService.insertAttendance(attendance).then(res =>{
                this.props.history.push(`/attendance/${attendance.empId}`);
            });
        
    }
    
    changeFromDateHandler = (event) => {
        this.setState({fromDate: event.target.value});
    }

    changeToDateHandler = (event) => {
        this.setState({toDate: event.target.value});
    }
    changeInTimeHandler = (event) => {
        this.setState({inTime: event.target.value});
    }

    changeOffTimeHandler = (event) =>{
        this.setState({offTime: event.target.value});
    }
    
    cancel(){
        this.props.history.push(`/attendance/${this.state.empId}`);
    }

    handleChange() {
        this.setState({
          checked: !this.state.checked
        })
    }

    render() {
        const hidden = this.state.checked ? <div className = "form-group">
        <label> To Date: </label>
        <input type="date" placeholder="To Date" name="toDate" className="form-control" 
            value={this.state.toDate} onChange={this.changeToDateHandler}/>
    </div> : null;
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Attendance</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> From Date: </label>
                                            <input type="date" placeholder="From Date" name="fromDate" className="form-control" 
                                                value={this.state.fromDate} onChange={this.changeFromDateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                        <label>Multiple Days</label>
                                            <input type="checkbox" checked={ this.state.checked } onChange={ this.handleChange } />
                                        </div>
                                        {hidden}
                                        <div className = "form-group">
                                            <label> In Time: </label>
                                            <input type="time" placeholder="In Time" name="InTime" className="form-control" 
                                                value={this.state.inTime} onChange={this.changeInTimeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Out Time: </label>
                                            <input type="time" placeholder="Out Time" name="offTime" className="form-control" 
                                                value={this.state.offTime} onChange={this.changeOffTimeHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveAttendance}>Save</button>
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

export default AddAttendanceComponent
