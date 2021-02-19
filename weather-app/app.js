const geocode = require ('./utils/geocode')
const forecast = require ('./utils/forecast')
geocode('Los angeles', (err, data)=> {
    if(err){
        return console.log(err)
    }

    forecast (data.latitude, data.longitude, (err, forecastData) => {
        if(err){
            return console.log(err)
        }
        console.log(forecastData)
    })
})

