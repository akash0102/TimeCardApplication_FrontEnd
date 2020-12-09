import React, { Component } from 'react'
import TimeCardService from '../../services/TimeCardService';

class AddTimeCardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            timeCardId: '',
            date: '',
            timeEntry: '',
            timeExit: '',
            status:'',
            empId: this.props.match.params.id
        }
        this.changeExitTimeHandler = this.changeExitTimeHandler.bind(this);
        this.changeTimeEntryHandler = this.changeTimeEntryHandler.bind(this);
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.enterTimeCard = this.enterTimeCard.bind(this);
        
    }

    // step 3
   
    enterTimeCard = (e) => {
        e.preventDefault();
        let timeCard = {date: this.state.date, timeEntry: this.state.timeEntry, timeExit: this.state.timeExit , empId: this.state.empId};
        console.log('timeCard => ' + JSON.stringify(timeCard));

        // step 5
        
        TimeCardService.enterTimeCard(this.state.empId, timeCard).then(res =>{
            this.props.history.push(`/timecard/${this.state.empId}`);
            console.log(res);
        });
        
    }
    
    changeTimeEntryHandler= (event) => {
        this.setState({timeEntry: event.target.value});
    }

    changeDateHandler= (event) => {
        this.setState({date: event.target.value});
    }

    cancel(){
        this.props.history.push(`/timecard/${this.state.empId}`);
    }

    changeExitTimeHandler=(event)=>{
        this.setState({timeExit: event.target.value});
    }


    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Add TimeCard</h3>
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

                                        <button className="btn btn-success" onClick={this.enterTimeCard}>Add</button>
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

export default AddTimeCardComponent
