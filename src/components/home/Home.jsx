import React from "react"
import Header from "../reusable/Header"
import Introduction from "./Introduction"
import GetInTouch from "./Get-in-touch"
import Footer from "../reusable/Footer"

function Home() {
  return (
    <div className="app-jsx">
      <Header />
      <Introduction />
      <GetInTouch />
      <Footer />
    </div>
  )
}

export default Home