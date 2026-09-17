
import './App.css'

function App() {


  return (
    <>


      <h1>Get started</h1>
      <Person></Person>
      <Sports></Sports>
      <Sports /> {/*i can also do this  */}
      <Student name="miyad" dep="cse"></Student>
      <Student name="siam" dep="EEE"></Student>
      <Student name="ratul" dep='pharmacy'></Student>


    </>
  )
}

//another component
function Person() {
  //i can also add variables
  const age = 22;
  //i can give style here
  const style = {
    border: "1px solid green",

    padding: '30px',





  }
  return (
    <>
      <div style={style}>
        <h1 style={{ color: 'blue' }}>hi i am miyad</h1>
        <h2>my age is {age} </h2>
      </div>
    </>
  )
}
function Sports() {
  const love = "football"
  return (
    <>
      <h1>i love playing {love}</h1>


    </>
  )
}
function Student(props) {
const stustyle={
  color:'red',
  padding:'20px'
}
  return (
    <div style={stustyle}>
      <p>name: <span style={{color:"white"}}>{props.name}</span></p>
      <p>department: <span style={{color:"white"}}>{props.dep}</span></p>
      

    </div>

  )
}

export default App
