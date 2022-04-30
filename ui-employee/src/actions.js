import * as constant from "./constant"

export function setEmployeeData(payload) {
    return {
        type: constant.SET_EMP_DATA,
        payload
    }
}


export function getEmployeeData() {
    return {
        type: constant.INITIAL_GET_DATA,
    }
}

export function deleteEmployeeData(payload) {
    console.log("Payload", payload)
    return {
        type: constant.DELETE_EMP_DATA,
        payload
    }
}

export function editRow(payload){
    return {
        type : constant.EDIT_ROW,
        payload
    }
}