// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn.js";
import Profile from "./Profile";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/SignUp" component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
