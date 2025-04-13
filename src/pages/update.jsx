import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { ToastContainer, toast } from 'react-toastify';




const Update=()=>{
    const[mydata,setMydata]=useState([]);
    const loadData=async()=>{
        let api="http://localhost:3000/Employe";
        const response=await axios.get(api);
        console.log(response.data);
        setMydata(response.data)
    }
    useEffect(()=>{
        loadData();
    },[]);
    const myDel=async()=>{
        let api="http://localhost:3000/Employe"
        const response=await axios.delete(api)
        console.log(response);
        toast.warning("your Data succesfully deleted!!!")


        
    }


    let sno=0
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
          <td><i class="fa fa-trash" aria-hidden="true"></i></td>
        </tr>
            </>
        )

    })
    return(
        <>
        <h1>Welcome to the Update page</h1>
        <hr />
        <Table striped bordered hover>
      <thead>
        <tr>
            <th>S No:-</th>
          <th>Emp Number</th>
          <th>Emp Name</th>
          <th>Designation</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
      {ans}
      </tbody>
    </Table>
    <ToastContainer/>
        </>
    );
    
};
export default Update;