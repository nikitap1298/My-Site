import React from "react"
import Header from "../reusable/Header"
import AboutMeContainer from "./AboutMeContainer"
import Footer from "../reusable/Footer"

function About() {
  return (
    <div className="app-jsx" style={{height: "100vh"}}>
      <Header />
      <AboutMeContainer />
      <Footer />
    </div>
  )
}

export default About
