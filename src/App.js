import React from "react";
import "./App.css";
import SignIn from "./SignIn";
import Flights from "./Flights";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <SignIn />
        </header>
        <Route path="/flights" component={Flights} />
      </div>
    </Router>
  );
}

export default App;
