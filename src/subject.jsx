import {  useContext } from "react";
import { mycontext } from "./collage";

const Subject=()=>{
    const{user,setUser}=useContext(mycontext);
    return(
        <>
            <div  style={{backgroundColor:"orange", height:"100"}}> 
            <h1>Welcome to subject componet! {user}</h1>
            <button onClick={()=>{setUser("hindi")}}>click here!</button>
            </div>
        
        
        </>
    )
}
export default Subject;