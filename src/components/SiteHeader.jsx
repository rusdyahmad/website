import { useState } from "react";

export default function SiteHeader() {
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => setNavOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo" href="/">
          RA<span className="dot">.</span>
        </a>
        <nav className={`nav ${navOpen ? "open" : ""}`}>
          <a href="/#work" onClick={closeNav}>
            Work
          </a>
          <a href="/#services" onClick={closeNav}>
            Services
          </a>
          <a href="/#about" onClick={closeNav}>
            About
          </a>
          <a href="/barakat-makkiyyah" onClick={closeNav}>
            Barakat Makkiyyah
          </a>
          <a href="/waktusolat" onClick={closeNav}>
            Waktu Solat
          </a>
          <a href="/#contact" className="btn btn-small" onClick={closeNav}>
            Let’s talk
          </a>
        </nav>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setNavOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
