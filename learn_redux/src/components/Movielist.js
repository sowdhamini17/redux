import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { removeMovies } from "../movieSlice";

export const Movielist=()=>{
    const movies=useSelector((state)=>state.movies.movies)
    const dispatch=useDispatch()

    const handleRemove=(id)=>{
        dispatch(removeMovies(id))
    }
    return(
        <div>
            <h1>MOVIE LIST</h1>
           <>{movies.map((movie)=><div key={movie.id}>{movie.name}
            <button onClick={handleRemove(movie.id)}>  delete</button>
           </div>
              
        )}
           </> 
        </div>
    )

}