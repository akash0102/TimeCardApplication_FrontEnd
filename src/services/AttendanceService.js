import axios from 'axios';

const API_BASE_URL = "http://localhost:8081/api/v2";

class AttendanceService {

    getAttendance(){
        return axios.get(API_BASE_URL+"/getAllAttendance");
    }

    insertAttendance(att){
        return axios.post(API_BASE_URL + '/saveAttendance/' + 100001 , att);
    }

    getAttendanceById(employeeId){
        return axios.get(API_BASE_URL + '/getAttendance/' + employeeId);
    }

    getByAttendanceId(attendanceId){
        return axios.get(API_BASE_URL + '/getAttendanceId/' + attendanceId);
    }
    

    updateAttendance(att, employeeId){
        return axios.put(API_BASE_URL + '/updateAttendance/' + employeeId, att);
    }

    deleteAttendance(attId){
        return axios.delete(API_BASE_URL + '/deleteAttendance/' + attId);
    }
}

export default new AttendanceService()