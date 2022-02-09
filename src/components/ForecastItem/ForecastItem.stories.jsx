import React from 'react'
import ForecastItem from '../ForecastItem/ForecastItem'

export default{

    title: "ForecastItem",
    component: ForecastItem

}

export const ForecastItemExample= () => <ForecastItem weekDay="Monday" hour={8} state="clear" temperature={29} ></ForecastItem>