import  {configureStore} from "@reduxjs/toolkit";
import movieReducers from "./movieSlice"

export const store=configureStore({
    reducer:{
        movies:movieReducers
    }
})