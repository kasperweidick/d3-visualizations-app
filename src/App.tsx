// import { useState, useEffect } from 'react'
import { scaleBand, scaleLinear, max, ScaleBand, ScaleLinear } from 'd3'
import useData from './components/useData'
import AxisBottom from './components/AxisBottom'
import AxisLeft from './components/AxisLeft'

const width = 960
const height = 500

const margin = { top: 20, right: 20, bottom: 20, left: 200 }

const innerHeight = height - margin.top - margin.bottom
const innerWidth = width - margin.right - margin.bottom

function App() {
    const data = useData()

    if (!data) {
        return <h1>Loading...</h1>
    }

    const yScale: ScaleBand<string> = scaleBand()
        .domain(data.map((d) => d['Country']))
        .range([0, innerHeight])

    const xScale: ScaleLinear<number, number, never> = scaleLinear()
        .domain([0, max(data, (d) => d['Population'])])
        .range([0, innerWidth])
    console.log(xScale)

    return (
        <svg width={width} height={height}>
            <g transform={`translate(${margin.left}, ${margin.top})`}>
                <AxisBottom xScale={xScale} innerHeight={innerHeight} />
                <AxisLeft yScale={yScale} />
                {data.map((d) => (
                    <rect
                        key={d['Country']}
                        x={0}
                        y={yScale(d['Country'])}
                        width={xScale(d['Population'])}
                        height={yScale.bandwidth()}
                    />
                ))}
            </g>
        </svg>
    )
}

export default App
