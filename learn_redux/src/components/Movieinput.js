import React,{useState} from "react";
import { addMovies } from "../movieSlice";
import { useDispatch } from "react-redux";

export const Movieinput=()=>{
    const[newValue,setNewValue]= useState("");

    const dispatch = useDispatch()

      const handleClick=()=>{
        if(newValue){
          dispatch(addMovies(newValue));  // ✅ pass payload
            setNewValue("");
        }
      }

    return(
        <div>
            <input
            value={newValue}
             onChange={(e)=>setNewValue(e.target.value)}
            />
            <button onClick={handleClick}>ADD MOVIE</button>
        </div>
    )
}