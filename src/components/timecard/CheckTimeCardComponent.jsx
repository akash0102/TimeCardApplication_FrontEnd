import React, { Component } from 'react'
import TimeCardService from '../../services/TimeCardService'

class CheckTimeCardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            timecard: {},
            empId:''

        }
    }

    componentDidMount(){
        TimeCardService.getTimeCardById(this.state.id).then( res => {
            this.setState({timecard: res.data});
            this.setState({empId:this.state.timecard.employee.employeeId});
        })
    }

    cancel(){
        this.props.history.push(`/timecard/${this.state.empId}`);
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Leave Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> TimeCard Entry Date: </label>
                            <div> { this.state.timecard.date }</div>
                        </div>
                        <div className = "row">
                            <label> TimeCard In Time: </label>
                            <div> { this.state.timecard.timeEntry }</div>
                        </div>
                        <div className = "row">
                            <label> TimeCard Out Time: </label>
                            <div> { this.state.timecard.timeExit }</div>
                        </div>
                        <div className = "row">
                            <label> Employee ID: </label>
                            <div> { this.state.empId }</div>
                        </div>
                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default CheckTimeCardComponent
