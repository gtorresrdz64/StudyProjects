import React from 'react'
import Forecast from './Forecast';

export default {

    title: "Forecast",
    component: Forecast
}
const forecastItemList= [
    {hour:"12",state:"clear",temperature:"29",weekDay:"Saturday"},
    {hour:"8",state:"rain",temperature:"18",weekDay:"Sunday"}
]

export const ForecastExample= () => <Forecast forecastItemList={forecastItemList}></Forecast>
