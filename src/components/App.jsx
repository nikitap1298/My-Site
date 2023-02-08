import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./home/Home"
import About from "./about/About"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
