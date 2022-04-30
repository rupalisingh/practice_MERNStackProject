// console.log("Hello WOrld")

const express = require("express")
const mongoose = require("mongoose")
const EmployeeModel = require("./Model/employeeModel")
const app = express()
app.use(express.json({ limit: '50mb' }))
mongoose.connect('mongodb://localhost:27017/EmployeeData')



app.get('/get-employeeDetails', async function (req, res) {
    const result = await EmployeeModel.find()
    res.send(result)
})


app.post('/post-employeeDetails', async function (req, res) {
    try {
        console.log(req.body)
        const data = ({
            EmpId: req.body.id,
            EmpName: req.body.name,
            Designation: req.body.Designation
        })
        EmployeeModel.create(data)
        res.send(data)
    } catch (err) {
        res.send(err)
    }

})

app.delete('/delete-employeeDetails', async function (req, res) {
    try {
        // console.log(req.body)
        const data = await EmployeeModel.deleteOne({ EmpId: req.body.id })
        console.log(data)
        res.send(data)
    } catch (err) {
        res.send(err)
    }
})


app.put('/update-employeeDetails', async function (req, res) {
    try {
        console.log(req.body)
        const data = await EmployeeModel.findOneAndUpdate({ EmpId: req.body.id }, {
            EmpName: req.body.name,
            Designation: req.body.Designation
        })
        res.send(data)
    } catch (err) {
        res.send(err)
    }
})



app.listen(8800, function () {
    console.log("Listening to port 8800")
})

