import Dealership from "./Components/dealership/Dealership";
import Neighborhood from "./Components/Neighborhood/Neighborhood";
import {useState} from "react";
import "./App.css"


function App() {
  const [mustang, setMustang] = useState("1967 Mustang Boss 302");
  return (
    <div className="box">
      <h1>Props Drilling</h1>
      {mustang}
    <Neighborhood mustang={mustang}/>
    <Dealership mustang={mustang}/>
    </div>
  );
}

export default App;
