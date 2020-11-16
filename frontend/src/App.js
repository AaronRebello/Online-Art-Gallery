import React from "react";

import "./App.css";
import Login from "./Components/scripts/Auth/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Register from "./Components/scripts/Auth/Register";
import PrivateRoute from "./Components/reusable/PrivateRoute";
import Art from "./Components/scripts/Art/Art";
import AddArt from "./Components/scripts/Art/AddArt";
import { onLoginSuccess } from "./Components/Redux/Authentication/AuthAction";
import jwt_decode from "jwt-decode";
import setAuthToken from "./Components/utils/setAuthToken";

function App() {
  const token = localStorage.getItem("jwtToken");
  if (token) {
    setAuthToken(token);
    const decoded = jwt_decode(token);
    store.dispatch(onLoginSuccess(decoded));
  }
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/art" component={Art} />
        <PrivateRoute exact path="/addart" component={AddArt} />
      </Router>
    </Provider>
  );
}

export default App;
