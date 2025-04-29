 import { configureStore } from "@reduxjs/toolkit";
 import viplove from "./colorSlice"
 const Store=configureStore({
    reducer:{
        mycolor:viplove
    }
  

 })
 export default Store;