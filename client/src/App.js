import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentCooker, logoutCooker } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Particulier from "./components/layout/Particulier";
import Update from "./components/dashboard/Update";

import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Features from "./components/layout/Features";
import Pricing from "./components/layout/Pricing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/layout/Footer";


import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentCooker(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutCooker());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
     
            
          
            <Route path="/home" component={Home} />
            <Route path="/features" component={Features} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/inscrire" component={Particulier} />
            <Route path="/modifier/:id" component={Update} />
            
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>

            <Footer/>
          
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
