import React from 'react'
import {render} from '@testing-library/react'
import WeatherDetails from '../WeatherDetails/WeatherDetails'


test("Render WeatherDetails",async()=>{

    const {findByText} = render(<WeatherDetails humidity={30} wind={120}></WeatherDetails>)
    const humidity= await findByText(/30/)
    const wind= await findByText(/120/)

    expect(humidity).toHaveTextContent("Humedad: 30%")
    expect(wind).toHaveTextContent("Viento: 120 KM/H")
   
})