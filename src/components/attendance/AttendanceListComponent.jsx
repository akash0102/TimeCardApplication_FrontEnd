import React, { Component } from 'react'
import AttendanceService from '../../services/AttendanceService'

class ListAttendanceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            empId: this.props.match.params.id,
                attendances: []
        }
        this.addAttendance = this.addAttendance.bind(this);
        this.updateAttendance = this.updateAttendance.bind(this);
        this.removeAttendance = this.removeAttendance.bind(this);
        this.getAttendance = this.getAttendance.bind(this);
    }

    removeAttendance(attendanceId){
        AttendanceService.deleteAttendance(attendanceId).then( res => {
            this.setState({attendances: this.state.attendances.filter(attendance => attendance.attendanceId !== attendanceId)});
        });
    }
    updateAttendance(attendanceId){
        console.log("attendance id=>",attendanceId);
        this.props.history.push(`/update-attendance/${attendanceId}`);
    }
    addAttendance(empId){
        this.props.history.push(`/add-attendance/100001`);//${empId}
    }

    componentDidMount(){
        AttendanceService.getAttendanceById(this.state.empId).then((res) => {
            this.setState({ attendances: res.data});
        });
    }

    getAttendance(attendanceId){
        this.props.history.push(`/attendance-view/${attendanceId}`);
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Attendances List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={() => this.addAttendance(this.state.empId)}> Add Attendance</button>
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
                                this.state.attendances.map(
                                    attendance => 
                                    <tr key = {attendance.attendanceId}>
                                            <td> {attendance.fromDate} </td>   
                                            <td> {attendance.toDate}</td>
                                            <td> {attendance.employee.employeeName}</td>
                                            <td> {attendance.status}</td>
                                            <td>
                                                <button onClick={ () => this.updateAttendance(attendance.attendanceId)} className="btn btn-info">Update </button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.removeAttendance(attendance.attendanceId)} className="btn btn-danger">Delete </button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.getAttendance(attendance.attendanceId)} className="btn btn-info">View </button>
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

export default ListAttendanceComponent
