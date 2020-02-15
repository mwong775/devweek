const axios = require('axios').default;
//console.group('Hello World!');
//https://test.api.amadeus.com/v1/shopping/flight-offers?origin=NYC&destination=MAD&departureDate=2020-10-01&max=2
var config = { url: '/shopping/flight-offers',
              baseURL: 'https://test.api.amadeus.com/v1',
              headers: {'Authorization' : 'Bearer VLlvAtGUYIOgfQn1vV5G5pSUdcTe'},
              params: {
                origin: "NYC",
                destination: "MAD",
                departureDate: "2020-10-01"
              }
             };

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
