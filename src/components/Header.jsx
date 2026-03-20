import React from 'react'

function Header({ currentWord, isFading }) {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <img src="/src/12uno-logo-white.svg" alt="12uno" width="65" height="31" />
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
