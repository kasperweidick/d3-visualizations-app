import fetchText from './components/fetchText'

const csvUrl = 'https://gist.githubusercontent.com/kasperweidick/31adaa4f29ba0469c3b00835fd75a624/raw/CSS_colors.csv'

fetchText(csvUrl).then(text => {
    console.log(text)
})

function App() {
  return (
    <div className="App">
                
    </div>
  );
}

export default App;
