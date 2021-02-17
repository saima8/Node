const axios = require ('axios')

// axios.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d56894af0441d016d0dcc1106236c55a')
//     .then((response) => {
//         // console.log(response.data)
//         const temp = response.data.main.temp
//         const perc = response.data.clouds.all
//         console.log('it is currently '+temp +' out. '+ 'There is ' +perc + '% chance of rain')
//     })
//     .catch((err) => {
//         if (err.response.data){
//                 console.log('Can not find the exact location')
//         } else {
//             console.log('Unable to connect to weather service')

//         }
        
//     })

axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2FpbWFhMTgxIiwiYSI6ImNrbDhycjFkcTJpZ2Qyb29lOHN5ZTc3cW4ifQ.2MV1PumwU7OMNzpVpbZeBg&limit=1')
    .then((response) => {
        console.log('Longitute is ' +response.data.features[0].center[0])
        console.log('Latitude is ' +response.data.features[0].center[1])
    })
    .catch((err) => {
        if(err.response.data){
            console.log('Unable to connect to location')
        } else {
            console.log('Unable to connect to Mapbox')
        }
    })

