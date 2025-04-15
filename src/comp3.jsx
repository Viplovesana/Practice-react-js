
import Comp4 from "./comp4";
import { useContext } from "react";
import { mycontext } from "./App";
    
const Comp3=()=>{
    const{user}=useContext(mycontext)
    return(
        <>
        <h1>component 3! {user}</h1>
        <Comp4 />
        </>
    )
}
export default Comp3;