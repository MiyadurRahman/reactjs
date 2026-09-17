
import './App.css'

function App() {
  

  return (
    <>
      
      
          <h1>Get started</h1>
           <Person></Person>
           <Sports></Sports>
           <Sports/> {/*i can also do this  */ }
         

      
    </>
  )
}

//another component
function Person(){
  //i can also add variables
  const age=22;
  return(
    <>
     <h1>hi i am miyad</h1>
     <h2>my age is {age} </h2>

</>
  )
}
function Sports(){
  const love="football"
  return(
    <>
    <h1>i love playing {love}</h1>
    
    
    </>
  )
}

export default App
