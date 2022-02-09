import React from 'react'
import PropTypes from 'prop-types'
import {WiDayCloudy,WiDaySunny,WiRain,WiSnow,WiRaindrop,WiThunderstorm,WiNightFog,WiFog, WiDayHaze} from 'react-icons/wi'

export const allowValues= [
    "clouds",
    "fog",
    "clear",
    "rain",
    "snow",
    "drizzle",
    "thunderstorm",
    "mist",
    "haze"
]

const stateByName= {
    clouds:WiDayCloudy,
    clear:WiDaySunny,
    rain:WiRain,
    snow:WiSnow,
    drizzle:WiRaindrop,
    thunderstorm:WiThunderstorm,
    mist:WiNightFog,
    fog:WiFog,
    haze:WiDayHaze
}


const IconState = ({state}) => {

    const StateByName= stateByName[state]

    return  <StateByName/>
}

IconState.propTypes = {
    state: PropTypes.oneOf(allowValues).isRequired
}

export default IconState
