import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import ForecastItem from '../ForecastItem/ForecastItem'
import {allowValues} from '../IconState'


const renderForecastItem= forecast => {

    const {weekDay,hour,state,temperature} = forecast

    return(
    <Grid 
        data-testid="forecast-item-container"
        item key={`${weekDay}${hour}`}>
        <ForecastItem 
            hour={hour}
            weekDay= {weekDay}
            state={state}
            temperature={temperature}
        ></ForecastItem>
    </Grid>
    )
}


const Forecast= ({forecastItemList}) => {

    return (
        <Grid container
            justify="space-around"
            alignItems="center">
            {
                forecastItemList.map(forecast => renderForecastItem(forecast))
            }
        </Grid>
    )
}

Forecast.propTypes = {
    forecastItemList: PropTypes.arrayOf(PropTypes.shape({
        weekDay:PropTypes.string.isRequired,
        hour:PropTypes.number.isRequired,
        state:PropTypes.oneOf(allowValues).isRequired,
        temperature: PropTypes.number.isRequired
    })).isRequired
}

export default Forecast


