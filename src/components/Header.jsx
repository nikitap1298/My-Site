import React from "react"
import brandPic from "../images/brand.png"

function Header() {
  return (
    <header>
      <div className="header-div">
        <img class="brandPic" src={brandPic} alt="Brand-Pic" />
        <div>
          <a className="header-a" href="https://www.apple.com">About</a>
          <a className="header-a" href="https://www.apple.com">Projects</a>
          <a className="header-a" href="https://www.apple.com">Photos</a>
          <a className="header-a" href="https://www.apple.com">Contact</a>
        </div>
      </div>
    </header>
  )
}

export default Header
