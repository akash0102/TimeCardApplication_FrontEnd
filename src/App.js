import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import HeaderComponent from './components/main/HeaderComponent';
import FooterComponent from './components/main/FooterComponent';
import Home from './components/main/Home';
import Profile from './components/main/Profile';
import SignOut from './components/main/SignOut';

import CreateEmployee from './components/employee/CreateEmployeeComponent';
import UpdateEmployee from './components/employee/UpdateEmployeeComponent';
import ListEmployee from './components/employee/ListEmployeeComponent';

import Leave from './components/leave/ListLeaveComponent';
import LeaveEdit from './components/leave/UpdateLeaveComponent';
import AddLeave from './components/leave/ApplyLeaveComponent';
import ViewLeave from './components/leave/FindLeaveComponent';

import EditTimeCard from './components/timecard/EditTimeCardComponent';
import Timecard from './components/timecard/ViewTimeCardComponent';
import TimeCardView from './components/timecard/CheckTimeCardComponent';
import AddTimeCard from './components/timecard/AddTimeCardComponent';

import Attendance from './components/attendance/AttendanceListComponent';
import AttendanceView from './components/attendance/GetAttendanceComponent';
import CreateAttendance from './components/attendance/AddAttendanceComponent';
import UpdateAttendance from './components/attendance/UpdateAttendanceComponent';


function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch>
                      <Route path = "/timecard/:id" exact component = {Timecard}></Route>
                      <Route path = "/update-timecard/:id" component = {EditTimeCard}></Route>
                      <Route path = "/add-timecard/:id" component = {AddTimeCard}></Route>
                      <Route path = "/timecard-view/:id" exact component = {TimeCardView}></Route>

                      <Route path = "/leave/:id" exact component = {Leave}></Route>
                      <Route path = "/leave-update/:id" component = {LeaveEdit}></Route>
                      <Route path = "/add-leave/:id" component = {AddLeave}></Route>
                      <Route path = "/view-leave/:id" exact component = {ViewLeave}></Route>

                      <Route path = "/:id" exact component = {Home}></Route>
                      <Route path = "/profile/:id" exact component = {Profile}></Route>
                      <Route path = "/signout"exact component = {SignOut}></Route>

                      <Route path = "/employees/:id" exact component = {ListEmployee}></Route>
                      <Route path = "/update-employee/:id" component = {UpdateEmployee}></Route>
                      <Route path = "/view-employee/:id" component = {Profile}></Route>
                      <Route path = "/add-employee/:id" component = {CreateEmployee}></Route>

                      <Route path = "/attendance/:id" exact component = {Attendance}></Route>
                      <Route path = "/update-attendance/:id" component = {UpdateAttendance}></Route>
                      <Route path = "/add-attendance/:id" component = {CreateAttendance}></Route>
                      <Route path = "/attendance-view/:id" exact component = {AttendanceView}></Route>
                      
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
