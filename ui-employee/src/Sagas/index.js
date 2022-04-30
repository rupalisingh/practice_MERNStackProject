import {all, fork} from "redux-saga/effects"
import WatcherSetID from "./Watchers/GetId"
import WatcherGetData from "./Watchers/GetUserData"

export default function* root(){
    yield all([fork(WatcherSetID)])
    yield all([fork(WatcherGetData)])
}