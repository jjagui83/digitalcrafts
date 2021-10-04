import Login from "./components/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Account from "./components/Account";
import ErrorPage from "./components/ErrorPage";
import Dashboard from "./components/Dashboard";
import { MainContainer } from "./StyledComponents/AppStyle";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import {useState} from "react"
import Garage from "./components/Garage";


function App() {
  const [viewSidebar, setViewSidebar ] = useState(true);
  return (
  <Router>
    <Switch>
      <MainContainer>
        <Header viewSidebar=
        {viewSidebar} setViewSidebar={setViewSidebar}/>                   
        <Sidebar viewSidebar={viewSidebar}/>

        <Route path="/login">
          <Login /> 
        </Route>
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
         <Route path="*">
          <Redirect to="/errorpage"/>            
        </Route>
    
        <Route path="/errorpage">
          <ErrorPage />
        </Route>
        
      </MainContainer>
    </Switch>
  </Router>
  );
}

export default App;
