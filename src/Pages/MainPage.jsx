import React from 'react'
import {useHistory} from 'react-router-dom'
import CityList from '../components/CityList/CityList'
import AppFrame from '../components/AppFrame/AppFrame'
import { Paper } from '@material-ui/core'
import {getCities} from './../utils/transform/serviceCities'

const MainPage= () => {

    const history= useHistory()

    const onClickHandler= (city,countryCode) => {

        history.push(`/city/${countryCode}/${city}`)
    }

    return (
        <AppFrame>
            <Paper>
                <CityList cities={getCities()} onClickCity={onClickHandler}/>
            </Paper>
        </AppFrame>           
    )
}


export default MainPage

