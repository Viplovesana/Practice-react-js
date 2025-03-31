



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


const Subject = [
  {
    "rollno":123,
    "name":"viplove",
    "city":"bhopal",
    "fees":4500,
  },
  {
    "rollno":127,
    "name":"aryan",
    "city":"dewas",
    "fees":7780,
  },
  {
    "rollno":125,
    "name":"abheejet",
    "city":"dewas",
    "fees":4570,
  },
  {
    "rollno":167,
    "name":"kalpit",
    "city":"kolkata",
    "fees":4807,
  },
  {
    "rollno":124,
    "name":"jojo",
    "city":"ujjain",
    "fees":4700,
  },
]

const ans =Subject.map((key)=>{
return(
<tr>
  <td>{key.rollno}</td>
  <td>{key.name}</td>
  <td>{key.city}</td>
  <td>{key.fees}</td>
</tr>
)
})
const Data=()=>{
  return(
    <>
    
    <h1 align="center">Welcome!!!!</h1>

    <table border="2" width="500" height="400">
      <tr>
        <th>Rollno</th>
        <th>Name</th>
        <th>City</th>
        <th>Fees</th>
      </tr>
      {ans}
    </table>

    
    </>
  )
}
export default Data;