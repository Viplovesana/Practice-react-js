

import { useState } from "react";
import axios from "axios";

const Insert=()=>{
    const[input,setInput]=useState({})
    const handleinput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}));
        console.log(input);
    }
    const handlesubmit=async()=>{
        let api="http://localhost:3000/Employe";
        const res=await axios.post(api,input);
        console.log(res);
        alert("your Data inserted succesfuly")

    }
    return(
        <>
        <h1>Welcome to the Insert page</h1>
        <br />
        Enter Empno : <input type="text" name="empno" onChange={handleinput} />
        <br />
        Enter name : <input type="text" name="name" onChange={handleinput} />
        <br />
        Enter city : <input type="text" name="city" onChange={handleinput} />
        <br />
        Enter salary : <input type="text" name="salary" onChange={handleinput} />
        <br />
        <button onClick={handlesubmit}>submit!</button>
       

        </>
    );
    
};
export default Insert;