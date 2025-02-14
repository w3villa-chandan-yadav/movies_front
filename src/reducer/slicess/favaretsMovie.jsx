import {createSlice} from "@reduxjs/toolkit"


const initialState ={
    moviesLike:[],
    moviesWatchLater:[],
    openTab:null
}



const moviesSlice =createSlice({
    name:"movies",
    initialState:initialState,
    reducers:{
        addMovie:(state,action)=>{
            state.movies.push(action.payload)
        },
        removeMovie:(state,action)=>{
            state.movies = state.movies.filter((ele)=>ele.id != action.payload)
        },
        addTab:(state,action)=>{
            state.openTab = action.payload
        }

    }
})

export const {addMovie , addTab,removeMovie} = moviesSlice.actions ;

export default moviesSlice.reducer;