import { myuserContext } from "./usercontext";
import { useContext } from "react";

const Cybrom=()=>{
    const{input,setInput}=useContext(myuserContext); 

    return(
        <>

        <h1>Hello I am {input}</h1>
        <button onClick={()=>{setInput("ananya")}}>click</button>
        
        </>
    )
};
export default Cybrom;