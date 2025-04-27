import { mycontext } from "./usercontext";
import { useContext } from "react";



const Student=()=>{
    const{user,setUser}=useContext(mycontext)
    return(
        <>
                <h1>Welcome : {user}</h1>
                <button onClick={()=>{setUser("jhon")}}>
                    click here
                </button>
        
        </>
    )
}
export default Student;