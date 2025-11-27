import { useState } from 'react'
import { Routes, Route, HashRouter } from "react-router-dom";
import Hero from './pages/Hero.jsx'
import WhatWeDo from './pages/WhatWeDo.jsx'
import ContactUs from './pages/ContactUs.jsx'
import AboutUs from './pages/AboutUs.jsx'
import NotFound from './pages/NotFound.jsx';
import Loading from './pages/Loading.jsx';
import './App.css'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/whatwedo" element={<WhatWeDo />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/loading" element={<Loading />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  )
}
export default App
