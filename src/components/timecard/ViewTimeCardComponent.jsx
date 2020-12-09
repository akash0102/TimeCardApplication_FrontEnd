import React, { Component } from 'react'
import TimeCardService from '../../services/TimeCardService'

class ViewTimeCardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            empId: this.props.match.params.id, 
                timeCards: []
        }
        this.addTimeCard = this.addTimeCard.bind(this);
        this.updateTimeCard = this.updateTimeCard.bind(this);
        this.removeTimeCard = this.removeTimeCard.bind(this);
        this.viewTimeCard = this.viewTimeCard.bind(this);
    }

    removeTimeCard(timeCardId){
        TimeCardService.removeTimeCard(timeCardId).then( res => {
            this.setState({timeCards: this.state.timeCards.filter(timeCard => timeCard.timeCardId !== timeCardId)});
        });
    }
    updateTimeCard(timeCardId){
        this.props.history.push(`/update-timeCard/${timeCardId}`);
    }
    addTimeCard(empId){
        this.props.history.push(`/add-timeCard/${empId}`);
    }

    componentDidMount(){
        TimeCardService.getTimeCardEntries(this.state.empId).then((res) => {
            this.setState({ timeCards: res.data});
            console.log(this.state.timeCards);
        });
    }

    viewTimeCard(timeCardId){
        this.props.history.push(`/timecard-view/${timeCardId}`);
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">TimeCards List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={() => this.addTimeCard(this.state.empId)}> Add TimeCard Entry</button>
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
                                    this.state.timeCards.map(
                                        timeCard => 
                                        <tr key = {timeCard.timeCardId}>
                                             <td> {timeCard.fromDate} </td>   
                                             <td> {timeCard.toDate}</td>
                                             <td> {timeCard.employee.employeeName}</td>
                                             <td> {timeCard.status}</td>
                                             <td>
                                                 <button onClick={ () => this.updateTimeCard(timeCard.timeCardId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.removeTimeCard(timeCard.timeCardId)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewTimeCard(timeCard.timeCardId)} className="btn btn-info">View </button>
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

export default ViewTimeCardComponent
