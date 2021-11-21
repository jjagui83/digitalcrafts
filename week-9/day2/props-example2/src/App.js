import House from "./components/House"
function App() {
  const couch = "Couch";
  const chair = "Chair";
  const tv = "Tv";

  
  return (
    <div className="App">
      <h1> 
        App JS
      </h1>

      <div>
      <House tv ={tv} chair={chair} couch={couch}/>
      </div>
    </div>
  );
}

export default App;
