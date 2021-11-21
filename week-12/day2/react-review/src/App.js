import './App.css';
import {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import StudentContainer from './components/StudentContainer';






function App() {
  // const [students, setStudents] = useState(data);
  const counter= useSelector((state)=> state.counter);
  const dispatch = useDispatch()
  const [inputValue,setInputValue]= useState(0);
  // dispatch({type: "GET_STUDENTS"})
  // state is a place that we can store/hold data
  // the process of passing state is called props
  return (
    <div className="App">
      <h1>App JS</h1>
      <h3>Data Starts Here</h3>
      {counter}
      <input onChange={(e)=> setInputValue(parseInt(e.target.value))} type="text"/>
    <button onClick={()=>dispatch({type: "THE_COUNTER",payload:inputValue})}>Increse Counter</button>
      <StudentContainer />
    </div>
  );
}

export default App;
