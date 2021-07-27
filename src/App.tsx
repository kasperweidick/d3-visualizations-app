import {MouseEvent, useState, useCallback} from 'react'
import * as d3 from 'd3'

const csvUrl = 'https://gist.githubusercontent.com/kasperweidick/31adaa4f29ba0469c3b00835fd75a624/raw/CSS_colors.csv'

d3.csv(csvUrl).then(data => {
    let message = ''
        message += Math.round(d3.csvFormat.length / 1024) + ' kb \n'
        message += `${data.length} rows \n`
        message += `${data.columns.length} columns \n`
        console.log(message)
})


// fetchText(csvUrl).then(text => {
//     const data = csvParse(text) 
//     let message = ''
//     message += Math.round(text.length / 1024) + ' kb \n'
//     message += `${data.length} rows \n`
//     message += `${data.columns.length} columns \n`
//     console.log(message)
// })

// fetchText(csvUrl)

const width = 960
const height = 500
const circleRadius = 30
const initialMousePosition = {x: width/2, y: height/2}

function App() {
    const [mousePosition, setMousePosition] = useState(initialMousePosition)

    const handleMouseMove = useCallback ((event: MouseEvent) => {
        const {clientX, clientY} = event
        setMousePosition({x: clientX, y: clientY})
    }, [setMousePosition])

    return (
        <svg width={width} height={height} onMouseMove={handleMouseMove}>
            <circle cx={mousePosition.x} cy={mousePosition.y} r={circleRadius}  />
        </svg>      
  );
}

export default App;
