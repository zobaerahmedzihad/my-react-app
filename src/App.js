import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
const friends = [
  {name : 'Zihad', age : '19', gf: 'Yes'},
  {name : 'Sumon', age : '17', gf: 'NO'},
  {name : 'Jewel', age : '21', gf: 'NO'},
  {name : 'Masum', age : '15', gf: 'Yes'},
  {name : 'Bellal', age : '16', gf: 'Yes'},
]
const friendName = friends.map(friend => friend.name);


return (
    <div className="App">
      <header className="App-header">
        <p>I am a react app. </p>
        
        <Counter></Counter>
        <Users></Users>
        {
          friends.map( friend => <Friend friend = {friend}></Friend>)
        
        }
        
      </header>
    </div>
  );
}

function Users() {
  const [users , setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  },[])

  return (
   <div>
     <h2>Dynamic Data load : {users.length} </h2>
    <ul>
      {
        users.map(user => <li>{user.username}</li>)
      }
    </ul>
   </div>
  
  )
  
}
function Counter() {
 const [count , setCount] = useState(0);

  return(
    <div>
      <h1>Count : {count}</h1>
     <button onClick = {() => setCount (count + 1)}>Increase</button>
     <button onClick = {() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}


function Friend(props) {

  const friendsStyle = {
    border: '2px solid red',
    margin: '10px',
    padding: '10px',
    height: '300px',
    width: '400px',
    borderRadius: '10px'
  }
  const {name, age, gf} = props.friend;
 
  return(
    <div  style = {friendsStyle}>
      <h1>Name: {name} </h1>
      <h3>Age:  {age} </h3>
      <h2>Girl Friend: {gf}</h2>
    </div>
  )
}

export default App;
