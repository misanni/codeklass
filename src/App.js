import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Landing from "./Landing";
import RegistrationForm from "./RegistrationForm";
import Home from "./Home";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/RegistrationForm">
            <RegistrationForm />
          </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
