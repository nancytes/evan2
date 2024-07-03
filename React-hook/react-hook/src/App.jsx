import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Reacthook from './components/Reacthook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Reacthook />
       
    </>
  )
}

export default App
