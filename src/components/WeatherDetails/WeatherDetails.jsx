import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const WeatherDetails = ({humidity,wind}) => {
    return (
            <>
                <Typography>Humedad: {humidity}%</Typography>
                <Typography>Viento: {wind} KM/H</Typography>    
            </>
    )
}

WeatherDetails.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind:PropTypes.number.isRequired
}

export default WeatherDetails
