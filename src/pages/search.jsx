import axios from "axios";
import { useState } from "react";



const Search=()=>{
    const[empno,setEmpno]=useState("");
    const[mydata,setMydata]=useState([]);

    const handlesubmit=async()=>{
        let api=`http://localhost:3000/Employe/?empno=${empno}`;
        const response = await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }

    const ans= mydata.map((key)=>{
        return(
            <>
           
                <h1>Welcome :-{key.name}</h1>
                <h2>Employee Number : {key.empno}</h2>
                <h2>Designation : {key.designation}</h2>
                <h2>salary : {key.salary}</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia modi, voluptates, rerum soluta fuga iusto, totam nemo deleniti </h3>


            
            
            </>
        )

    })
    return(
        <>
        <h1>Welcome to the home page</h1>
        Enter Empno No : <input type="text" value={empno}
        onChange={(e)=>{setEmpno(e.target.value)}} />
        <button onClick={handlesubmit}>Search</button>
        <div id="searchdata">
            {ans}
        </div>
        </>


    );
    
};
export default Search;