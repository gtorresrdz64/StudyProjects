import React from 'react'
import ForecastItem from './ForecastItem'
import {render} from '@testing-library/react'

test("ForecastItem Render",async ()=>{

    const {findByText} = render (<ForecastItem weekDay="Monday" hour={8} state="clear" temperature={29}/>)
    const day= await findByText("Monday")
    const hour= await findByText(8)
    const temp= await findByText("29º")

    expect(day).toHaveTextContent("Monday")
    expect(hour).toHaveTextContent("8")
    expect(temp).toHaveTextContent("29")

})