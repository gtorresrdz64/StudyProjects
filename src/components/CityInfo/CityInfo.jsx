import React from 'react'
import 'typeface-roboto'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const CityInfo = ({city,country}) => {
    return (
        <>
            <Typography display="inline" variant="h4">{city},</Typography>
            <Typography display="inline" variant="h5">{country}</Typography>
        </>
    )
}

CityInfo.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
}

export default CityInfo
