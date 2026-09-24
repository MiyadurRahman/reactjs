
import './App.css'
import UserItem, { Users } from './component/array.jsx';
import Todo3 from './component/conditional_rendaring';
import Todo from './component/todo';
import TOdo2 from './component/todo2';
import Eventhandle from './component/eventhandle.jsx';
import { useState } from 'react';
import Hits from './component/countruns.jsx';


function App() {
  
  const array = ["miyad", "rakib", "ratul"]

  function showMessage() {
    alert("button clicked");
  }
function handleclick(){
  
}
  return (
    <>
    <User></User>
    <h1>starting state</h1>
      <Hits></Hits>
        <Count></Count>
     <h1>advance lists of users using map</h1>
        {
          array.map(name => <UserItem key={name} name={name} />)
        }

     <h1>array of objects example</h1>
      <Users></Users>


    <h1>handle event when clicking button</h1>

      <Eventhandle handleclick={handleclick}></Eventhandle>




     <h1>component import form another file</h1>

      {/* {importing component from another file} */}
      <Todo task="learn react" isDone={true}></Todo>
<h1> conditional redering 6 ways</h1>
      {/* conditional component */}
      <TOdo2 task1="learn javascript" IsDone={true}></TOdo2>
      <TOdo2 task1="learn php" IsDone={false}></TOdo2>
      <TOdo2 task1="learn python" IsDone={true}></TOdo2>
      
      <Todo3 task2="eat" isdone={true}></Todo3>
      <Todo3 task2="drink" isdone={false}></Todo3>
      <Todo3 task2="workout" isdone={true}></Todo3>
      
      
      <h1>Get started</h1>
      



      <Person></Person>
      <Sports></Sports>
      <Sports /> {/*i can also do this  */}
      <Student name="miyad" dep="cse"></Student>
      <Student name="siam" dep="EEE"></Student>
      <Student name="ratul" dep='pharmacy'></Student>
      <Player name="rony" runs="100"></Player>
      <Player name="Emad" ></Player>

      <User skills={array}></User>
      <Button buttonclick={showMessage} ></Button>
    </>
  )
}
//state

function Count(){
  const [count,setCount]=useState(0)
  const handleadd=()=>{
 let newvalue=count+1;
 setCount(newvalue)
  }
  return <>
  <h5>count:{count}</h5>
  <button onClick={handleadd}>add</button>
  
  
  
  
  </>
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



//props passed data from parrent to child
function Student(props) {
  console.log(props);//showing in console
  const stustyle = {
    color: 'red',
    padding: '20px'
  }
  return (
    <div style={stustyle}>
      <p>name: <span style={{ color: "white" }}>{props.name}</span></p>
      <p>department: <span style={{ color: "white" }}>{props.dep}</span></p>


    </div>

  )
}





//array props
function User({ skills }) {
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
}




//function props
function Button({ buttonclick }) {
  return (
    <>
      <button onClick={buttonclick}>
        click me
      </button>




    </>


  )


}



//destructuring
// const { name,tech}={name: 'miyad', dep: 'cse'}
// console.log(name);

function Player({ name, runs = 0 }) {
  return (

    <div className="student">

      <h3 style={{ color: 'red' }}>name: {name}</h3>
      <p>runs : {runs}</p>


    </div>







  )



}





export default App
