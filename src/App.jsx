import React from 'react'
import './App.css'
import HomePage from './Pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import Article from './Pages/Article'
import Gallery from './Pages/Gallery'

function App() {

  return (
    // <HomePage/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/article' element={<Article/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
    </Routes>
  )
}

export default App
