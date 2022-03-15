import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import App from "./App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import loginReducer from "./state/reducers/loginReducer";
import outdoorReducer from "./state/reducers/outdoorReducer";
import UserReducer from './state/reducers/UserReducer'
import { weekendsVisible, eventsById } from "./state/reducers/CalenderReducer";
import notificationReducer from "./state/reducers/notificationReducer";

import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    notificationReducer,
    loginReducer,
    outdoorReducer,
    weekendsVisible,
    eventsById,
    UserReducer,
  }),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
