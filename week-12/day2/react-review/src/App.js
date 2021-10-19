import './App.css';
import {useState} from "react";
import StudentContainer from './components/StudentContainer';

export const data = [
  {name: "Jose"},
  {name: "Britt"},
  {name: "Matt"},
  {name: "Dustin"},
  {name: "Justin"},
  {name: "Kayla"},
  {name: "Deanna"},
  {name: "Cameron"},
  {name: "Tim"},
  {name: "Ron"},
  {name: "Jamie"},
  {name: "Brande"},
  {name: "Jordan"},
  {name: "Xavier"},
  {name: "Pamela"},
  {name: "Jenny"},
];





function App() {
  // const [students, setStudents] = useState(data);
  const [counter, setCounter]  = useState(0);
  // state is a place that we can store/hold data
  // the process of passing state is called props
  return (
    <div className="App">
      <h1>App JS</h1>
      <h3>Data Starts Here</h3>
      <StudentContainer />
    </div>
  );
}

export default App;
