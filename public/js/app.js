const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const searchedLoaction = document.querySelector('#location')
const temperature = document.querySelector('#temperature')
const humidity = document.querySelector('#humidity')
const wind_degree = document.querySelector('#wind-degree')
const weather_description = document.querySelector('#weather-description')
const last_observed = document.querySelector('#last-observed')
const message = document.querySelector('#message')
const weatherImg = document.querySelector('#weather-img')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    message.textContent = 'Loading...'
    searchedLoaction.textContent = ''
    temperature.textContent = ''
    humidity.textContent = ''
    wind_degree.textContent = ''
    weather_description.textContent = ''
    last_observed.textContent = ''
    weatherImg.src = ''
    const area = search.value
    fetch('/weather?address=' + area).then((response) => {
        response.json().then((forecastData) => {

            console.log(forecastData)
            if (forecastData.error) {
                message.textContent = forecastData.error
            } else {
                message.textContent = ''
                weatherImg.src = forecastData.weatherIcon
                searchedLoaction.textContent = forecastData.location
                temperature.textContent = forecastData.temperature + "°C"
                humidity.textContent = 'Humidity: ' + forecastData.humidity
                wind_degree.textContent = 'Wind Degree: ' + forecastData.wind_degree
                weather_description.textContent = forecastData.weather_description
                last_observed.textContent = 'Last Observed: ' + forecastData.last_observed
            }
        })
    })
})