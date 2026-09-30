import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function SiteHeader() {
  const [clock, setClock] = useState("KUL --:--:-- GMT+8");
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Kuala_Lumpur",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const updateClock = () => {
      setClock(`KUL ${formatter.format(new Date())} GMT+8`);
    };

    updateClock();
    const timer = window.setInterval(updateClock, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const isHome = location.pathname === "/";

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header className="bar">
        <div className="bar-in">
          <Link to="/" className="logo" onClick={closeMobile}>
            RA<i>.</i>
          </Link>
          <span className="xs up mid clk" id="clock">
            {clock}
          </span>
          <span className="sp"></span>
          <nav>
            <a href={isHome ? "#work" : "/#work"}>
              <b>01</b>Work
            </a>
            <a href={isHome ? "#services" : "/#services"}>
              <b>02</b>Services
            </a>
            <a href={isHome ? "#about" : "/#about"}>
              <b>03</b>About
            </a>
            <a href={isHome ? "#notes" : "/#notes"}>
              <b>04</b>Logs
            </a>
          </nav>
          <a href={isHome ? "#contact" : "/#contact"} className="cta up xs">
            Init project →
          </a>
          <button
            type="button"
            className="nav-toggle-btn xs up"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? "[x] close" : "[=] menu"}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="mobile-nav-panel open">
          <a href={isHome ? "#work" : "/#work"} onClick={closeMobile}>
            01 // Work
          </a>
          <a href={isHome ? "#services" : "/#services"} onClick={closeMobile}>
            02 // Services
          </a>
          <a href={isHome ? "#about" : "/#about"} onClick={closeMobile}>
            03 // About
          </a>
          <a href={isHome ? "#notes" : "/#notes"} onClick={closeMobile}>
            04 // Logs
          </a>
          <a href={isHome ? "#contact" : "/#contact"} onClick={closeMobile}>
            05 // Contact
          </a>
        </div>
      )}
    </>
  );
}
