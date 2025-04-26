
// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Insert from "./pages/insert";
// import Display from "./pages/Display";
// import Contact from "./pages/contact";
// import Update  from "./pages/update";
// import Search from "./pages/search";
// import MyEdit from "./pages/MyEdit";



// import Cybrom from "./cybrom";

// const App=()=>{
//     return(
//         <>

//         <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<Layout/>}>
//             <Route index element={<Home/>}/>
//             <Route path="/home" element={<Home/>}/>
//             <Route path="/insert" element={<Insert/>}/>
//             <Route path="/display" element={<Display/>}/>
//             <Route path="/search" element={<Search/>}/>
//             <Route path="/update" element={<Update/>}/>
//             <Route path="/myedit/:id" element={<MyEdit/>}/>
//             <Route path="/contact" element={<Contact/>}/>
            

//             </Route>
//         </Routes>
//         </BrowserRouter>
        
        
//         </>
//     )
// };
// export default App;



// import { useState ,createContext} from "react";
// import Comp1 from "./comp1";
// const mycontext=createContext();
// const App=()=>{
// const [user,setUser]=useState("viplove!")

//     return(
//         <>
//         <h1>welcome!!!  {user}</h1>
//         <button onClick={()=>{setUser("Ananya")}}>Click Here!!</button>
//         <button onClick={()=>{setUser("viplove")}}>Click Here!!</button>
//         <mycontext.Provider value={{user,setUser}}>
//         <Comp1 />
//         </mycontext.Provider>
       
        
//         </>
//     )
// }
// export default App;
// export {mycontext} ;     


// import Bhopal from "./bhopal";




// const App =()=>{
 
// return(           
//     <>
//     <h1>Welcome!!!</h1>
//     <Bhopal/>
   
  
//     </>
// )
// }
// export default App;


// import AuthApp from "./AuthApp";
// import Unauthapp from "./UnAuthApp";
// import { useState } from "react";     
// import { myContext } from "./Logincontext"; 


// const App =()=>{
//     const{user}=useState(myContext)
 
// return(           
//     <>
//     <h1>Login page !!</h1>
//     {user.auth ? <AuthApp/> : <Unauthapp/>}
   
  
//     </>
// )
// }
// export default App;











//   import { useState,useRef, useEffect } from "react";               
 
//  const App=()=>{
//     const [name,setName]=useState("");
//     const cntRef=useRef(0)
//     console.log(cntRef)
//     useEffect(()=>{
//     cntRef.current=cntRef.current+1
//     })
  


//     return(
//         <>
        
//         enter your name : <input type="text" value={name}  onChange={(e)=>{setName(e.target.value)}}/>
//         <h1>my render count! {cntRef.current}</h1>
//         </>
//     )
//  }
//  export default App;












//  import { useRef } from "react";               
 
//  const App=()=>{
//     const myRef=useRef("")
//     const btn1=()=>{
//         myRef.current.style.color="red"
//     }
       
    
//      const btn2=()=>{

//           myRef.current.style.width="450px"
//             myRef.current.style.height="300px            "
//             myRef.current.style.border="2px,solid ,black"




//      }  
     
//      const btn3=()=>{

//      }

    
//     return(
//         <>
        
//         <button onClick={btn1}>click here</button>
//         <button onClick={btn2}>click here</button>
//          <button onClick={btn3}>click here</button>
//         <div ref={myRef}>
//             welcome to cybrom bhopal mp
//         </div>
//         </>
//     )
//  }
//  export default App;




// import { useReducer } from "react"

// const App=()=>{
//     const reducerMethod=(state,action)=>{
//         switch(action)
//         {
//             case"increament":
//             return state+1;
//             case"decreament":
//             return state-1;
//             default:
//                 return state
//         }

//     }
//     constb[Count, dispatch]=useReducer(reducerMethod,0);
//     return(
//         <>
//         <button onClick={()={dispatch("increament")}}>increament</button>
//         <h1>count : {count} </h1>
//         <button onClick={()={dispatch("decreament")}}>decreament</button>
//         </>
//     )
// }
// export default App;


//   

// import { useRef } from "react";

// const App =()=>{
//     const inputRef=useRef("");
//     const btn1=()=>{

//         inputRef.current.innerHTML="Welcome to the practice session "
//         inputRef.current.style.width="500px"
//         inputRef.current.style.height="100px"
//         inputRef.current.style.border="3px,solid,black"
//         inputRef.current.style.borderRadius="20px"
//         inputRef.current.style.backgroundColor="red"

//     }
//     const btn2=()=>{
//           inputRef.current.style.backgroundColor="green"
        
//     }
//     const btn3=()=>{
//          inputRef.current.style.backgroundColor="yellow"
        
//     }
//     return(
//         <>
//        <div ref={inputRef}>login system !</div>
//         <button onClick={btn1}>click 1</button>
//         <button onClick={btn2}>click 2</button>
//         <button onClick={btn3}>click 3</button>
//         </>
//     )
// };
// export default App;


// import { useState ,useMemo} from "react";

// const App=()=>{
//     const [add,setAdd]=useState(0);
//     const[sub,setSub]=useState(100);

//     const mymulti=useMemo(()=>{
//         console.log("*****");
//         return add*2;
//     },[add]);
//     return (
//              <>
//              <h1>Addition  {add}</h1>
//              <button onClick={()=>{setAdd(add+1)}}>Addition</button>
//              <h1>substraction  {sub}</h1>
//              <button onClick={()=>{setSub(sub-1)}}>substraction</button>
//              <hr />
//              <h2> Multiplication :{mymulti}</h2>
             
//              </>
//     )
// }
// export default App;

// import { useState,useMemo } from "react";

// const App=()=>{
//     const [mynum,setMynum]=useState("");
//     const [name,setName]=useState("");

//     // const myagevalue=useMemo(mymulti,[mynum])




//     // function mymulti(){
//     //     for(var i=0; i<10000000000; i++){}
//     //     return mynum*2
//     // }
    
    

//     return(
//         <>

//         enter number : <input type="number" value={mynum}  onChange={(e)=>{setMynum(e.target.value)}}/>
//         enter name : <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
//         {/* <h1>my age multiply by 2 is : {mymulti}</h1> */}
        
//         </>
//     )
// }
// export default App;

import Subject from "./subject";
const App=()=>{
    return(
        <>
        
       <div style={{backgroundColor:"red",height:"200"}}>
       <h1>Welcome to Cybrom!!</h1>
       <Subject/>
       </div>
        
        
        </>
    )
}
export default App;