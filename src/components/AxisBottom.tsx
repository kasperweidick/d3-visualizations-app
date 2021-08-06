import { ScaleLinear } from 'd3'
import React from 'react'

// const xScale: any = scaleLinear()
//         .domain([0, max(data, (d) => d['Population'])])
//         .range([0, innerWidth])

interface AxisBottomProps {
    xScale: ScaleLinear<number, number, never>
    innerHeight: number
    tickFormat: any
}

const AxisBottom: React.FC<AxisBottomProps> = ({
    xScale,
    innerHeight,
    tickFormat,
}) => {
    return (
        <>
            {xScale.ticks().map((tickValue) => (
                <g
                    key={tickValue}
                    transform={`translate(${xScale(tickValue)}, 0)`}
                >
                    <line y2={innerHeight} stroke='#C0C0BB' />
                    <text
                        className='fill-current text-primary font-poppins'
                        textAnchor='middle'
                        y={innerHeight + 3}
                        dy='0.71em'
                    >
                        {tickFormat(tickValue)}
                    </text>
                </g>
            ))}
        </>
    )
}

export default AxisBottom
