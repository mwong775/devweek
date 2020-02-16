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
const axios = require('axios').default;
function componentDidMount() {
  var config = { url: '/shopping/flight-offers',
              baseURL: 'https://test.api.amadeus.com/v1',
              headers: {'Authorization' : 'Bearer VLlvAtGUYIOgfQn1vV5G5pSUdcTe'},
              params: {
                origin: "NYC",
                destination: "MAD",
                departureDate: "2020-10-01"
              }
             };
  getFlights(config)
}

function getFlights(config) {
  axios(config)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}