import React from 'react';
import ReactDOM from 'react-dom';
import logger from "redux-logger";
import {createStore, applyMiddleware} from "redux";
import { Provider } from "react-redux";
import App from './App';
import rootReducer from "./reducers/rootReducer";
const store = createStore(rootReducer, applyMiddleware(logger)); 


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


