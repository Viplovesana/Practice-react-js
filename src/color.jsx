import { mycolor } from "./usercontext";
import { useContext } from "react";

const Color=()=>{
    const{color,setColor}=useContext(mycolor)
    return(
        <>
        <div style={{ backgroundColor:color,height:"200px",width:"300px",border:"1px solid black"}} >{color}</div>
        <button onClick={()=>{setColor("red")}}>click here</button>
        </>
    )
}
export default Color;