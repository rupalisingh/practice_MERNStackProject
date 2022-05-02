import React, {useState} from 'react'
import { connect, useDispatch } from "react-redux";
import { Paper, TableCell, TableBody, TableRow, TableHead, TableContainer, Table, TextField } from "@mui/material"
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { deleteEmployeeData, getEmployeeData } from "../actions"
import EditableRowData from './EditableRowData';


function TableData(props) {
    const dispatch = useDispatch()
    const [editFields, seteditFields] = useState({id : '', newName : '', newDesignation : ''})
    // console.log(props)
    const handleDelete = (id) => {
        dispatch(deleteEmployeeData(id))
        dispatch(getEmployeeData())
    }

    const handleNameChange = (e, row) => {
        // console.log(e.target.value)
        seteditFields({...editFields, id : row.EmpId, newName : e.target.value})
    }

    const handleDesignationChange = (e) => {
        seteditFields({...editFields, newDesignation : e.target.value})
    }
 
    return (
        <>
            <div className='table'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Employee Id</TableCell>
                                <TableCell align="center">Employee Name</TableCell>
                                <TableCell align="center">Employee Designation</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.LatestUserData.length > 0 && props.LatestUserData.map((row) => (
                                <>
                                    <TableRow
                                        key={row.EmpId}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" align="center">
                                            {row.EmpId}
                                        </TableCell>
                                        {row.isEditable ?
                                            <>
                                                <TableCell align="center"><TextField defaultValue={row.EmpName} onChange={(e) => handleNameChange(e, row)}></TextField></TableCell>
                                                <TableCell align="center"><TextField defaultValue={row.Designation} onChange = {(e) => handleDesignationChange(e)}></TextField></TableCell>

                                            </> :
                                            <>
                                                <TableCell align="center">{row.EmpName}</TableCell>
                                                <TableCell align="center">{row.Designation}</TableCell>
                                            </>}
                                        <div className='action-button'>
                                            <TableCell align="center"><DeleteRoundedIcon onClick={() => handleDelete(row.EmpId)} /></TableCell>
                                            <TableCell align="center"><EditableRowData currentRow={row} newFieldData = {editFields}/></TableCell>
                                        </div>
                                    </TableRow>
                                </>

                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}


const mapStateToProps = (state) => {
    return { LatestUserData: state.userdataState }
}


export default connect(mapStateToProps)(TableData)