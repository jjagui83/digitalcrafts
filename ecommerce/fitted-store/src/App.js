import { MainContainer } from "./StyledComponents/AppStyle";

// import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Header from "./components/Header";
import Accessories from "./components/Accessories";
import Cart from "./components/Cart";
import Fitted from "./components/Fitted"
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import {useSelector} from "react-redux";

 

function App() {
  const fitted = useSelector(state => state.FittedData)
  const item = useSelector(state => state.ItemData)
  const addToCart= useSelector(state => state.Cart)
  return (
    <Router>
      <Switch>
      <MainContainer>
      
          <Header />
        
    
        <Route exact path="/">
          <Home />
          {/* <SideBar /> */}
        </Route>
        <Route path="/fitteds">
          {/* <Fitted /> */}
          <Fitted fitted={fitted}/>
        </Route>

        <Route path="/acessories">
          <Accessories item={item}/>
        </Route>
        <Route path="/cart">
          <Cart fitted={addToCart}/>
        </Route>
        
        
       
       
        </MainContainer>
      </Switch>
      
    </Router>
  );
}

export default App;
