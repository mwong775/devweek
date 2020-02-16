import React from "react";
import "./App.css";
import SignInPage from "./SignInPage";
import FlightsPage from "./FlightsPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={SignInPage} />
        <Route path="/flights" component={FlightsPage} />
      </div>
    </Router>
  );
}

export default App;
