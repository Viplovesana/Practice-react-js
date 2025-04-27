import { createContext,useState } from "react";
const mycolor=createContext();
const Usercontext=({children})=>{
  const[color,setColor]=useState("green")
  return(
    <>
    <mycolor.Provider value={{color,setColor}}>
      {children}

    </mycolor.Provider>
    
    </>
  )
};
export default Usercontext;
export{mycolor};