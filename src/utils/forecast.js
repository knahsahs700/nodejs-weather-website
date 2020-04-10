const request = require('request')

const forecast = (lat, long, callback) => {

    url = 'http://api.weatherstack.com/current?access_key=99b3f4664e51ec83e6482b6d689c192d&query=' + lat + '&' + long

    request({ url, json: true }, (error, { body }) => {

        if (error) {
            callback('Unable to connect to weather services!')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, body.current.weather_descriptions[0] + "!. It is currently " + body.current.temperature + " degrees out. There is a " + body.current.precip + "% chance of rain.")
        }
    })
}

module.exports = forecast