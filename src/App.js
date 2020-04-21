import React, {useState} from "react"; 
import Tweet from "./Tweet"

function App(){
  const [isRed, setRed] = useState(false)
  const [count, setCount] = useState(0)

  const [users,setUsers] = useState([
    {name: 'Ben', message: 'Hi!'},
    {name: 'Ben', message: 'ancient evils'},
    {name: 'Ben', message: 'nope.avi'},
    {name: 'Ben', message: 'l4d2'},
    {name: 'Ben', message: 'no'},
    {name: 'Alizah', message: 'wuh'},
  ])

  const Increment = () => {
    setCount (count + 1);
    setRed(!isRed);
  }

  return(
    <div>
      <h1 className={isRed ? 'red' : ''}>Change my color!</h1>
      <button onClick={Increment}>Increment</button>
      <h1>{count}</h1>
      {users.map(user =>(
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default App;