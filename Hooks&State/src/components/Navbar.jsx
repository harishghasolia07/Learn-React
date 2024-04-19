import React from 'react'
import { useEffect } from 'react'

const Navbar = ({color}) => {
//Case 1: Run on every render
useEffect(() => {
  alert("Hey! I will run on every render!")
})

//Case 2: Run only first render
useEffect(() => {
  alert("Hey! Welcome to the page! This is the first render")
}, [])

//Case 3: Run only when certain values change
useEffect(() => {
  alert("Hey! I am running because color has changed!")
}, [color])

//Example of cleanup function
useEffect(() => {
  alert("Hey! Welcome to the page! This is the first render of app.jsx")
  return () =>{ 
    alert("Component was unmounted!")
  }
} , [])
  
  return (
    <div>
        I am navbar of {color} color 
    </div>
  )
}

export default Navbar
