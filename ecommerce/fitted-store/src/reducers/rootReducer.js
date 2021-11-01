import { combineReducers } from "redux";
import FittedData from "./fittedData";
import ItemData from "./accessData";
import Cart from "./addToCart";








  const rootReducer = combineReducers({
    FittedData, Cart, ItemData
  })

export default rootReducer;