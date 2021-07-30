import {useState, useEffect} from 'react'
import {csv, arc, pie} from 'd3'



// interface IStyledDiv {
//     inputColor: string
// }

const width=960
const height=500
const centerX = width/2
const centerY = height/2

const pieArc = arc()
    .innerRadius(0)
    .outerRadius(width)

// const StyledDiv = styled.div<IStyledDiv>`
// background-color: ${props => props.inputColor || "palevioletred"};
// height: 4px;
// width: 960px;
// `


function App() {
    const [data, setData] = useState<any>()
    
    const csvUrl = 'https://gist.githubusercontent.com/kasperweidick/31adaa4f29ba0469c3b00835fd75a624/raw/CSS_colors.csv'
    
    useEffect(() => {
        csv(csvUrl).then(data => 
            {setData(data)
            console.log(data[0])
            })
        }, [])
        
        if (!data) {
            return (<h1>Loading...</h1>)
        }
        
    const colorPie = pie()
        .value(1)

    return (
    <svg width={width} height={height}>
        <g transform={`translate(${centerX}, ${centerY})`} >
        {colorPie(data)
        .map( (d:any) => (
                <path
                    key={d.data['Keyword']}
                    fill={d.data['RGB hex value']} 
                    d={pieArc(d) || ''}
                />  
            ))
        }
            
        </g>
    </svg> 
    )}

export default App;
