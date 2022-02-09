import React from 'react'
import { Grid, LinearProgress } from '@material-ui/core'
import CityInfo from '../components/CityInfo/CityInfo'
import Weather from '../components/Weather/Weather'
import WeatherDetails from '../components/WeatherDetails/WeatherDetails'
import Forecast from '../components/Forecast/Forecast'
import ForecastChart from '../components/ForecastChart/ForecastChart'
import AppFrame from '../components/AppFrame/AppFrame'
import useCityPage from './../hooks/useCityPage'
import useCityList from '../hooks/useCityList'
import { getCityCode } from '../utils/utils'

const CityPage=() => {
    
    const {city, chartData, countryCode, forecastItemList}= useCityPage()

    const { allWeather } = useCityList([{ city, countryCode }])

    const weather = allWeather[getCityCode(city, countryCode)]

    

    const country= "Argentina"
    const humidity=80
    const wind=5

    const state= weather && weather.state
    const temperature= weather && weather.temperature

    return (
        <AppFrame>
            <Grid container 
                justify="center"
                direction="column"
                spacing={2}>
                <Grid item container
                    xs={12}
                    justify="center"
                    alignItems="flex-end">
                    <CityInfo city={city} country={country}/>
                </Grid>
                <Grid container item xs={12}
                    justify="center">
                        <Weather state={state} temperature={temperature}/>
                        <WeatherDetails humidity={humidity} wind={wind}/>
                </Grid>
                <Grid item>
                    {
                        !chartData && !forecastItemList && <LinearProgress/>
                    }
                </Grid>
                <Grid item>
                    {
                        chartData && <ForecastChart data={chartData}/>
                    }
                    
                </Grid>
                <Grid item>
                    {
                       forecastItemList && <Forecast forecastItemList={forecastItemList}/>
                    }
                    
                </Grid>
            </Grid>
        </AppFrame>
    )
}

export default CityPage

