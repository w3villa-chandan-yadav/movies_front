import {createSlice} from "@reduxjs/toolkit";


const initialState ={
    token:null,
    isLoading:true
}

const useSlice = createSlice({
    name:"useData",
    initialState:initialState,
    reducers:{
        logIn:(state,action)=>{
            state.token =action.payload
            state.isLoading = false
        },
        logout:(state,action)=>{
            state.token = null,
            state.isLoading =false
        }
    }
})

export const {logIn,logout} = useSlice.actions ;

export default  useSlice.reducer