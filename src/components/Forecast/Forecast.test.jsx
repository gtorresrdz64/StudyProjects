import React from 'react'
import Forecast from './Forecast'
import {render} from "@testing-library/react"

const forecastItemList= [
    {hour:"12",state:"clear",temperature:"29",weekDay:"Saturday"},
    {hour:"8",state:"rain",temperature:"18",weekDay:"Sunday"}
]

test("Testing Forecast",async =>{

    const {findByTestId} =  render(<Forecast forecastItemList={forecastItemList}></Forecast>)

    const forecastItem= await findByTestId("forecast-item-container")

    expect(forecastItem).toHaveLength(1)



})