import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { GET_EMP_DATA, INITIAL_GET_DATA } from "../../constant";

const GetUserData = async () => {
    const response = await axios.get("http://localhost:8800/get-employeeDetails")
    return response.data
}

function* WorkerGetData() {
    const UserData = yield call(GetUserData)
    yield put({
        type : GET_EMP_DATA,
        payload : UserData
    })
}

export default function* WatcherGetData() {
    yield takeLatest(INITIAL_GET_DATA, WorkerGetData)
}