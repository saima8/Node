const geocode = require ('./utils/geocode')
const forecast = require ('./utils/forecast')

const location = process.argv[2]

if (location){
    geocode(location, (err, data)=> {
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
} else {
    console.log('Please provide an address')
}


