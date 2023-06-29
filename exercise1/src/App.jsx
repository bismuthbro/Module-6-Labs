import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GreetingComponent from './GreetingComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GreetingComponent name='John'><p>This message was sent via children</p></GreetingComponent>
    </>
  )
}

export default App
