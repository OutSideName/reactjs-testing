import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import "./App.css";

import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
// middleware redux
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
// reducers
import { searchRobots, requestRobots } from "./reducers";

const logger = createLogger(); // KHông nên gọi trực tiếp function

const rootReducer = combineReducers({
  searchRobots,
  requestRobots
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
