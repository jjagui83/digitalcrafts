import Login from "./components/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Account from "./components/Account";

import Dashboard from "./components/Dashboard";
import { MainContainer } from "./StyledComponents/AppStyle";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import {useState} from "react"
import Garage from "./components/Garage";


function App() {
  const [viewSidebar, setViewSidebar ] = useState(true);
  const register = true;

  const user = JSON.parse(localStorage.getItem("supabase.auth.token"));
  console.log({ user });
  return (
  <Router>
    <Switch>

    {user ? (
          <>
      <Route path='/register'>
        <Login register={register}/>
      </Route>
          <MainContainer>
            <Header viewSidebar=
            {viewSidebar} setViewSidebar={setViewSidebar}/>                   
            <Sidebar viewSidebar={viewSidebar}/>


            <Route exact path="/">
              <Home /> 
            </Route>
            <Route path="/dashboard">
              <Dashboard />        
            </Route>
            <Route path="/account">
              <Account />
            </Route>
            <Route path="/garage">
              <Garage />
            </Route>
        
            
          </MainContainer>
          </>) : (
        <Route path="/login">
            <Login /> 
        </Route>
        )}
    </Switch>
  </Router>
  );
}

export default App;
