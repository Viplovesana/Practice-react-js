
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';


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
        toast.success("your Data succesfuly save!!!")

    }
    return(
        <>

<div className='format'>
<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Empno:</Form.Label>
        <Form.Control type="email" name='empno' onChange={handleinput}/>
        <Form.Text className="text-muted">
       
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter name:</Form.Label>
        <Form.Control type="email" name='name' onChange={handleinput}/>
        <Form.Text className="text-muted">
       
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Designation:</Form.Label>
        <Form.Control type="email" name='designation' onChange={handleinput} />
        <Form.Text className="text-muted">
       
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Salary:</Form.Label>
        <Form.Control type="email" name='salary' onChange={handleinput} />
        <Form.Text className="text-muted">
       
        </Form.Text>
      </Form.Group>

     

      <Button type="submit" onClick={handlesubmit}>
        Submit
      </Button>
    </Form>
    </div>


    <ToastContainer/>
     
       

        </>
    );
    
};
export default Insert;