import React, {useState} from 'react'
import './App.css'

function App() {

  const [text, setText] = useState("")
    
  function handleChange(event) {
      const {value} = event.target
      setText(value)
  }

  function calculateWords() {
    // trim removes all whitespace
    const words = text.trim().split(" ")
    console.log(words.length)
    return words.length
  }

  return (
      <div>
          <h1>Speed typing game</h1>
          <textarea 
            onChange={handleChange} 
            value={text}
          />
          <h2>Time remaining: 5</h2>
          <button onClick={calculateWords}>start game</button>
          <h1>Word count: 0</h1>
      </div>
  )
}

export default App
