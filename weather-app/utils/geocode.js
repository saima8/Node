const axios = require("axios");

const geocode = (address, callback) => {
  axios
    .get(
      "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
        encodeURIComponent(address) +
        ".json?access_token=pk.eyJ1Ijoic2FpbWFhMTgxIiwiYSI6ImNrbDhycjFkcTJpZ2Qyb29lOHN5ZTc3cW4ifQ.2MV1PumwU7OMNzpVpbZeBg&limit=1"
    )
    .then((response) => {
      console.log("Longitute is " + response.data.features[0].center[0]);
      console.log("Latitude is " + response.data.features[0].center[1]);
    })
    .catch((err) => {
      if (err.data) {
        callback("Unable to connect to location", undefined);
      } else {
        callback("Unable to connect to Mapbox", undefined);
      }
    });
};

module.exports = geocode;
