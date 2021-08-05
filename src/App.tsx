// import { useState, useEffect } from 'react'
import { scaleBand, scaleLinear, max, ScaleBand, ScaleLinear } from 'd3'
import useData from './utility functions/useData'
import AxisBottom from './components/AxisBottom'
import AxisLeft from './components/AxisLeft'
import Marks from './components/Marks'

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
    data.map((d) => console.log(d))

    const yValue = (d: any) => d['Country']
    const xValue = (d: any) => d['Population']

    const yScale: ScaleBand<string> = scaleBand()
        .domain(data.map(yValue))
        .range([0, innerHeight])

    const xScale: ScaleLinear<number, number, never> = scaleLinear()
        .domain([0, max(data, xValue)])
        .range([0, innerWidth])

    return (
        <svg width={width} height={height}>
            <g transform={`translate(${margin.left}, ${margin.top})`}>
                <AxisBottom xScale={xScale} innerHeight={innerHeight} />
                <AxisLeft yScale={yScale} />
                <Marks
                    data={data}
                    xScale={xScale}
                    yScale={yScale}
                    xValue={xValue}
                    yValue={yValue}
                />
            </g>
        </svg>
    )
}

export default App
