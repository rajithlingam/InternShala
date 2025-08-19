import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(2)

  useEffect( () =>
  {
    console.log("componentDidUpdate");
    return () =>
    {
    console.log("componentWillUnmount");  
    }
  },[count])
  return (
    <>
     
    </>
  )
}

export default App
