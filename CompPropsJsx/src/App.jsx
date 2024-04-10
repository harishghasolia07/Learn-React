import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'


function App() {
  
  return (
    <>
      <Navbar />
      <main>This is my main content</main>
      <div className='cards'>
      <Card title="Card 1" description="Card 1 desc"/>
      <Card title="Card 2" description="Card 2 desc"/>
      <Card title="Card 3" description="Card 3 desc"/>
      <Card title="Card 4" description="Card 4 desc"/>
      </div>
      <Footer />
    </>
  )
}

export default App
