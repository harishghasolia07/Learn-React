import './App.css'

import { useState,useEffect } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(0)
  // let a=10;

  useEffect(() => {
    alert("Count has been updated!")
    setColor(color+1) 
  }, [count])

  return (
    <>
     <Navbar color={"Navy "+"blue "+color} />
     <div>The Count is {count}</div>
     <button onClick={()=>{setCount(count+1)}}>Update Count</button>

     {/* <div>The Count is {a}</div>
     <button onClick={()=>{a = a+2}}>Update Count</button> */ }
    </>
  )
}

export default App
