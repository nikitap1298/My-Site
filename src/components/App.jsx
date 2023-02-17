import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./home/Home"
import About from "./about/About"
import Projects from "./projects/Projects"
import Photos from "./photos/Photos"
import Contacts from "./contacts/Contacts"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="photos" element={<Photos />} />
        <Route path="contacts" element={<Contacts />} />
      </Routes>
    </div>
  )
}

export default App
