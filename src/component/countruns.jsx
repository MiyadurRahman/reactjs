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
return(<>
    <h1>what the batsmn hits</h1>
    <button onClick={singles}>single:{count}</button>
    <button onClick={four}>four: {count}</button>
    <button>six:</button>
    
    
    
    
    </>








)





}