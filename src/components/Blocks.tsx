/**
 * @Description Blocks Component
 * @author Shy
 * @date 17.10.2022
 */

import React, { useState } from 'react'
import tw from 'tailwind-styled-components'
import styled from 'styled-components'
import Filler from './Filler'
import Levitation from './Levitation'

interface IBlocksProps {
    id:number,
    color:string,
    min:number,
    max:number,
    description:string
}

type Handler = (e: React.ChangeEvent<HTMLInputElement>) => void

interface IStyledInput {
    type:string,
    color:string,
    min:number,
    max: number,
    value: number,
    onChange: Handler
}

export default function Blocks ({ id, color, min: minRanged, max: maxRanged, description }:IBlocksProps) {
    /* min range and max range to limit a ranged slider */
    const [minVal, setMinVal] = useState<number>(minRanged)
    const [maxVal, setMaxVal] = useState<number>(maxRanged)
    
    /* distance between two slider buttons */
    const range:number = 3
    
    
    const minHandler:Handler = (e) => {
        if (Number(e.target?.value) < minRanged) setMinVal(minRanged)
        else if (Number(e.target?.value) > maxVal - range)
            setMinVal(maxVal- range)
        else setMinVal(Number(e.target?.value))
    }
    
    const maxHandler:Handler = (e): void => {
        if (Number(e.target?.value) > maxRanged) setMaxVal(maxRanged)
        else if (Number(e.target?.value) < minVal +range)
            setMaxVal(minVal + range)
        else setMaxVal(Number(e.target?.value))
    }
    
    return (
        <div className="group">
            {/* smaller input button */}
            <StyledInput type="range"
                         color={color}
                         min={0} max={100}
                         value={minVal}
                         onChange={e => minHandler(e)}
            />
            <div className="relative mx-auto h-full w-[99%]">
                {/* filler between the button */}
                <Filler color={color} min={minVal} max={maxVal} />
                {/* display current state above when hover */}
                <Levitation mid={(maxVal + minVal) / 2}
                            color={color}
                            description={description}
                />
            </div>
        
            {/* larger input button */}
            <StyledInput type="range"
                         color={color}
                         min={0} max={100}
                         value={maxVal}
                         onChange={e => maxHandler(e)}
            />
        </div>
    )
}

/* styles for slider thumb */
const StyledSliderThumb = styled.input<{ color: string}>`
    ::-webkit-slider-thumb {
        background: ${props => props.color};
        width: 19px;
        height: 19px;
        border: 1px solid #e5e7eb;
        border-radius: 50%;
        pointer-events: auto;
        -webkit-appearance: none;
    }

    ::-moz-range-thumb {
        background: ${props => props.color};
        width: 19px;
        height: 19px;
        border-radius: 50%;
        pointer-events: auto;
        -moz-appearance: none;
    }
`

const StyledInput = tw(StyledSliderThumb)<IStyledInput>`
    absolute
    h-3
    w-full
    pointer-events-none
    bg-transparent
    appearance-none
    z-10
`
/**
 * End of Blocks Component
 */