import {useState, useEffect} from 'react'
import {csv} from 'd3'
import message from './components/message'

function App() {
    const [data, setData] = useState<any>(null)
    
    const csvUrl = 'https://gist.githubusercontent.com/kasperweidick/31adaa4f29ba0469c3b00835fd75a624/raw/CSS_colors.csv'

    useEffect(() => {
        csv(csvUrl).then(data => {setData(data)})}, [])

    return (
        <div>
            Data is {data? message(data): 'loading...'}
        </div>
  );
}

export default App;
