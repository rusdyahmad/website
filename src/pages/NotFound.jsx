import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found — RA" description="Page not found." path="/404" />
      <section className="legal reveal">
        <div className="container legal-content">
          <p className="eyebrow">404</p>
          <h1>Page not found</h1>
          <p>The page you’re looking for doesn’t exist.</p>
          <Link className="btn" to="/">
            Back to home
          </Link>
        </div>
      </section>
    </>
  );
}
