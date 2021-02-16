const axios = require ('axios')

axios.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d56894af0441d016d0dcc1106236c55a')
    .then((response) => {
        // console.log(response.data)
        const temp = response.data.main.temp
        const perc = response.data.clouds.all
        console.log('it is currently '+temp +' out. '+ 'There is ' +perc + '% chance of rain')
    })
