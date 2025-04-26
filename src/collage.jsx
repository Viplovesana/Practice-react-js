
import { createContext ,useState} from "react";


const mycontext=createContext();

const Usercontext=({children})=>{
    const[user,setUser]=useState("English");
    return(
        <>
        <div style={{backgroundColor:"yellow" ,height:"100"}}>
        <h1>Welcome to collage component!</h1>
       

        <mycontext.Provider value={{user,setUser}}>
            {children}
        </mycontext.Provider>

        </div>
        </>
    )
}
export default Usercontext;
export{mycontext};