import { useState } from 'react'
import './App.css'
import { Fixtures } from './pages/Fixtures'
import { MatchView } from './pages/MatchView'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Fixtures/>
  )
}

export default App
