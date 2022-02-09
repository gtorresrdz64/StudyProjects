import React from 'react'
import {render} from '@testing-library/react'
import CityInfo from './CityInfo'

test("CityInfo Render",async() =>{
    //AAA: Arrenge, Act, Assert
    const { findAllByRole } = render(<CityInfo city="Barcelona" country="España"></CityInfo>)

    const cityAndCountrycomponent= await findAllByRole("heading")

    expect(cityAndCountrycomponent[0]).toHaveTextContent("Barcelona")
    expect(cityAndCountrycomponent[1]).toHaveTextContent("España")
})