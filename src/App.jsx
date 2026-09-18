
import './App.css'
import Todo from './component/todo';
import TOdo2 from './component/todo2';

function App() {
  const array = ["miyad", "rakib", "ratul"]

  function showMessage() {
    alert("button clicked");
  }

  return (
    <>


      {/* {importing component from another file} */}
      <Todo task="learn react" isDone={true}></Todo>

      {/* conditional component */}
      <TOdo2 task1="learn javascript" IsDone={true}></TOdo2>
      <TOdo2 task1="learn php" IsDone={false}></TOdo2>
      <TOdo2 task1="learn python" IsDone={true}></TOdo2>
      
      
      
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

