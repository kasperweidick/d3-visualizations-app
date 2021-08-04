import { useState, useEffect } from 'react'
import { csv, scaleBand, scaleLinear, max } from 'd3'
// import useData from './components/useData'

const width = 960
const height = 500

const margin = { top: 20, right: 20, bottom: 20, left: 200 }

const csvUrl =
    'https://gist.githubusercontent.com/kasperweidick/baf467a5a6680a6bf9d30b84c7234c5c/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv'

const innerHeight = height - margin.top - margin.bottom
const innerWidth = width - margin.right - margin.bottom

const useData = () => {
    const [data, setData] = useState<Array<any>>()

    useEffect(() => {
        const row = (d: any) => {
            d['Population'] = +d['2020']
            return d
        }
        csv(csvUrl, row).then((data) => {
            setData(data.slice(0, 10))
            console.log(data.slice(0, 10))
        })
    }, [])

    return data
}

function App() {
    const data = useData()

    if (!data) {
        return <h1>Loading...</h1>
    }

    const yScale: any = scaleBand()
        .domain(data.map((d: any) => d['Country']))
        .range([0, innerHeight])

    const xScale: any = scaleLinear()
        .domain([0, max(data, (d) => d['Population'])])
        .range([0, innerWidth])

    return (
        <svg width={width} height={height}>
            <g transform={`translate(${margin.left}, ${margin.top})`}>
                {xScale.ticks().map((tickValue: number) => (
                    <g
                        key={tickValue}
                        transform={`translate(${xScale(tickValue)}, 0)`}
                    >
                        <line y2={innerHeight} stroke='black' />
                        <text
                            textAnchor='middle'
                            y={innerHeight + 3}
                            dy='0.71em'
                        >
                            {tickValue}
                        </text>
                    </g>
                ))}
                {yScale.domain().map((tickValue: number) => (
                    <text
                        key={tickValue}
                        textAnchor='end'
                        dy='0.32em'
                        x={-3}
                        y={yScale(tickValue) + yScale.bandwidth() / 2}
                    >
                        {tickValue}
                    </text>
                ))}
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
