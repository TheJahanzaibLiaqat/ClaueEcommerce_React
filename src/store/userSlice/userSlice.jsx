import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser:(state, action)=>{
            state.push(action.payload)
        },
        removeUser:(state, action)=>{
            return state.filter(f => f.id !== action.payload)
        },
        updateUser:(state, action)=>{},

    }
})


export default userSlice.reducer

export const {addUser , addUser2, removeUser , updateUser} = userSlice.actions