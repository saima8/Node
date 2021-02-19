const geocode = require ('./utils/geocode')
const forecast = require ('./utils/forecast')
geocode('Los angeles', (err, data)=> {
    console.log('Error', err)
    console.log('Data ', data)
})

forecast (-75.7088, 44.1545, (err, data) => {
    console.log('Error', err)
    console.log('Data ', data)
})