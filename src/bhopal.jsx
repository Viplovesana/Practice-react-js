
import { mycontext } from "./usercontext";
import { useContext } from "react";
const Bhopal =({children})=>{
    const{name}=useContext(mycontext)
   
    return(           
        <>
        <h1>Welcome to cybrom {name} !!!</h1>
    
        </>
    )
    }
    export default Bhopal;