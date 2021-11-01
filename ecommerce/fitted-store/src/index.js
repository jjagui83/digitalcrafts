import React from 'react';
import ReactDOM from 'react-dom';
import CurrencyFormat from 'react-currency-format'
import App from './App';
import logger from "redux-logger";
import {createStore, applyMiddleware} from "redux";
import rootReducer from './reducers/rootReducer';
import { Provider } from "react-redux";
import "./media.css" 



const store= createStore(rootReducer, applyMiddleware(logger));


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}> 
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

