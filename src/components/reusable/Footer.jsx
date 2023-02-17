import React from "react"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <p className="footer-p" >Copyright ⓒ {year} Nikita Pishchugin</p>
    </footer>
  )
}

export default Footer
