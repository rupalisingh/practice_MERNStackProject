import * as constant from "./constant"

export function setEmployeeData(payload){
    console.log("Payload", payload)
return {
    type : constant.SET_EMP_DATA,
    payload
}
}


export function getEmployeeData(){
    return {
        type : constant.INITIAL_GET_DATA,
    }
}