import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

export default function PrivacyPolicy() {
  const title = "RA — Privacy Policy";
  const description =
    "Privacy policy for RA full-stack development services, covering data collected through email and site analytics.";

  return (
    <>
      <SEO title={title} description={description} path="/privacy-policy" type="article" />

      <div className="back-strip">
        <Link to="/" className="back-link">
          ← cd .. // return_to_home
        </Link>
        <span className="dim">~/legal/privacy-policy</span>
      </div>

      <div className="term-doc-page px">
        <div className="doc-frame">
          <div className="doc-header">
            <span className="tag xs up">[SYS] // legal_compliance</span>
            <h1>Privacy Policy</h1>
            <div className="doc-meta">
              <span>Entity: <b>Bina Aset Digital (201703444188)</b></span>
              <span>Updated: <b>January 20, 2026</b></span>
              <span>Status: <b className="ok">ACTIVE</b></span>
            </div>
          </div>

          <div className="doc-body">
            <p className="lead" style={{ fontSize: "16px", color: "var(--fg)" }}>
              This privacy policy explains how RA (Bina Aset Digital) collects, processes, and protects information
              in connection with professional full-stack development services, software products, and this website.
            </p>

            <h2>[01] // Information Collected</h2>
            <div className="doc-box">
              <ul>
                <li>
                  <strong>Contact details:</strong> Name, work email address, and organizational information shared during inquiry or contract onboarding.
                </li>
                <li>
                  <strong>Project specifications:</strong> Requirements documents, API credentials, and architecture diagrams necessary to deliver engineering milestones.
                </li>
                <li>
                  <strong>Billing metadata:</strong> Invoices, milestone completions, and payment references. Direct credit card processing is handled by licensed third-party processors.
                </li>
                <li>
                  <strong>Aggregated telemetry:</strong> Anonymized usage data (device type, referrer, page path) captured via privacy-respecting analytics for performance optimization.
                </li>
              </ul>
            </div>

            <h2>[02] // Purpose of Processing</h2>
            <ul>
              <li>To evaluate project scopes, generate engineering proposals, and deliver agreed deliverables.</li>
              <li>To coordinate development sprints, milestones, code reviews, and server deployments.</li>
              <li>To maintain invoicing records in accordance with statutory accounting obligations.</li>
            </ul>

            <h2>[03] // Information Confidentiality &amp; Third Parties</h2>
            <p>
              We do not sell, rent, or monetize client data. Technical information is shared only with trusted infrastructure providers
              (e.g., hosting platforms, version control hosts, or payment gateways) strictly necessary to fulfill project requirements.
              Mutual Non-Disclosure Agreements (NDAs) are routinely executed prior to codebase access.
            </p>

            <h2>[04] // Data Retention &amp; Rights</h2>
            <p>
              Client project repositories and configuration artifacts are retained for maintenance periods agreed in writing.
              You may request a complete export or permanent deletion of your project records at any time upon engagement conclusion.
            </p>

            <h2>[05] // Direct Contact</h2>
            <div className="doc-box">
              <p>For inquiries or data deletion requests:</p>
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
