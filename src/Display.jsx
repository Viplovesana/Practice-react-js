


import { useState,useEffect } from "react";
import axios from "axios";


const Display=()=>{
    const[mydata,setMydata]=useState([])

    const loadData=async()=>{
        let api="http://localhost:3000/Employe";
        const response= await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }


    useEffect(()=>{
        loadData();
    },[]);

    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.empno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.salary}</td>
            </tr>
            
            </>
        )

    })


    return(
        <>
        <h1>Welcome to the Display page</h1>
        <hr />
        <table border="3" cellPadding="15">
            <tr>
                <th>Empno</th>
                <th>Name</th>
                <th>City</th>
                <th>Salary</th>
            </tr>
            {ans}
        </table>
        </>
    );
    
};
export default Display;