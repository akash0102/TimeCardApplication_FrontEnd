import axios from 'axios';

const API_BASE_URL = "http://localhost:8081/api/v2/timecard";

class TimeCardService {

    getAllTimeCards(){
        return axios.get(API_BASE_URL+"/timecards");
    }

    enterTimeCard(empId,timecard){
        return axios.post(API_BASE_URL + `/timecardEntry/${empId}` , timecard);
    }

    getTimeCardEntries(employeeId){
        return axios.get(API_BASE_URL + '/employee/' + employeeId);
    }

    updateEntry(timecard, timecardId){
        return axios.put(API_BASE_URL + '/timeCardEdit/' + timecardId, timecard);
    }

    deleteEntry(timecardId){
        return axios.delete(API_BASE_URL + '/timecardDelete/' + timecardId);
    }
}

export default new TimeCardService()