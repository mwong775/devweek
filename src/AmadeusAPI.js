
const axios = require('axios').default;
//console.group('Hello World!');
//https://test.api.amadeus.com/v1/shopping/flight-offers?origin=NYC&destination=MAD&departureDate=2020-10-01&max=2
var config = { 
              url: '/shopping/flight-offers',
              baseURL: 'https://test.api.amadeus.com/v1',
              headers: {'Authorization' : 'Bearer YCGxOxfsfPTuAWyznp36gFb8eBGO'},
              params: {
                origin: "NYC",
                destination: "MAD",
                departureDate: "2020-10-01",
                max: "10"
              }
             };

document.write("Button pressed");
function getFlights(config) {
  axios(config)
  .then(function (response) {
    // handle success
    document.write(response);
  })
  .catch(function (error) {
    // handle error
    document.write(error);
  })
  .finally(function () {
    // always executed
  });
}
document.write("Got results");
<Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField>
              {getFlights}
            </TextField>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
