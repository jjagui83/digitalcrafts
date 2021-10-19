import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from "redux";
// amazon moving in and building a store
import { Provider } from 'react-redux';
// land that the warehouse is being built on 
import logger from "redux-logger";
import './index.css';
import App from './App';
import rootReducer from "./redux/reducers/rootReducer"



const store = createStore(rootReducer, applyMiddleware(logger));
// store is filled with employees(reducers)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


