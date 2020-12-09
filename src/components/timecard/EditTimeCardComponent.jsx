import React, { Component } from 'react'
import TimeCardService from '../../services/TimeCardService';

class UpdateTimeCardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            timeCardId: this.props.match.params.id,
            date: '',
            timeEntry: '',
            timeExit: '',
            status:'',
            empId:''
        }
        this.changeTimeEntryHandler = this.changeTimeEntryHandler.bind(this);
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.updateTimeCard = this.updateTimeCard.bind(this);
        this.changeExitTimeHandler = this.changeExitTimeHandler.bind(this);
    }

    componentDidMount(){
        TimeCardService.getTimeCardById(this.state.timeCardId).then( (res) =>{
            let timeCard = res.data;
            this.setState({timeEntry: timeCard.timeEntry,
                timeExit: timeCard.timeExit,
                date: timeCard.date,
                empId: timeCard.employee.employeeId
            });
        });
    }

    updateTimeCard = (e) => {
        e.preventDefault();
        let timeCard = {date: this.state.date, timeEntry: this.state.timeEntry,
            timeExit: this.state.timeExit, timeCardId: this.state.timeCardId,
            empId: this.state.empId};
        console.log('timeCard => ' + JSON.stringify(timeCard));
        console.log('id => ' + JSON.stringify(this.state.id));
        TimeCardService.updateEntry(timeCard, this.state.timeCardId).then(res =>{
            this.props.history.push(`/timecard/${this.state.empId}`);
        });
    }
    
    changeTimeEntryHandler= (event) => {
        this.setState({fromDate: event.target.value});
    }

    changeDateHandler= (event) => {
        this.setState({date: event.target.value});
    }

    changeExitTimeHandler=(event)=>{
        this.setState({timeExit: event.target.value});
    }

    cancel(){
        this.props.history.push(`/timecard/${this.state.empId}`);
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update TimeCard</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Date: </label>
                                            <input type="date" placeholder="Enter date" name="date" className="form-control" 
                                                value={this.state.date} onChange={this.changeDateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Entry Time: </label>
                                            <input type="time" placeholder="Enter Entry Time" name="entryTime" className="form-control" 
                                                value={this.state.timeEntry} onChange={this.changeTimeEntryHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Exit Time: </label>
                                            <input type="time" placeholder="Enter Exit Time" name="exitTime" className="form-control" 
                                                value={this.state.timeExit} onChange={this.changeExitTimeHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateTimeCard}>Submit</button>
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

export default UpdateTimeCardComponent
