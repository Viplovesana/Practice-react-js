
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Insert from "./pages/insert";
import Display from "./pages/Display";
import Contact from "./pages/contact";
import Update  from "./pages/update";
import Search from "./pages/search";
import MyEdit from "./pages/MyEdit";

const App=()=>{
    return(
        <>

        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/insert" element={<Insert/>}/>
            <Route path="/display" element={<Display/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/update" element={<Update/>}/>
            <Route path="/myedit/:id" element={<MyEdit/>}/>
            <Route path="/contact" element={<Contact/>}/>
            

            </Route>
        </Routes>
        </BrowserRouter>
        
        
        </>
    )
};
export default App;



// import { useState } from "react";
// import Comp1 from "./comp1";
// const App=()=>{
// const [user,setUser]=useState("viplove")

//     return(
//         <>
//         <h1>welcome!!!  {user}</h1>
//         <Comp1 />
        
//         </>
//     )
// }
// export default App;




