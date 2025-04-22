import { useContext} from "react"
import { myContext } from "./Logincontext"


const AuthApp=()=>{
    const {user,logout}=useContext(myContext);
    return(
        <>
        <h2>Welcome{user.name}!</h2>
        <button onClick={()=>{logout()}}>logout</button>
        
        </>
    )
}
export default AuthApp;