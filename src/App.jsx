import { useState } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Hero from './pages/Hero.jsx'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
