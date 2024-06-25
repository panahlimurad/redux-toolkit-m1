import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:[],
    dataDone:[]
}

const booleanSlice = createSlice({
    name:"data",
    initialState,
    reducers:{
    setDataRedux: (state, action)=>{
        state.data.push(action.payload)
    },
    setDataDoneRedux: (state, action)=>{
        state.dataDone.push(action.payload)
    },
    deleteDataRedux: (state, action)=>{
        state.data = state.data.filter((item)=> item !== action.payload)
    },
    deleteDataDonelist: (state, action)=>{
        state.dataDone = state.dataDone.filter((item)=> item !== action.payload)
    }
    }
})


export const {setDataRedux, setDataDoneRedux, deleteDataRedux, deleteDataDonelist} = booleanSlice.actions

export default booleanSlice.reducer