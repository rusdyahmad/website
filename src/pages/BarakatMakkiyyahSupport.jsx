import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

export default function BarakatMakkiyyahSupport() {
  const title = "Barakat Makkiyyah — Support & Diagnostics";
  const description = "Support and contact information for the Barakat Makkiyyah app.";

  return (
    <>
      <SEO
        title={title}
        description={description}
        path="/barakat-makkiyyah/support"
        type="article"
      />

      <div className="back-strip">
        <Link to="/barakat-makkiyyah" className="back-link">
          ← cd .. // return_to_app
        </Link>
        <span className="dim">~/apps/barakat-makkiyyah/support</span>
      </div>

      <div className="term-doc-page px">
        <div className="doc-frame">
          <div className="doc-header">
            <span className="tag xs up">[SYS] // app_support_terminal</span>
            <h1>Help &amp; Support</h1>
            <div className="doc-meta">
              <span>App: <b>Barakat Makkiyyah</b></span>
              <span>Status: <b className="ok">TICKETING OPEN</b></span>
              <span>SLA: <b>&lt; 24h Response</b></span>
            </div>
          </div>

          <div className="doc-body">
            <p className="lead" style={{ fontSize: "16px", color: "var(--fg)" }}>
              Need assistance with Barakat Makkiyyah? Review the troubleshooting steps below or submit diagnostic details to our support queue.
            </p>

            <h2>[01] // Common Diagnostics &amp; Troubleshooting</h2>
            <div className="doc-box">
              <h3>Audio Not Playing?</h3>
              <p>
                Verify device media volume is turned up and silent mode/Do Not Disturb permits media playback.
                Ensure Bluetooth headphones or external audio outputs are active and properly paired.
              </p>
            </div>

            <div className="doc-box">
              <h3>Text Sizing &amp; Readability</h3>
              <p>
                Tap the &ldquo;Settings&rdquo; icon on the top header inside the app to adjust Arabic typography scale (Small, Normal, Large, Extra Large)
                and switch between Day / Night / OLED High-Contrast themes.
              </p>
            </div>

            <div className="doc-box">
              <h3>Recitation Paths (Hizb vs 1/3)</h3>
              <p>
                Use the filter selector on the library dashboard to divide the 805 selawat into 7-day hizb cycles or 3-day thirds for guided daily reading schedules.
              </p>
            </div>

            <h2>[02] // Submit Bug Report or Feedback</h2>
            <p>
              When reporting unexpected behavior, please include:
            </p>
            <ul>
              <li>Device manufacturer and model (e.g. Google Pixel 8, Samsung Galaxy S24)</li>
              <li>OS version (e.g. Android 15, iOS 18)</li>
              <li>App build number (found at bottom of Settings screen)</li>
              <li>A concise summary of steps to reproduce the issue</li>
            </ul>

            <div className="doc-box">
              <h3>Direct Support Dispatch</h3>
              <p>
                Email: <a href="mailto:rusdyahmad@gmail.com" className="acc">rusdyahmad@gmail.com</a>
              </p>
              <div className="btns" style={{ marginTop: "16px" }}>
                <a className="btn p" href="mailto:rusdyahmad@gmail.com?subject=Barakat%20Makkiyyah%20Support">
                  email_support →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
