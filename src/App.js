import React from 'react';
import './App.css';
import SignIn from './SignIn'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          <SignIn/>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
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