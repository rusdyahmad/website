import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

export default function ShippingPolicy() {
  const title = "RA — Shipping & Delivery Policy";
  const description =
    "Shipping and delivery policy for RA full-stack development services and digital deliverables.";

  return (
    <>
      <SEO title={title} description={description} path="/shipping-policy" type="article" />

      <div className="back-strip">
        <Link to="/" className="back-link">
          ← cd .. // return_to_home
        </Link>
        <span className="dim">~/legal/shipping-policy</span>
      </div>

      <div className="term-doc-page px">
        <div className="doc-frame">
          <div className="doc-header">
            <span className="tag xs up">[SYS] // fulfillment_policy</span>
            <h1>Delivery Policy</h1>
            <div className="doc-meta">
              <span>Entity: <b>Bina Aset Digital (201703444188)</b></span>
              <span>Updated: <b>January 20, 2026</b></span>
              <span>Format: <b className="ok">100% ELECTRONIC / ZERO FREIGHT</b></span>
            </div>
          </div>

          <div className="doc-body">
            <p className="lead" style={{ fontSize: "16px", color: "var(--fg)" }}>
              RA provides software engineering, cloud infrastructure deployment, and digital product consulting.
              All project assets and deliverables are transmitted and provisioned electronically.
            </p>

            <h2>[01] // Electronic Delivery Protocol</h2>
            <p>
              Deliverables are provided via Git version control repositories (GitHub, GitLab), private artifact registries,
              direct cloud container deployments, or secure encrypted archives as stipulated in the project statement of work.
            </p>

            <h2>[02] // Delivery Timelines</h2>
            <p>
              Milestone delivery schedules are detailed in each engineering contract. Typical full-stack sprint deliverables
              are deployed to staging environments on a bi-weekly cadence with continuous integration checks.
            </p>

            <h2>[03] // Acceptance &amp; Production Sign-off</h2>
            <p>
              Upon delivery to the staging environment or repository pull request, clients have a defined review window (typically 5 to 7 business days)
              to verify deliverables against acceptance criteria.
            </p>

            <h2>[04] // Physical Hardware (Exceptions Only)</h2>
            <p>
              In specialized IoT or hardware deployment engagements where physical microcontrollers, sensors, or point-of-sale terminals
              are required, courier arrangements, customs documentation, and insured freight will be itemized separately in writing prior to dispatch.
            </p>

            <h2>[05] // Direct Contact</h2>
            <div className="doc-box">
              <p>For delivery coordination or repository permissions:</p>
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
