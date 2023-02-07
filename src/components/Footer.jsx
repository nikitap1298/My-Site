import React from "react"
import { Routes, Route } from 'react-router-dom';

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <p className="footer-p" >Copyright ⓒ {year} Nikita Pishchugin</p>
    </footer>
  )
}

export default Footer
