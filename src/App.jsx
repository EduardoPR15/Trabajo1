import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2>ola</h2>
      <QuoteBox />
    </div>
  )
}

export default App
