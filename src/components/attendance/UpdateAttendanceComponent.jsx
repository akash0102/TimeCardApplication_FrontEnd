import React, { Component } from 'react'
import AttendanceService from '../../services/AttendanceService';

class UpdateAttendanceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            attendanceId: this.props.match.params.id,
            fromDate: '',
            toDate: '',
            inTime: '',
            offTime: '',
            status:'',
            empId:''
        }
        this.changeFromDateHandler = this.changeFromDateHandler.bind(this);
        this.changeToDateHandler = this.changeToDateHandler.bind(this);
        this.changeInTimeHandler = this.changeInTimeHandler.bind(this);
        this.changeOffTimeHandler = this.changeOffTimeHandler.bind(this);
        this.attendanceUpdate = this.attendanceUpdate.bind(this);
    }

    componentDidMount(){
        AttendanceService.getByAttendanceId(this.state.attendanceId).then( (res) =>{
            let attendance = res.data;
            this.setState({
                fromDate: attendance.fromDate,
                toDate: attendance.toDate,
                inTime: attendance.inTime,
                offTime: attendance.offTime,
                empId: attendance.employee.employeeId
            });

            console.log("attendance id===",this.state.empId);
        });
    }

    attendanceUpdate = (e) => {
        e.preventDefault();
        let attendance = {attendanceId: this.state.attendanceId, fromDate: this.state.fromDate, toDate: this.state.toDate, 
                        inTime: this.state.inTime, offTime: this.state.offTime, 
                        empId: this.state.empId};
        console.log('attendance => ' + JSON.stringify(attendance));

        console.log('id => ' + JSON.stringify(attendance.attendanceid));
        AttendanceService.updateAttendance(attendance, attendance.attendanceId).then(res =>{
            console.log("inside update===",attendance.employee.employeeId);
            console.log("inside update state variable===",this.state.empId);
            this.props.history.push(`/attendance/${attendance.employee.employeeId}`);
        });
    }
    
    changeFromDateHandler= (event) => {
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


    render()  {
        return (
            <div>
                <br/>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Update Attendance</h3>
                            <div className = "card-body">
                                <form>
                                <div className = "form-group">
                                        <label> From Date: </label>
                                        <input type="date" placeholder="From Date" name="fromDate" className="form-control" 
                                            value={this.state.fromDate} onChange={this.changeFromDateHandler} required={true}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> To Date: </label>
                                        <input type="date" placeholder="To Date" name="toDate" className="form-control" 
                                            value={this.state.toDate} onChange={this.changeToDateHandler} required={true}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> In Time: </label>
                                        <input type="time" placeholder="In Time" name="InTime" className="form-control" 
                                            value={this.state.inTime} onChange={this.changeInTimeHandler} required={true}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Out Time: </label>
                                        <input type="time" placeholder="Out Time" name="offTime" className="form-control" 
                                            value={this.state.offTime} onChange={this.changeOffTimeHandler} required={true}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.attendanceUpdate}>Edit</button>
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

export default UpdateAttendanceComponent
