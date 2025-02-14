import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slicess/userSlice";
import moviReducer from "./slicess/favaretsMovie"

 

 export const store =configureStore({
    reducer:{
        userData:userReducer,
        movies:moviReducer
    }
})