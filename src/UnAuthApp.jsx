import { useState ,useContext} from "react";
import { myContext } from "./Logincontext";


const Unauthapp=()=>{
    const[txtval,setTxtval]=useState("");
    const{login}=useContext(myContext);
    return(
        <>
        Enter name : <input type="text" value={txtval} onChange={(e)=>{setTxtval(e.target.value)}} />
        <button onClick={()=>{login(txtval)}}>login</button>
        
        </>
    )
}

export default Unauthapp;


















