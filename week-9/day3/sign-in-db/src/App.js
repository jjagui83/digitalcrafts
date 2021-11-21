import {useState} from "react";
import Db from "./Components/Db";
import SignUp from "./Components/SignUp";
import "./App.css"


function App() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [dob, setDob] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zipcode, setZipCode] = useState("")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")

  const [signUpUser, setsignUpUser] = useState([])



  const SubmitButton = () => {
    setsignUpUser([...signUpUser,firstName + " " + lastName, dob, address, city + ", " + state + " " + zipcode, userName, email])
  } 


  return (
    <div className="App">
      <h1>Welcome</h1>
      
    
    <SignUp SubmitButton= {SubmitButton} firstName = {setFirstName} lastName ={setLastName} dob ={setDob} address ={setAddress} city={setCity}  state={setState} zipcode={setZipCode} signUpUser={setsignUpUser} email ={setEmail} userName={setUserName}/>

      <Db data={signUpUser}/>
    
 


    

    </div>
    




  );
  };

export default App;
