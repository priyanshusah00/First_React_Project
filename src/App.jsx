import { useState } from 'react'
import './App.css'
import Navbar from './compnents/navbar'
import Body from './compnents/body'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Body/>
    </>
  )
}

export default App
