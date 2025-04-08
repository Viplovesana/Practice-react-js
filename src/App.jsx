



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



// const App=()=>{

//   const Myname=(nm)=>{
//     alert(`my name is ${nm}`)
//   }
//   }
//   return(
//     <>
//     <h1>welcome!!</h1>

//     <button onclick={()=>{Myname("viplove")}}>click here</button>
//     </>
//   )


// export default App;


// const App=()=>{

//   const Display=(e)=>{
//     alert("Name: " + nm+ " btnName : " + e.target.name+" value :"+e.target.value);

//   }
 

//   return(
//     <>
//     <button name="myBTN" value="btn0" onClick={(e)=>{Display("neeraj",e)}}>clik here</button>
//     </>
//   )
// }
// export default App;


// const Data=()=>{

// const display=()=>{
//   alert("this is react js");
// }

//   return(
//     <>
//    <button onClick={display}>click here</button>
//     </>
//   );
// };
// export default Data;



// const App=()=>{

//   const display=()=>{
//     alert("this is my react js")
//   }

//   return(

//     <>
//     <button onClick={display}>clik here</button>
//     </>
//   )
// }
// export default App;


// const App=()=>{
// const myshow=(nm)=>{
//   alert(`my name is ${nm}`);
 
  
// }

//   return(
//     <>
//    <button onClick={()=>{myshow("viplove")}}>click here</button>
//     </>
//   )
// }
// export default App;

//.....................................................................................................

// const App=()=>{
//   const myshow=(nm,age,e)=>{
//     alert("Name: "+ nm + " "+ "Type: " + e.type + " "+ "Age: "+ age + "Name: "+" "+ e.target.name + " "+ "Value: "+ e.target.value);
   
    
//   }
  
//     return(
//       <>
//      <button name="myBTN" value="btn0" onClick={(e)=>{myshow("viplove",22,e)}}>click here</button>
//       </>
//     )
//   }
//   export default App;









//..................................................................................................


// import { useState } from "react";

// import Button from 'react-bootstrap/Button';



// const State=()=>{
//   const [cnt,SetCnt]=useState(0);

//   const myInc=()=>{
//     SetCnt(cnt+1);

//   }
//   const myDec=()=>{
//     if(cnt<1)

//       {
//       alert("count not less than 1")
//     }

//     else
//     {    
//       SetCnt(cnt-1);
//     }

//   }
//   return(
//     <>
//     <div className="count">

//       <h1>Welcome!!!</h1>

//       <Button variant="primary" onClick={myInc}>Increament</Button>

//       <h1>Count :{cnt}</h1>

//       <Button variant="primary" onClick={myDec}>Decreament</Button>

//       <Button variant="danger" onClick={()=>{SetCnt(0)}}>Reset</Button>

//     </div>
//     </>
//   )
// }
// export default State;


// ...........................................................................

// <------******* NO DEPENDENCY PASSED IMP:=>  RUNS ON EVERY RENDER  ********----->
// import { useState,useEffect } from "react";
// const App = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     setTimeout(() => {
//       setCount(count + 1);
//     }, 3000);
//   });
//   return (
//     <div>
//       <h1>hook example{count}</h1>
//     </div>
//   );
// };
// export default App;

// <------******* AN EMPTY ARRAY IMP:=> RUNS ONLY ON THE FIRST RENDER  ********----->

// import { useState, useEffect } from "react";

// const App = () => {
//   const [ count,setCount] = useState  (0);
//   useEffect(() => {
//     setTimeout(() => {
//       setCount(count + 1);
//     }, 5000);
//   }, []);
//   return <div>
//     <h1>hook {count}</h1>
//   </div>;
// };
// export default App;

//............................................................................


// import { useState,useEffect } from "react";

// const App=()=>{


//   const [count,setCount] =useState(0);
//   const [multi,setMulti] =useState(0);

// useEffect(()=>{

//   setMulti(count*2)

// },[count])
           
//   return(
//     <>
    
//     <h1>Count :  {count}</h1>

//     <h1>My count :  {multi}</h1>

//     <button onClick={()=>{setCount(count+1)}}> click me</button>
    
//     </>
//   )
// }
// export default App;     
///..............................................................................

//....***increament counts using usetate***..........................


// import { useState } from "react";
// const App=()=>{

//   const[count,setCount]=useState(0)

//   const myInc=()=>{
//     setCount(count+1)
//   }



//   return(
//     <>
    
//     <h1>useEffect Hook!!!{count}</h1>

//     <button onClick={myInc}>click</button>
    
//     </>
//   );
// };
// export default App;



//....................****lets change the color of the text by using usestae**..........

// import { useState } from "react";



// const Usestate=()=>{

//   const[color,SetColor]=useState("red")

//   return(
//     <>
    
//     <h1 style={{color:color}}>welcome to the useState!!!!{color} </h1>
//     <button onClick={()=>{SetColor("green")}}>change 1</button>
//     <button onClick={()=>{SetColor("blue")}}>change 2</button>
//     <button onClick={()=>{SetColor("brown")}}>change 3</button>
//     <button onClick={()=>{SetColor("orange")}}>change 4</button>
    
//     </>
//   )
// };

// export default Usestate;


//......***lets creat counter App **............////


// import { useState } from "react";
// import Button from 'react-bootstrap/Button';

// const App=()=>{
// const[count,setCount]=useState(0)
// const myInc=()=>{
//   setCount(count+1)
// }
// const myDec=()=>{
//   if(count<1){
//     alert(' count not less then zero')
//   }
//   else
//   {setCount(count-1)}
  
// }
//   return (
//     <>

//     <h1>Counter App</h1>
//     <Button variant="primary" onClick={myInc}>Primary</Button>
//     <h1>Count :{count}</h1>
//     <Button variant="primary" onClick={myDec}>Primary</Button>
//     <Button variant="danger" onClick={()=>{setCount(0)}}>Reset</Button>
    
//     </>
//   )
// }
// export default App;


//..........******useeffect count handling.....................**************>>>>>>>>>>>>>>>>>>>>>>
// import { useState,useEffect } from "react";

// const App = ()=>{

// const[count,setCount]=useState(0)

// useEffect(()=>{
//     setTimeout(() => {
//         setCount(count+1)
//     },2000);
   
 
// })

//     return(

//         <>
//         <h1>Hello , Welcome!!!! {count}</h1>
//         </>
//     );
// };
// export default App;



// const App =()=>{
//     return(
//         <>
//         <h1>Wecome!!!{}</h1>
//         </>
//     )
// };
// export default App;

//.........................................multiple render.............................................#

import { useState,useEffect } from "react";
const App =()=>{
    const[count,setCount]=useState(0)
    const[multi,setMulti]=useState(0)
    useEffect(()=>{                       //............doubt......................
        setMulti(count*2)
    },[count])


  
    return(
        <>
        <h1>Count one : {count}</h1>
        <h1>Count two : {multi}</h1>
        <button onClick={()=>{setCount(count+1)}}>click</button>
        </>
    )
};
export default App;







