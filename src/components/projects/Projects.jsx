import React from "react"
import Header from "../reusable/Header"
import IOSContainer from "./iOSContainer"
import Footer from "../reusable/Footer"

function Projects() {
  return (
    <div className="app-jsx">
      <Header />
      <div className="projects-container">
        <IOSContainer />
      </div>
      <div className="empty-container"></div>
      <Footer />
    </div>
  )
}

export default Projects
