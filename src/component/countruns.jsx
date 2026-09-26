import { useState } from "react"

export default function Hits(){
    const[count,setCount]=useState(0)
    const  singles =()=> {
       const updatesingle=count+1;
       setCount(updatesingle)
        
    }
   const  four =()=> {
       const updatesingle=count+4;
       setCount(updatesingle)
          
   }
   const  six =()=> {
       setCount(previous=>previous+6)
   }
return(<>
    <h1>what the batsmn hits</h1>
    <button onClick={singles}>single:{count}</button>
    <button onClick={four}>four: {count}</button>
    <button onClick={six}>six: {count}</button>
    
    
    
    
    </>








)





}