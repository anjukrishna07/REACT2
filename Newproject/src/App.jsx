import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StateHooks from './Component/StateHooks'
import Button from './Component/Button'
import About from './Component/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StateHooks/>
      <Button/>
      <About/>
    </>
  )
}

export default App
