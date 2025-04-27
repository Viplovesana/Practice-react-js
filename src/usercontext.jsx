
import { createContext,useState } from "react";
const mycontext=createContext()

const Usercontext=({children})=>{
    const [user,setUser]=useState("viplove")
  return(
    <>
    <mycontext.Provider value={{user,setUser}}>
        {children}
    </mycontext.Provider>
  
    </>
  )
}
export default Usercontext;
export{mycontext};