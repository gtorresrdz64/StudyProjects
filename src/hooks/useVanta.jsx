import { useRef, useEffect, useState } from 'react'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const useVanta = () => {

    const myRefDiv= useRef(null)
    const [vanta,setVanta] = useState(0)

    console.log("myRefDiv.current",myRefDiv.current)

    useEffect(()=>{
        console.log("myRefDiv.current (en UseEffect)",myRefDiv.current)

        if(!vanta){
            setVanta(Clouds({
                THREE,
                el: myRefDiv.current
            }))
            console.log("Establezo vanta a un valor diferente de 0",vanta)
        }
        
        return () => {
            if(vanta){
                vanta.destroy()       
                console.log("Clean Resources")
            }
        }
    },[vanta])

    return myRefDiv
}

export default useVanta