import { useState, useEffect } from 'react'
import axios from 'axios'
import { getWeatherUrl } from './../utils/urls'
import getAllWeather from './../utils/transform/getAllWeather'
import { getCityCode } from './../utils/utils'


const useCityList = (cities, allWeather, actions) => {
    //const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        const setWeather = async (city, countryCode) => {

            const url = getWeatherUrl({city, countryCode})

            try {

                const propNames= getCityCode(city, countryCode)

                //onSetAllWeather({ [propNames]:{} })
                actions({ type: 'SET_ALL_WEATHER',payload: {[propNames]:{} }})

                const response = await axios.get(url)

                const allWeatherAux = getAllWeather(response, city, countryCode)
                actions({ type:'SET_ALL_WEATHER',payload: allWeatherAux})

                //setAllWeather(allWeather => ({ ...allWeather, ...allWeatherAux }))
                //onSetAllWeather(allWeatherAux)                   
            } catch (error) {
                if (error.response) { // Errores que nos responde el server
                    setError("Ha ocurrido un error en el servidor del clima")
                } else if (error.request) { // Errores que suceden por no llegar al server
                    setError("Verifique la conexión a internet")
                } else { // Errores imprevistos
                    setError("Error al cargar los datos")
                }                
            }

        }

        
        cities.forEach(({ city, countryCode }) => {
            if(!allWeather[getCityCode(city, countryCode)]){
                setWeather(city, countryCode)
            }
        });

    }, [cities,allWeather,actions])

    return { error, setError }
}

export default useCityList
