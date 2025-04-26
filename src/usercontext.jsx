import { createContext ,useState} from "react";



const myuserContext=createContext();

const Usercontext=({children})=>{
    const[input,setInput]=useState("viplove")

    return(
        <>

    <myuserContext.Provider value={{input,setInput}}>
        {children}

    </myuserContext.Provider>
        
        
        </>
    )
}
export default Usercontext ;

export {myuserContext};