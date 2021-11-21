import {useState} from "react";
import TodoItems from "./TodoItems";




function TodoList (){
const [todoItem,setTodoItem] = useState("");
const [todoList, setTodoList] = useState([])
return (
    <div>
        <h1>Todo List</h1>
        <input onChange= {(e)=> setTodoItem(e.target.value)} type="text" placeholder="Add a to do"></input>
        <button onClick={() => setTodoList([...todoList, todoItem])}>Add Todo</button>


        <TodoItems list={todoList}/>
    </div>
)
}

export default TodoList