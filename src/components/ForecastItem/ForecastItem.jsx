import React from 'react'
import PropTypes from 'prop-types'
import { Typography }  from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { IconContext } from 'react-icons'
import IconState, {allowValues} from '../IconState'

function ForecastItem({weekDay,hour,state,temperature}) {
    return (

        <Grid container
              direction="column"
              justify="center"
              alignItems="center"
        >
            <Grid className="item">
                <Typography>{weekDay}</Typography>
            </Grid>
            <Grid className="item">
                <Typography>{hour}</Typography>
            </Grid>
            <Grid className="item">
            <IconContext.Provider value={{size:"5em"}}>
            <IconState state={state}/>
            </IconContext.Provider>
            </Grid>
            <Grid className="item">
                <Typography>{temperature}º</Typography>
            </Grid>
        </Grid>
    )
}

ForecastItem.propTypes = {
    weekDay:PropTypes.string.isRequired,
    hour:PropTypes.number.isRequired,
    state:PropTypes.oneOf(allowValues).isRequired,
    temperature: PropTypes.number.isRequired
}

export default ForecastItem

