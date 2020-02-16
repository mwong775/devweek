import React from "react";
import "./App.css";
import SignInPage from "./SignInPage";
import FlightsPage from "./FlightsPage";
import SplashPage from "./SplashPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={SplashPage} />
          <Route path="/signIn" component={SignInPage} />
          <Route path="/flights" component={FlightsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
