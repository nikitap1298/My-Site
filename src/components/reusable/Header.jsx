import React from "react"
import { Link } from "react-router-dom"
import brandPic from "../../images/brand.png"

function Header() {
  return (
    <header>
      <div className="header-div">
        <Link to="/">
          <img class="brandPic" src={brandPic} alt="Brand-Pic" />
        </Link>
        <div>
          <Link className="header-a" to="/about">
            About
          </Link>
          <a className="header-a" href="https://www.apple.com">
            Projects
          </a>
          <a className="header-a" href="https://www.apple.com">
            Photos
          </a>
          <a className="header-a" href="https://www.apple.com">
            Contact
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
