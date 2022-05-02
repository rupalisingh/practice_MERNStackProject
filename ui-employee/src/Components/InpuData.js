import React, { useState, useEffect } from 'react'
import { Paper, Button, TextField } from "@mui/material"
import '../css/InputData.css'
import { useDispatch, connect } from 'react-redux'
import { setEmployeeData, getEmployeeData } from "../actions"
import TableData from './Table'


function InpuData(props) {
  // console.log(props.UserData)
  const dispatch = useDispatch()
  const [empData, setEmpData] = useState({ id: null, name: null, designation: null })


  const handleSave = () => {
    if( props.UserData.some(data => data.EmpId === Number(empData.id))){
      alert("ID already exists")
    }else if(empData.id  && empData.name && empData.designation){
      dispatch(setEmployeeData(empData))
      dispatch(getEmployeeData())
    }else{
      alert("Please enter all the fields")
    }
  }

  const handleReset = () => {
    setEmpData({ id: "", name: "", designation: "" })

  }
  const handleId = (e) => {
    // console.log(e.target.value)
    const id = e.target.value
    setEmpData({ ...empData, id })
  }
  const handleName = (e) => {
    const name = e.target.value
    setEmpData({ ...empData, name })

  }
  const handleDesigation = (e) => {
    const designation = e.target.value
    setEmpData({ ...empData, designation })
  }

  useEffect(() => {
    dispatch(getEmployeeData())
    // eslint-disable-next-line
  },[])
  return (
    <>
      <Paper elevation={3}>
        <div className='input-fields'>
          <TextField label="Employee Id" onChange={handleId} value = {empData.id} type = "Number"/>
          <TextField label="Employee Name" onChange={handleName} value = {empData.name} type = "String"/>
          <TextField label="Designation" onChange={handleDesigation} value = {empData.designation}/>
        </div>
        <div className='buttons'>
          <Button variant="contained" onClick={handleSave} >Save</Button>
          <Button variant="contained" onClick={handleReset}>Reset</Button>
        </div>
      </Paper>
      <TableData />

    </>
  )
}

const mapStateToProps = (state) => {
  return { UserData: state.userdataState }
}


export default connect(mapStateToProps)(InpuData)