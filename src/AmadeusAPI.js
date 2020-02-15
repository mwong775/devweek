const axios = require('axios').default;
//console.group('Hello World!');

axios.get('https://test.api.amadeus.com/v1/shopping/flight-offers?origin=BOS&destination=MAD&departureDate=2020-11-25&adults=1&nonStop=false&max=50')
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
