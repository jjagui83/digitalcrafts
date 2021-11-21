import SignUpForm from "./components/SignUpForm";
import "./components/App.css"
import React, { useEffect } from 'react';
import {useDispatch} from "react-redux"



function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getweather();},[]);
    
    

 const getweather =  async () => {
    const data = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=houston&appid=ff1cadec65d9f10c3aafc2a01b14612c",
      // {
      //   methond: "GET",
      //   mode: "cors",
      //   cache: "no-cache",
      //   credentials: "same-origin",
      //   headers: {
      //     "Content-Type": "application/jaons",
      //   }
      // }
    );
    const json =await data.json();
    dispatch({type:"WEATHER_DATA",payload: { json }});
    console.log (data);

  };
  return (
    <div className="App">
     {/* <h1>APP Js</h1> */}
    <SignUpForm />
    

    </div>
  );
}

export default App;
