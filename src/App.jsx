



// import Component from "./Component";
// import Component2 from "./Component2";
// import Component3 from "./Component3";


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

import Collage from "./Collage";

const Student = {
  name : "rgpv",
  subject : 41,
  fees : 45000
}


const App =()=>{
  return(
<>

<h1 align="center">Welcome viplove!!</h1>
<Collage

nm={Student.name}
sb={Student.subject}
fs={Student.fees}

/>



</>

  )
}
export default App;


////...................................................................................



