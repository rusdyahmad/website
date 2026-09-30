import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

export default function RefundPolicy() {
  const title = "RA — Refund Policy";
  const description =
    "Refund policy for RA full-stack development services, covering deposits, milestones, and cancellations.";

  return (
    <>
      <SEO title={title} description={description} path="/refund-policy" type="article" />

      <div className="back-strip">
        <Link to="/" className="back-link">
          ← cd .. // return_to_home
        </Link>
        <span className="dim">~/legal/refund-policy</span>
      </div>

      <div className="term-doc-page px">
        <div className="doc-frame">
          <div className="doc-header">
            <span className="tag xs up">[SYS] // commercial_terms</span>
            <h1>Refund Policy</h1>
            <div className="doc-meta">
              <span>Entity: <b>Bina Aset Digital (201703444188)</b></span>
              <span>Updated: <b>January 20, 2026</b></span>
              <span>Model: <b className="ok">MILESTONE DELIVERY</b></span>
            </div>
          </div>

          <div className="doc-body">
            <p className="lead" style={{ fontSize: "16px", color: "var(--fg)" }}>
              This refund policy applies to RA&apos;s full-stack development contracts, engineering consulting,
              web applications, APIs, and mobile app builds. Each project engagement is structured around clearly scoped milestones.
            </p>

            <h2>[01] // Deposits &amp; Sprint Kickoff</h2>
            <p>
              Initial deposits reserve dedicated calendar slots and cover discovery, technical architecture planning,
              infrastructure provisioning, and project initialization. Once sprint work commences, deposits are non-refundable.
            </p>

            <h2>[02] // Milestones &amp; Work in Progress</h2>
            <p>
              Milestone payments cover engineering completed within that specific phase. Once a milestone is reviewed,
              approved, and code is delivered to client repositories, that milestone fee is non-refundable.
              If an in-progress milestone is halted prior to completion, compensation is prorated based on delivered code commits and technical artifacts.
            </p>

            <h2>[03] // Project Cancellation</h2>
            <p>
              Either party may terminate an engagement with written notice via email. Invoicing will cover verified hours or milestones
              achieved up to the cancellation notice. Any unbilled, unstarted phases will not be charged.
            </p>

            <h2>[04] // Defect Rectification &amp; Warranty Window</h2>
            <p>
              Deliverables come with a complimentary 30-day post-launch bug rectification window for any issues directly resulting
              from deviations from the agreed technical specification.
            </p>

            <h2>[05] // Direct Contact</h2>
            <div className="doc-box">
              <p>For billing clarifications or invoice reconciliation:</p>
              <p style={{ marginTop: "8px" }}>
                <strong>RA / Bina Aset Digital</strong><br />
                Email: <a href="mailto:me@rusdy.com" className="acc">me@rusdy.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
