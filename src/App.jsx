



// import Component from "./Component";
// import Component2 from "./Component2";
// import Component3 from "./Component3";

// import EmpData from "./Empdata";


// const App=()=>{
//   return(
//     <>
//     <h1 align="center">Welcome viplove!!</h1>
//     <Component/>
//     <Component2/>
//     <Component3/>
    
//     </>
//   )
// }
// export default App;


///..............props.............................................................................

// import Collage from "./Collage";




// const App=()=>{
//   return(
//     <>
//     <h1 align="center">Welcome viplove!!</h1>
//     <Collage
    
//     nm="shibyiii"
//     seats={62736}
//     fees={5727273}
    
//     />
 
    
//     </>
//   )
// }
// export default App;



// /......................................................................................................

//we are passing the data with the help of props attribute


// import Collage from "./Collage";

// const name = "rgpv"
// const seats =72838
// const fees =78379

// const App = ()=>{
//   return(

//     <>
//      <h1 align="center">Welcome viplove!!</h1>
//      <Collage

//     nm={name}
//     sts={seats}          
//     fs={fees} 
//      />
    
//     </>

//   )
// }
// export default App;



///...................................................................................................

// function objects

// import Collage from "./Collage";

// const Student = {
//   name : "rgpv",
//   subject : 41,
//   fees : 45000
// }


// const App =()=>{
//   return(
// <>

// <h1 align="center">Welcome viplove!!</h1>
// <Collage

// nm={Student.name}
// sb={Student.subject}
// fs={Student.fees}

// />



// </>

//   )
// }
// export default App;


////...................................................................................





//..........Map method...............................

// const Greet = ()=>{

// const Subject = ["HTML","css","java.scipt","React","python"]

// const ans = Subject.map((key)=>{

// return(

// <option>{key}</option>

// )

// })

// return(
//     <>
    
//    <h1 align="center">Welcome viplove!!</h1>
//    <select>{ans}</select>
    
//     </>
//   )
// }
// export default Greet;





// const Drop =()=>{

//   const Subject = ["HTML","CSS","javascript","python","React"]

//   const ans = Subject.map((key)=>{
//     return(
//       <option>{key}</option>
//     )
//   })
//     return(
//     <>
//     <h1 align="center">Welcome!!!!</h1>

//     <select name="" id="">{ans}</select>
    
//     </>
//   )
// }
// export default Drop;



//..........................................................................................


// const Subject = [
//   {
//     "rollno":123,
//     "name":"viplove",
//     "city":"bhopal",
//     "fees":4500,
//   },
//   {
//     "rollno":127,
//     "name":"aryan",
//     "city":"dewas",
//     "fees":7780,
//   },
//   {
//     "rollno":125,
//     "name":"abheejet",
//     "city":"dewas",
//     "fees":4570,
//   },
//   {
//     "rollno":167,
//     "name":"kalpit",
//     "city":"kolkata",
//     "fees":4807,
//   },
//   {
//     "rollno":124,
//     "name":"jojo",
//     "city":"ujjain",
//     "fees":4700,
//   },
// ]

// const ans =Subject.map((key)=>{
// return(
// <tr>
//   <td>{key.rollno}</td>
//   <td>{key.name}</td>
//   <td>{key.city}</td>
//   <td>{key.fees}</td>
// </tr>
// )
// })
// const Data=()=>{
//   return(
//     <>
    
//     <h1 align="center">Welcome!!!!</h1>

//     <table border="2" width="500" height="400">
//       <tr>
//         <th>Rollno</th>
//         <th>Name</th>
//         <th>City</th>
//         <th>Fees</th>
//       </tr>
//       {ans}
//     </table>

    
//     </>
//   )
// }
// export default Data;




//.................................................................................................
// import EmpData from "./Empdata";
// import EmpDesign from "./EmpDesign";
// const Data = ()=>{

// const ans =EmpData.map((key)=><EmpDesign

// no={key.empno}
// nm={key.empname}
// ds={key.designation}
// sal={key.salary}



// />
  
// )

//   return(
//     <>
//     <h1 align="center">Welcome!!!!</h1>

//     <table border="2" width="600" >
//       <tr>
//         <th>Empnumber</th>
//         <th>Empname</th>
//         <th>designation</th>
//         <th>salary</th>

//       </tr>
//       {ans}
//     </table>
    
//     </>
//   )
// }

// export default Data;



///......................................................................................


// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Layout from "./Layout";

// const Data =()=>{
//   return(
//     <>
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Layout/>}>
//       <Route path="home" element={<Home/>}/>
//       <Route path="about" element={<About/>}/>
//       <Route path="Contact" element={<Contact/>}/>

//       </Route>
//     </Routes>
//     </BrowserRouter>
//     </>
//   );
// };
// export default Data;


//..............................................................................................

// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Layout from "./Layout";
// import Company from "./Company";
// import Contact from "./Contact";
// import Nofound from "./Nofound";
// import Product from "./Product";
// import Home from "./Home";



// const App=()=>{
//   return(
//     <>
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Layout/>}>
//       <Route index element={<Home/>}/>
//       <Route path="home" element={<Home/>}/>
//       <Route path="contact" element={<Contact/>}/>
//       <Route path="product" element={<Product/>}/>
//       <Route path="company" element={<Company/>}/>
//       <Route path="*" element={<Nofound/>}/>

//       </Route>
//     </Routes>
//     </BrowserRouter>
//     </>
//   );
// };
// export default App;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import Carousel from 'react-bootstrap/Carousel';
import img1 from "./images/img1.jpeg"
import img2 from "./images/img4.jpeg"
import img3 from "./images/img3.jpeg"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import my1 from "./images/t1.jpeg"
import my2 from "./images/t2.jpeg"
import my3 from "./images/t3.jpeg"
import my4 from "./images/t4.jpeg"

const App = ()=>{
  return(
      <>
   
      <h1 className="data">Welcome to cybrom</h1>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Carousel>
      <Carousel.Item>
        <img src={img1}  / >
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={my4} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={my3} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={my2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={my1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


    </div>
  
      
      </>
  )
}
export default App;