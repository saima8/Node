const axios = require("axios");

const forecast = (latitude, longitude, callback) => {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d56894af0441d016d0dcc1106236c55a/'+latitude+','+longitude)
        .then((response) => {
            const temp = response.data.main.temp
            const perc = response.data.clouds.all
            console.log('it is currently '+temp +' out. '+ 'There is ' +perc + '% chance of rain')
        })
    .catch((err) => {
      if (err.data) {
        callback("Unable to connect to location", undefined);
      } else {
        callback("Unable to connect to weather service", undefined);
      }
    });
};

module.exports = forecast;
