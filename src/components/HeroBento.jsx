import React from 'react'

function HeroBento() {
  return (
    <section className="hero-bento-section">
      <div className="hero-bg">
        <div className="hero-bg-inner">
          <img src="/ascii-art-white.jpg" alt="" className="hero-bg-img" />
        </div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">Systems that work.<br />Built <span className="highlight">simply</span>.</h1>
        <p className="hero-subtitle">Hi, I'm <b>Marcos</b>. I learn fast. I solve problems. Chances are, I've already fixed something like yours.</p>
      </div>

      <div className="bento-grid">
        {/* Header */}
        <div className="bento-header">
          <h2>What I Do</h2>
        </div>

        {/* Service: Websites */}
        <article className="bento-item bento-service">
          <span className="bento-label">Websites</span>
          <ul className="bento-list">
            <li>Static sites</li>
            <li>WordPress</li>
            <li>Hosting & DNS</li>
            <li>Migrations</li>
            <li>Performance</li>
          </ul>
        </article>

        {/* Service: Tech Support */}
        <article className="bento-item bento-service">
          <span className="bento-label">Technical Support</span>
          <ul className="bento-list">
            <li>Server & hosting</li>
            <li>Email migrations</li>
            <li>Cloud setup</li>
            <li>Debugging</li>
          </ul>
        </article>

        {/* Service: Infrastructure */}
        <article className="bento-item bento-service">
          <span className="bento-label">Infrastructure & AI</span>
          <ul className="bento-list">
            <li>Google Workspace</li>
            <li>Domains & email</li>
            <li>Cloud servers</li>
            <li>AI automation</li>
            <li>Workflows</li>
          </ul>
        </article>

        {/* Service: Design */}
        <article className="bento-item bento-service">
          <span className="bento-label">Design</span>
          <ul className="bento-list">
            <li>Branding</li>
            <li>UI / UX</li>
            <li>Graphic design</li>
            <li>Print & digital</li>
          </ul>
        </article>

        {/* How I Work */}
        <div className="bento-item bento-how">
          <span className="bento-label">How I Work</span>
          <p className="bento-desc">Hands-on. Read documentation. Test carefully. Keep it simple.</p>
          <ul className="bento-list compact">
            <li>Find the clear solution</li>
            <li>Refine what can be improved</li>
            <li>No noise, no inflated promises</li>
            <li>Steady, reliable work</li>
          </ul>
          <p className="bento-about"><strong>12uno</strong> / January 12. A reminder to build responsibly.</p>
        </div>
      </div>
    </section>
  )
}

export default HeroBento
