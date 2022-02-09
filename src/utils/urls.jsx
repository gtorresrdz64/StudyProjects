const apiId= "d6b8af3affdaf38a92aba2d6118d744c"

export const getWeatherUrl = ({ city, countryCode }) => (`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiId}`)

export const getForecastUrl = ({ city, countryCode }) => (`https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiId}`)

