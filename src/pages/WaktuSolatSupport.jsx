import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

export default function WaktuSolatSupport() {
  const title = "Waktu Solat — Support & Helpdesk";
  const description = "Support and contact information for the Waktu Solat app.";

  return (
    <>
      <SEO
        title={title}
        description={description}
        path="/waktusolat/support"
        type="article"
      />

      <div className="back-strip">
        <Link to="/waktusolat" className="back-link">
          ← cd .. // return_to_app
        </Link>
        <span className="dim">~/apps/waktusolat/support</span>
      </div>

      <div className="term-doc-page px">
        <div className="doc-frame">
          <div className="doc-header">
            <span className="tag xs up">[SYS] // app_support_terminal</span>
            <h1>Help &amp; Diagnostics</h1>
            <div className="doc-meta">
              <span>App: <b>Waktu Solat</b></span>
              <span>Status: <b className="ok">TICKETING OPEN</b></span>
              <span>SLA: <b>&lt; 24h Response</b></span>
            </div>
          </div>

          <div className="doc-body">
            <p className="lead" style={{ fontSize: "16px", color: "var(--fg)" }}>
              Need assistance with Waktu Solat prayer calculations or widgets? Check the diagnostic guide below.
            </p>

            <h2>[01] // Diagnostic Troubleshooting</h2>
            <div className="doc-box">
              <h3>Prayer Times Discrepancy?</h3>
              <p>
                Verify that your active zone matches your exact district in Malaysia.
                You can manually select your zone in the app by tapping the zone indicator on the top left.
              </p>
            </div>

            <div className="doc-box">
              <h3>Notifications Not Firing on Time?</h3>
              <p>
                On Android, battery optimization (Doze mode) can delay background alarms. Go to device Settings &gt; Apps &gt; Waktu Solat &gt; Battery &gt; Unrestricted.
                Ensure &quot;Allow Alarms &amp; Reminders&quot; permission is enabled.
              </p>
            </div>

            <div className="doc-box">
              <h3>Home-Screen Widget Not Updating?</h3>
              <p>
                Operating systems throttle widget background updates if battery saver is engaged. Open the app once to force a fresh data sync,
                or remove and re-add the widget to your home-screen grid.
              </p>
            </div>

            <div className="doc-box">
              <h3>Qiblah Compass Calibration</h3>
              <p>
                Wave your device in a smooth figure-8 motion away from metal desks, laptops, and magnets to calibrate the internal magnetometer sensor.
              </p>
            </div>

            <h2>[02] // Developer Contact</h2>
            <div className="doc-box">
              <p>Direct inquiries, bug reports, and suggestions:</p>
              <p style={{ marginTop: "8px" }}>
                <strong>Rusdy Ahmad</strong><br />
                Email: <a href="mailto:rusdyahmad@gmail.com" className="acc">rusdyahmad@gmail.com</a>
              </p>
              <div className="btns" style={{ marginTop: "16px" }}>
                <a className="btn p" href="mailto:rusdyahmad@gmail.com?subject=Waktu%20Solat%20Support">
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
