import React from 'react'
import CityList from './CityList'
import {action} from '@storybook/addon-actions'

export default {
    title: "CityList",
    component: CityList
}

const cities=[
    {city:"Barcelona",country:"España",countryCode:"ES"},
    {city:"Estocolmo",country:"Turquia",countryCode:"TUR"}
]

export const CityListExample= () => <CityList cities={cities} onClickCity={action("Click in list item")} />
