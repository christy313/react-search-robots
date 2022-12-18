import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import "./index.css";
import { searchRobots, requestRobots } from "./reducers";
import { logger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
