import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

export default function WaktuSolatTerms() {
  const title = "Waktu Solat — Terms of Service";
  const description = "Terms of Service for the Waktu Solat app.";

  return (
    <>
      <SEO
        title={title}
        description={description}
        path="/waktusolat/terms"
        type="article"
      />

      <div className="back-strip">
        <Link to="/waktusolat" className="back-link">
          ← cd .. // return_to_app
        </Link>
        <span className="dim">~/apps/waktusolat/terms</span>
      </div>

      <div className="term-doc-page px">
        <div className="doc-frame">
          <div className="doc-header">
            <span className="tag xs up">[SYS] // service_agreement</span>
            <h1>Terms of Service</h1>
            <div className="doc-meta">
              <span>App: <b>Waktu Solat</b></span>
              <span>Effective: <b>January 11, 2026</b></span>
              <span>Status: <b className="ok">ACTIVE // v1.0</b></span>
            </div>
          </div>

          <div className="doc-body">
            <p className="lead" style={{ fontSize: "16px", color: "var(--fg)" }}>
              By installing or accessing Waktu Solat, you agree to comply with and be bound by these
              Terms of Service. If you disagree with any portion of these terms, please discontinue use of the application.
            </p>

            <h2>[01] // Informational Purpose</h2>
            <p>
              Waktu Solat delivers prayer timetable calculations, Qiblah bearing indications, and schedule reminders.
              Times are derived from official JAKIM e-Solat data; however, local mosque visual observations or regional announcements
              should always be deferred to where discrepancy arises.
            </p>

            <h2>[02] // Compass &amp; Gyro Sensor Accuracy</h2>
            <p>
              Qiblah direction accuracy relies on internal magnetometer sensors. Environmental magnetic interference, metallic cases,
              or uncalibrated sensors may affect precision. Users are advised to calibrate device sensors using figure-8 motion before reading compass directions.
            </p>

            <h2>[03] // Acceptable Usage</h2>
            <ul>
              <li>Do not scrape, reverse engineer, or stress test the application API layers.</li>
              <li>Do not redistribute modified copies of the package binaries.</li>
            </ul>

            <h2>[04] // Limitation of Liability</h2>
            <p>
              The application is provided on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; basis without warranties of uninterrupted service.
            </p>

            <h2>[05] // Contact Operator</h2>
            <div className="doc-box">
              <p>For questions regarding these terms:</p>
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
