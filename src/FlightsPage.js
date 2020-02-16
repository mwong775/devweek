import React from "react";
import "./App.css";

const axios = require("axios").default;

const config = {
  url: "/shopping/flight-offers",
  baseURL: "https://test.api.amadeus.com/v1",
  headers: { Authorization: "Bearer vAfoxRpJydN5bAIl0qPB6GaJSWBjZAuH" },
  params: {
    origin: "NYC",
    destination: "MAD",
    departureDate: "2020-10-01"
  }
};

function FlightsPage() {
  return (
    <div>
      <h1>Flights Page</h1>
      <p>{getFlights(config)}</p>
    </div>
  );
}

function getFlights(config) {
  axios(config)
    .then(function(response) {
      // handle success
      console.log(response);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .finally(function() {
      // always executed
    });
}

export default FlightsPage;
