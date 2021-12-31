import { createSlice } from '@reduxjs/toolkit'

const emptyUserDetails = {}

const userDetailsSlice = createSlice({
    name: 'userDetails',
    initialState: emptyUserDetails,
    reducers: {
        editDetails: (state, action) => {
            console.log(action.payload)

            return action.payload
        },
    }
})

export const { actions, reducer } = userDetailsSlice
export const { editDetails } = actions
export default reducer