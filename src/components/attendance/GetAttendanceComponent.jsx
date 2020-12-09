import React, { Component } from 'react'
import AttendanceService from '../../services/AttendanceService'

class FindAttendanceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            attendance: {},
            empId: ''
        }
    }

    componentDidMount(){
        AttendanceService.getByAttendanceId(this.state.id).then( res => {
            this.setState({attendance: res.data});
            this.setState({empId: this.state.attendance.employee.employeeId});
        })
    }
    
    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Attendance Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Attendance From Date: </label>
                            <div> { this.state.attendance.fromDate }</div>
                        </div>
                        <div className = "row">
                            <label> Attendance To Date: </label>
                            <div> { this.state.attendance.toDate }</div>
                        </div>
                        <div className = "row">
                            <label> Emp ID: </label>
                            <div> { this.state.empId }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default FindAttendanceComponent
