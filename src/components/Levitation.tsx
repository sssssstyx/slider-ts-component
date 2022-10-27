/**
 * @Description Levitation Component
 * @author Shy
 * @date 17.10.2022
 */

import React, { CSSProperties, useLayoutEffect, useRef, useState } from 'react'
import tw from 'tailwind-styled-components'
import styled from 'styled-components'

interface LevitationProps {
    mid:number,
    color:string,
    description:string
}

interface  IStyledLevitation {
    ref:React.LegacyRef<HTMLDivElement>,
    color?: string,
    className?:string,
    style?: CSSProperties,
    children: string
}

export default function Levitation ({ mid, color, description }:LevitationProps) {
    /* Get DOM element */
    const ref = useRef<HTMLDivElement>(null)
    /* store element width */
    const [width, setWidth] = useState<number>(0)
    
    /* this triggers synchronously after all DOM mutations */
    useLayoutEffect(() => {
        /* clientWidth returns width with padding but without margin in px */
        if(ref.current) setWidth(ref.current?.offsetWidth)
        /* get current element's width when rendering */
    }, [])
    
    return (
        <StyledLevitation ref={ref}
                          color={color}
                          style={{backgroundColor: color, left: `calc(${mid}% - ${width / 2}px`}}
        >
            {description}
        </StyledLevitation>
    )
}

const ArrowBefore = styled.div<{ color: string }>`
    ::before {
        border-top-color: ${props => props.color};
    }
`

const StyledLevitation = tw(ArrowBefore)<IStyledLevitation>`
    before:content-[' '] absolute
    -top-16
    p-1 px-3 rounded-md
    text-lg text-center whitespace-nowrap
    scale-0 group-hover:scale-100 transition-all duration-100 origin-bottom ease-linear
    cursor-default
    before:absolute before:border-t-8 before:border-x-transparent
    before:border-x-[10px] before:left-1/2 before:-bottom-2 before:-ml-2.5
    before:pointer-events-none
`
/**
 * End of Levitation Component
 */