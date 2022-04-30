const mongoose = require("mongoose")
const {Schema} = mongoose

const EmployeeSchema = new Schema({
    
    EmpId : {
        type : Number
    },
    EmpName : {
        type : String
    },
    Designation : {
        type : String
    }
})

const EmployeeModel = mongoose.model('Employee', EmployeeSchema, 'Employee')

module.exports = EmployeeModel