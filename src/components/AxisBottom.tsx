import { ScaleLinear } from 'd3'
import React from 'react'

// const xScale: any = scaleLinear()
//         .domain([0, max(data, (d) => d['Population'])])
//         .range([0, innerWidth])

interface AxisBottomProps {
    xScale: ScaleLinear<number, number, never>
    innerHeight: number
}

const AxisBottom: React.FC<AxisBottomProps> = ({ xScale, innerHeight }) => {
    return (
        <>
            {xScale.ticks().map((tickValue) => (
                <g
                    key={tickValue}
                    transform={`translate(${xScale(tickValue)}, 0)`}
                >
                    <line y2={innerHeight} stroke='black' />
                    <text textAnchor='middle' y={innerHeight + 3} dy='0.71em'>
                        {tickValue}
                    </text>
                </g>
            ))}
        </>
    )
}

export default AxisBottom
