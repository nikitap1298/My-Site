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
          <Link className="header-link" to="/about">
            About
          </Link>
          <Link className="header-link" to="/projects">
            Projects
          </Link>
          <Link className="header-link" to="/photos">
            Photos
          </Link>
          <Link className="header-link" to="/contacts">
            Contacts
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
