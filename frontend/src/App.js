import React from "react";

import "./App.css";
import Login from "./Components/scripts/Auth/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Provider} from "react-redux"
import store from "./store"
import Register from "./Components/scripts/Auth/Register";
import PrivateRoute from "./Components/reusable/PrivateRoute";
import Art from "./Components/scripts/Art/Art"

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Route exact path="/" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <PrivateRoute exact path="/art" component={Art} />
      </Router>
    </Provider>
  );
}

export default App;
