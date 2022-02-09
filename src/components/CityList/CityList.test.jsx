import React from 'react'
import {fireEvent, render} from '@testing-library/react'
import CityList from './CityList'

const cities=[
    {city:"Barcelona",country:"España",countryCode:"ES"},
    {city:"Estocolmo",country:"Turquia",countryCode:"TUR"}
]



test("CityList Render",async ()=>{

    const fnClick= jest.fn()

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClick}></CityList>)
    const renderConsult= await findAllByRole("button")

    expect(renderConsult).toHaveLength(2)
})

test("CityList click on item",async ()=>{

    const fnClick= jest.fn()

    const {findAllByRole}= render(<CityList cities={cities} onClickCity={fnClick}></CityList>)
    const items= await findAllByRole("button")

    fireEvent.click(items[0])

    expect(fnClick).toHaveBeenCalledTimes(1)


})