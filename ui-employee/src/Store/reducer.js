import * as constant from '../constant'


const initialState = { userdataState: [] }
const isEditable = false

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case constant.GET_EMP_DATA:
            let arr = []
            action.payload.map(data => {
                const newData = {
                    ...data,
                    isEditable: false

                }
                arr.push(newData)
            })
            // console.log(arr)
            return {
                ...state,
                userdataState: arr

            }

        case constant.EDIT_ROW:
            console.log(action)

        default: return { ...state }
    }

}