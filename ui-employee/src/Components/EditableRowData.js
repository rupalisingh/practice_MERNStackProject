import React, { useState } from 'react'
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useDispatch } from 'react-redux'
import {editRow} from '../actions'

function EditableRowData(props) {
    const dispatch = useDispatch()
    const [isEditable, setisEditable] = useState(false)

    const handleEdit = (row, UserData) => {
        console.log(UserData)
        dispatch(editRow(row, UserData))
        setisEditable(true)
    }

    const handleSaveEdit = () => {
        setisEditable(false)
    }

    const handleCancelEdit = () => {
        setisEditable(false)
    }


    return (
        <>
            {
                !isEditable ? <EditRoundedIcon onClick={() => handleEdit(props.currentRow, props.UserData)}></EditRoundedIcon> : <>
                    <div className='onEditButton'>
                        <DoneAllIcon onClick={handleSaveEdit} />
                        <CancelOutlinedIcon onClick={handleCancelEdit} />
                    </div>
                </>
            }
        </>
    )
}

export default EditableRowData