import { takeLatest, call } from "redux-saga/effects";
import axios from "axios";
import { DELETE_EMP_DATA } from "../../constant";

const deleteData = async (data) => {
    let body = {id : data}
    const response = await axios.delete("http://localhost:8800/delete-employeeDetails", {data : body})
    return response.data
}

function* WorkerDeleteData(action) {
    try{
        yield call(deleteData, action.payload)
    }catch(err){
        alert(err)
    }


}

export default function* WatcherDeleteData() {
    yield takeLatest(DELETE_EMP_DATA, WorkerDeleteData)
}