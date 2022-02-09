import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { IconContext } from 'react-icons'
import IconState, {allowValues} from './../IconState/'
import { Grid } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'

const Weather = ({temperature,state}) => {

    return (
        <Grid container item
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}>
             <IconContext.Provider value={{size:"5em"}}>
              {
                  state ? <IconState state={state}/> : <Skeleton variant='circle' height={80} width={80}></Skeleton>
              }

             </IconContext.Provider>
             {
                temperature ? <Typography display="inline" variant="h3">{temperature}</Typography> : <Skeleton variant='rect' height={80} width={80}></Skeleton>
             }
        </Grid>
            
    )
}

Weather.propTypes = {
    temperature: PropTypes.number,
    state: PropTypes.oneOf(allowValues)
}

export default Weather
