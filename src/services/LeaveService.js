import axios from 'axios';

const LEAVE_API_BASE_URL = "http://localhost:8081/api/v2/leave";

class LeaveService {

    getAllLeaves(empId){
        return axios.get(LEAVE_API_BASE_URL+ '/getAllLeaves/'+ empId);
    }

    getLeaveById(leaveId){
        return axios.get(LEAVE_API_BASE_URL+ '/findLeaveById/'+ leaveId);
    }

    addLeave(leave){
        return axios.post(LEAVE_API_BASE_URL+ '/apply/' + leave.empId,leave);
    }

    updateLeave(leave, leaveId){
        return axios.put(LEAVE_API_BASE_URL + '/updateLeave/' + leaveId,leave);
    }

    removeLeave(leaveId){
        return axios.delete(LEAVE_API_BASE_URL + '/deleteLeaveById/' + leaveId);
    }
}

export default new LeaveService()