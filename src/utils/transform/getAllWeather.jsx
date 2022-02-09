import { getCityCode, toCelsius } from '../utils'
import { allowValues } from '../../components/IconState/IconState'

const getAllWeather= (response,city,countryCode) =>{

    const { data } = response
    const temperature = toCelsius(data.main.temp)
    const statefromserver = data.weather[0].main.toLowerCase()
    const state= allowValues.includes(statefromserver) ? statefromserver : null
    const propName = getCityCode(city,countryCode)
    const propValue = {temperature, state, countryCode}
    console.log(`getAllWeather::data: ${data}`)

    return ({[propName]:propValue})

}

export default getAllWeather