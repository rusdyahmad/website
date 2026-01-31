import { useState } from "preact/hooks";

export default function SiteHeader() {
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => setNavOpen(false);

  return (
    <header class="site-header">
      <div class="container header-inner">
        <a class="logo" href="/">
          RA<span class="dot">.</span>
        </a>
        <nav class={`nav ${navOpen ? "open" : ""}`}>
          <a href="/#work" onClick={closeNav}>Work</a>
          <a href="/#services" onClick={closeNav}>Services</a>
          <a href="/#about" onClick={closeNav}>About</a>
          <a href="/waktusolat" onClick={closeNav}>Waktu Solat</a>
          <a href="/#contact" class="btn btn-small" onClick={closeNav}>
            Let's talk
          </a>
        </nav>
        <button
          class="nav-toggle"
          aria-label="Toggle navigation"
          type="button"
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
