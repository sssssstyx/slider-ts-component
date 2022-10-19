/**
 * @Description Slider Component
 * @author Shy
 * @date 17.10.2022
 */

import React from 'react'
import Axis from './Axis'
import Blocks from './Blocks'

type Sliders = {
   color:string,
   range:{min:number, max:number},
   description: string
}[]

const sliders:Sliders = [
    {
        color:'#67e8f9',
        range: {min:0, max: 32},
        description: "Busy",
    },
    {
        color:'#38bdf8',
        range: {min:35, max: 60},
        description: "Coffee rest",
    },
    {
        color:'#fed7aa',
        range: {min:63, max: 77},
        description: "Business trip",
    },
    {
        color:'#c4b5fd',
        range: {min:80, max: 100},
        description: "Off duty",
    },
]

export default function Slider () {
    return (
        <div className="h-full w-full p-8 relative flex justify-center items-center">
            <Axis>
                {
                    sliders.map((s, i) => {
                        return (
                            <Blocks key={i}
                                    id={i + 1}
                                    color={s.color}
                                    min={s.range.min}
                                    max={s.range.max}
                                    description={s.description}
                            />
                        )
                    })
                }
            </Axis>
        </div>
    )
}
/**
 * End of Slider Component
 */