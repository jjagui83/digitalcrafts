import React from 'react';
import './App.css';
import CardContainer from './components/CardContainer';
import Header from './Header';


function App() {
  const user = {
    firstName: "Jose",
    lastName: "Aguilar",
    userName: "aggie83",
  };
  const birthday = "11/12/1986";

  

  
  return (
    <div className="App">
      <Header user={user} />
      <Header user={user} birthday={birthday} />
      <CardContainer />
     
     
    </div>
  );
}

export default App;
