import {MouseEvent, useState, useCallback} from 'react'
// import fetchText from './components/fetchText'

// const csvUrl = 'https://gist.githubusercontent.com/kasperweidick/31adaa4f29ba0469c3b00835fd75a624/raw/CSS_colors.csv'

// fetchText(csvUrl).then(text => {
//     console.log(text)
// })

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
