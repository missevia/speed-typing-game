import React, {useState, useEffect} from 'react'
import './App.css'

function App() {

  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(5)
  const [gameStarted, setGameStarted] = useState(false)
    
  function handleChange(event) {
      const {value} = event.target
      setText(value)
  }

  function calculateWords() {
    // trim removes all whitespace
    const words = text.trim().split(" ")
    return words.filter(word => word !== "").length
  }

  useEffect(() => {
    if (timeRemaining > 0 && gameStarted === true) {
      setTimeout(() => {
        setTimeRemaining(prevTime => prevTime - 1)
      }, 1000)
    } else {
      setGameStarted(false)
    }      
  }, [timeRemaining, gameStarted])

  return (
      <div>
          <h1>Speed typing game</h1>
          <textarea 
            onChange={handleChange} 
            value={text}
          />
          <h2>Time remaining: {timeRemaining}</h2>
          <button onClick={() => {setGameStarted(true)}}>start game</button>
          <h1>Word count: 0</h1>
      </div>
  )
}

export default App
