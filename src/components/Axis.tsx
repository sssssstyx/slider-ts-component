/**
 * @Description Axis Component
 * @author Shy
 * @date 17.10.2022
 */

import React from 'react'

interface AxisProps {
    children?: JSX.Element | JSX.Element[];
}

export default function Axis (props: AxisProps) {
    return (
        <div className="relative bg-stone-300 w-full h-3 rounded-xl">
            {props.children}
        </div>
    )
}
/**
 * End of Axis Component
 */