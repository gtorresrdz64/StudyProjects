import React from 'react'
import WeatherDetails from '../WeatherDetails/WeatherDetails'

export default {

    title: "WeatherDetails",
    component: WeatherDetails

}

export const WeatherDetailsExample= () => <WeatherDetails humidity={5} wind={80}></WeatherDetails>
