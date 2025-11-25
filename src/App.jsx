import { useState } from 'react'
import { Routes, Route, HashRouter } from "react-router-dom";
import Hero from './pages/Hero.jsx'
import WhatWeDo from './pages/WhatWeDo.jsx'
import './App.css'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/whatwedo" element={<WhatWeDo />} />
        <Route path="/" element={<Hero />} />
      </Routes>
    </HashRouter>
  )
}
export default App
