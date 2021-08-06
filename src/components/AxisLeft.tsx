import React from 'react'
import { ScaleBand } from 'd3'

interface AxisLeftProps {
    yScale: ScaleBand<string>
}

const AxisLeft: React.FC<AxisLeftProps> = ({ yScale }) => {
    return (
        <>
            {yScale.domain().map((tickValue) => (
                <text
                    key={tickValue}
                    className='fill-current text-primary font-poppins'
                    textAnchor='end'
                    dy='0.32em'
                    x={-3}
                    y={(yScale(tickValue) || 0) + yScale.bandwidth() / 2}
                >
                    {tickValue}
                </text>
            ))}
        </>
    )
}

export default AxisLeft
