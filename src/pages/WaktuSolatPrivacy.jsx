import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

export default function WaktuSolatPrivacy() {
  const title = "Waktu Solat — Privacy Policy";
  const description =
    "Privacy policy for Waktu Solat covering data collection, local storage, permissions, and user choices.";

  return (
    <>
      <SEO
        title={title}
        description={description}
        path="/waktusolat/privacy"
        type="article"
      />

      <div className="back-strip">
        <Link to="/waktusolat" className="back-link">
          ← cd .. // return_to_app
        </Link>
        <span className="dim">~/apps/waktusolat/privacy</span>
      </div>

      <div className="term-doc-page px">
        <div className="doc-frame">
          <div className="doc-header">
            <span className="tag xs up">[SYS] // telemetry_privacy_manifest</span>
            <h1>Privacy Policy</h1>
            <div className="doc-meta">
              <span>App: <b>Waktu Solat</b></span>
              <span>Updated: <b>January 14, 2026</b></span>
              <span>Telemetry: <b className="ok">NO TRACKING / LOCAL FIRST</b></span>
            </div>
          </div>

          <div className="doc-body">
            <p className="lead" style={{ fontSize: "16px", color: "var(--fg)" }}>
              Waktu Solat (&quot;the App&quot;) is built to provide accurate prayer schedules with full respect
              for your device privacy. This policy outlines what data is stored locally, how permissions are used, and your controls.
            </p>

            <h2>[01] // Information We Handle</h2>
            <div className="doc-box">
              <h3>1.1 Foreground Location (Optional)</h3>
              <p>
                When you tap &quot;Use my current location,&quot; the App queries GPS coordinates strictly in the foreground
                to match your Malaysian district with the corresponding JAKIM prayer zone. Your exact coordinates are never
                logged or sent to remote servers.
              </p>
            </div>

            <div className="doc-box">
              <h3>1.2 Local Preferences</h3>
              <ul>
                <li>Selected prayer zone and calculation adjustments.</li>
                <li>Display language, 12h/24h time formatting, and notifications toggle.</li>
                <li>Cached prayer timetable JSON for offline viewing.</li>
              </ul>
              <p style={{ marginTop: "10px" }}>
                All preference records remain inside local sandboxed device storage and are never synchronized off-device.
              </p>
            </div>

            <h2>[02] // Operating Permissions</h2>
            <div className="doc-box" style={{ padding: 0 }}>
              <table className="sys" style={{ width: "100%" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--line-2)" }}>
                    <th style={{ padding: "10px 14px", textAlign: "left", color: "var(--acc)", fontSize: "11px", textTransform: "uppercase" }}>Permission</th>
                    <th style={{ padding: "10px 14px", textAlign: "left", color: "var(--acc)", fontSize: "11px", textTransform: "uppercase" }}>Functionality</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: "10px 14px" }}>LOCATION (FOREGROUND)</td>
                    <td style={{ padding: "10px 14px" }}>Used on-demand strictly to detect your prayer zone code.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px" }}>POST NOTIFICATIONS</td>
                    <td style={{ padding: "10px 14px" }}>Schedules local alarms on your device when prayer time arrives.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px" }}>EXACT ALARMS</td>
                    <td style={{ padding: "10px 14px" }}>Ensures accurate azan timing without OS battery-saver delays.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>[03] // Advertising &amp; Third Parties</h2>
            <p>
              The App contains <strong>zero third-party advertisements</strong> and no commercial marketing trackers.
              We do not sell, rent, or trade your personal data under any circumstances.
            </p>

            <h2>[04] // Contact Operator</h2>
            <div className="doc-box">
              <p>For inquiries regarding privacy or compliance:</p>
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
