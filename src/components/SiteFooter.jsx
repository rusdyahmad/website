import { Link } from "react-router-dom";

export default function SiteFooter() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="term-footer">
      <span>© 2007-2026 RA · rusdy.com</span>
      <div className="footer-nav">
        <a href="/#work">Work</a>
        <a href="/#services">Services</a>
        <a href="/#about">About</a>
        <Link to="/refund-policy">Refund Policy</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/shipping-policy">Shipping Policy</Link>
      </div>
      <span>core: go · next.js · flutter</span>
      <a href="#top" onClick={scrollToTop}>
        ↑ return to top
      </a>
    </footer>
  );
}
