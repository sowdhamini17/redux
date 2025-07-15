import { createSlice } from "@reduxjs/toolkit";

const initialState={
    movies:[{id:1,name:"interstellar"},{id:2,name:"lucy"}],
}
const movieSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
           
        addMovies:(state,action)=>{
            const newMovie={
              id:state.movies[state.movies.length-1]+1,
              name:action.payload,
            }  
            state.movies.push(newMovie)},
       removeMovies:(state,action)=>{
        state.movies = state.movies.filter((movie)=>
        movie.id!==action.payload )
       }
    }
})

export const {addMovies,removeMovies}=movieSlice.actions;
export default movieSlice.reducer;