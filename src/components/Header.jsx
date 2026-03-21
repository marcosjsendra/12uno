import React from 'react'
import logo from '../12uno-logo-white.svg'

function Header({ currentWord, isFading }) {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <img src={logo} alt="12uno" width="65" height="31" />
        </div>
        <div className="animated-text">
          <span className={`changing-word ${isFading ? 'fade-out' : ''}`}>{currentWord}</span>
          <span className="stable">WORKS</span>
        </div>
        <div className="credit">By Marcos Sendra</div>
      </div>
    </header>
  )
}

export default Header
