import { takeLatest, call } from "redux-saga/effects";
import { SET_EMP_DATA } from "../../constant"
import axios from 'axios'

const PostEmployeeData = async (data) => {
    let body = {
        id : data.id , name : data.name, Designation : data.designation
    }
    const response = await axios.post("http://localhost:8800/post-employeeDetails", body)
    return response.data
}

function* WorkerSetID(action) {
    try {
        const data = action.payload
        yield call(PostEmployeeData, data)
    } catch (err) {
        alert(err)
    }

}

export default function* WatcherSetID() {
    yield takeLatest(SET_EMP_DATA, WorkerSetID)
}