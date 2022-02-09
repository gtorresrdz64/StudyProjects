import React from 'react'
import {render} from '@testing-library/react'
import Weather from './Weather'

test("Weather Render",async() =>{
    //AAA: Arrenge, Act, Assert
    const { findByRole } = render(<Weather temperature={10} state="rain"></Weather>)
    const temp= await findByRole("heading")

    expect(temp).toHaveTextContent("10")
})