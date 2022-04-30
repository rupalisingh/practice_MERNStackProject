import {all, fork} from "redux-saga/effects"
import WatcherSetID from "./Watchers/SetUserData"
import WatcherGetData from "./Watchers/GetUserData"
import WatcherDeleteData from "./Watchers/DeleteUserData"

export default function* root(){
    yield all([fork(WatcherSetID)])
    yield all([fork(WatcherGetData)])
    yield all([fork(WatcherDeleteData)])
}