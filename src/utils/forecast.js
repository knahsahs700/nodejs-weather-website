const request = require('request')

const forecast = (lat, long, callback) => {

    url = 'http://api.weatherstack.com/current?access_key=99b3f4664e51ec83e6482b6d689c192d&query=' + lat + ',' + long

    request({ url, json: true }, (error, { body }) => {

        if (error) {
            callback('Unable to connect to weather services!')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, {
                weatherIcon: body.current.weather_icons[0],
                temperature: body.current.temperature,
                weather_description: body.current.weather_descriptions[0],
                wind_degree: body.current.wind_degree,
                humidity: body.current.humidity,
                last_observed: body.current.observation_time
            })
        }
    })
}

module.exports = forecast