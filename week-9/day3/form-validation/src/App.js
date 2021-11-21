import {useState} from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
// useState is hook
// state = {
//   counter:0 (state is where data is gathered)
// }
function App() {
  // hook
  const [counter,setCounter] = useState(0);
  const [userName, setUserName] = useState("");



  return (
    <div className="App">
      {/* <h1>Form Validation</h1>
      <p>User is {userName}</p>
      <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Type a username here"></input>
      <button onClick={() => setUserName("Aggie")}>Change User</button>
  

      <div>
      <p>Counter is :{counter}</p>
      <button onClick={()=>setCounter(counter+1)}>Add</button>
      <button onClick={()=>setCounter(counter-1)}>Subtract</button>
      </div>

      <form action="">
        <input type="text" />
        <input type="text" />
        <input type='button' value="Send" />
      </form> */}
      {/* <Form /> */}
      <TodoList />
    </div>
  );
}

export default App;
