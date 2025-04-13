import axios from "axios";
import { useState,useEffect } from "react";
import Table from 'react-bootstrap/Table';





const Display=()=>{
    const[mydata,setMydata]=useState([])

    const loadData=async()=>{
        let api="http://localhost:3000/Employe";
        const response=await axios.get(api)
        console.log(response.data);
        setMydata(response.data)

    }
    useEffect(()=>{
        loadData();
    },[]);
    let sno=0;
    const ans=mydata.map((key)=>{
        sno++;
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>{key.empno}</td>
                <td>{key.name}</td>
                <td>{key.designation}</td>
                <td>{key.salary}</td>
            </tr>
            
            </>
        )
    })
   

    return(
        <>
        <h1>Welcome to Display page</h1>
        <hr />
        <Table striped bordered hover>
      <thead>
        <tr>
            <th>S.No:-</th>
          <th>Emp number :-</th>
          <th>Emp Name :-</th>
          <th>Designation :-</th>
          <th>Salary :-</th>
        </tr>
      </thead>
      <tbody>
       {ans}
      </tbody>
    </Table>
        </>
   
    );
    
};
export default Display;