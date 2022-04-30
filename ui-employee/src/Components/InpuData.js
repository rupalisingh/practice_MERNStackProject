import React, { useState, useEffect } from 'react'
import { Paper, Button, TextField, TableCell, TableBody, TableRow, TableHead, TableContainer, Table } from "@mui/material"
import '../css/InputData.css'
import { useDispatch } from 'react-redux'
import { setEmployeeData, getEmployeeData } from "../actions"
import { connect } from "react-redux";


function InpuData(props) {
  const dispatch = useDispatch()
  const [empData, setEmpData] = useState({ id: null, name: null, designation: null })
  const handleSave = () => {
    // console.log("empData", empData)
    dispatch(setEmployeeData(empData))
    dispatch(getEmployeeData())
  }

  const handleReset = () => {
    setEmpData({id : "", name : "", designation : ""})

  }
  const handleId = (e) => {
    console.log(e.target.value)
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
  },[])
  return (
    <>
      <Paper elevation={3}>
        <div className='input-fields'>
          <TextField label="Employee Id" onChange={handleId} />
          <TextField label="Employee Name" onChange={handleName} />
          <TextField label="Designation" onChange={handleDesigation} />

        </div>
        <div className='buttons'>
          <Button variant="contained" onClick={handleSave}>Save</Button>
          <Button variant="contained" onClick={handleReset}>Reset</Button>
        </div>
      </Paper>
      <div className='table'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Employee Id</TableCell>
                <TableCell align="right">Employee Name</TableCell>
                <TableCell align="right">Employee Designation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {console.log(props)}
              {props.LatestUserData.length > 1 && props.LatestUserData.map((row) => (
                  <TableRow
                    key={row.EmpId}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.EmpId}
                    </TableCell>
                    <TableCell align="right">{row.EmpName}</TableCell>
                    <TableCell align="right">{row.Designation}</TableCell>
                  </TableRow>
                ))}

            </TableBody>
          </Table>
        </TableContainer>
      </div>

    </>

  )
}

const mapStateToProps = (state) => {
  return {LatestUserData: state.userdataState}
  

}



export default connect(mapStateToProps)(InpuData)