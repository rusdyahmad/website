import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

export default function BarakatMakkiyyahTerms() {
  const title = "Barakat Makkiyyah — Terms of Service";
  const description = "Terms of Service for the Barakat Makkiyyah app.";

  return (
    <>
      <SEO
        title={title}
        description={description}
        path="/barakat-makkiyyah/terms"
        type="article"
      />

      <div className="back-strip">
        <Link to="/barakat-makkiyyah" className="back-link">
          ← cd .. // return_to_app
        </Link>
        <span className="dim">~/apps/barakat-makkiyyah/terms</span>
      </div>

      <div className="term-doc-page px">
        <div className="doc-frame">
          <div className="doc-header">
            <span className="tag xs up">[SYS] // legal_terms</span>
            <h1>Terms of Service</h1>
            <div className="doc-meta">
              <span>App: <b>Barakat Makkiyyah</b></span>
              <span>Effective: <b>January 12, 2026</b></span>
              <span>Status: <b className="ok">ACTIVE // v1.0</b></span>
            </div>
          </div>

          <div className="doc-body">
            <p className="lead" style={{ fontSize: "16px", color: "var(--fg)" }}>
              By downloading, installing, or using the Barakat Makkiyyah application, you agree to these
              Terms of Service. If you do not agree with any part of these terms, please remove the application from your device.
            </p>

            <h2>[01] // Use of the Application</h2>
            <p>
              Barakat Makkiyyah provides offline text and audio recitations for religious and personal contemplation.
              The application is provided &ldquo;as is&rdquo; without warranties of any kind. While every care has been taken to preserve text fidelity,
              readers are encouraged to cross-reference with traditional verified print editions.
            </p>

            <h2>[02] // Acceptable Use Protocol</h2>
            <ul>
              <li>Do not attempt to modify, decompile, reverse engineer, or disassemble the application binaries.</li>
              <li>Do not redistribute or mirror the bundled audio or text assets commercially without explicit authorization.</li>
              <li>Do not misuse the application or attempt to impair its execution on target devices.</li>
            </ul>

            <h2>[03] // Intellectual Property</h2>
            <p>
              All software architecture, visual user interface, branding, and typography arrangements are owned by Rusdy Ahmad
              or used under appropriate licensing. Traditional prayers and public domain spiritual texts remain in the public domain.
            </p>

            <h2>[04] // Limitation of Liability</h2>
            <p>
              In no event shall the developer be liable for any indirect, incidental, special, or consequential damages arising from
              the use of, or inability to use, the application.
            </p>

            <h2>[05] // Policy Modifications</h2>
            <p>
              We reserve the right to revise these terms as necessary. Continued use of the application following the publication
              of changes constitutes your agreement to the modified terms.
            </p>

            <h2>[06] // Contact Information</h2>
            <div className="doc-box">
              <p>For inquiries regarding these terms:</p>
              <p style={{ marginTop: "8px" }}>
                <strong>Rusdy Ahmad</strong><br />
                Email: <a href="mailto:rusdyahmad@gmail.com" className="acc">rusdyahmad@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
