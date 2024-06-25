import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:false,
    todoListValue:false,
    doneListValue:false
}

const booleanSlice = createSlice({
    name:"boolean",
    initialState,
    reducers:{
        iconToggle: (state)=>{
            state.value = !state.value
        },
        booleanTodoList: (state)=>{
            state.todoListValue = !state.todoListValue
        },
        booleanDoneList: (state)=>{
            state.doneListValue = !state.doneListValue
        }
        
    }
})


export const {iconToggle, booleanTodoList, booleanDoneList} = booleanSlice.actions

export default booleanSlice.reducer