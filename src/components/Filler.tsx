/**
 * @Description Filler Component
 * @author Shy
 * @date 17.10.2022
 */

import React from 'react'

interface FillerProps {
    min:number,
    max:number,
    color:string,
}

const Filler: React.FC<FillerProps> = ({ color, min, max }) =>{
    return (
        <div className="absolute h-3 rounded-md"
             color={color}
             style={{backgroundColor: color, left: `${min}%`, right: `${100 - max}%`}}
        />
    )
}
export default Filler
/**
 * End of Filler Component
 */
