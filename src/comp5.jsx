
import { mycontext } from "./App";
import { useContext } from "react";


const Comp5=()=>{
    const {user,setUser}=useContext(mycontext);
    return(
        <>
        <h1>component 5!</h1>
        <h1>welcome!!!! {user}</h1>
        <button onClick={()=>{setUser("faraz")}}>Click Here!!</button>
     
        </>
    )
}
export default Comp5;