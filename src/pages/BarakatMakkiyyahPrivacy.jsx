import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

export default function BarakatMakkiyyahPrivacy() {
  const title = "Barakat Makkiyyah — Privacy Policy";
  const description =
    "Privacy policy for Barakat Makkiyyah covering offline storage, preferences, and user choices.";

  return (
    <>
      <SEO
        title={title}
        description={description}
        path="/barakat-makkiyyah/privacy"
        type="article"
      />

      <div className="back-strip">
        <Link to="/barakat-makkiyyah" className="back-link">
          ← cd .. // return_to_app
        </Link>
        <span className="dim">~/apps/barakat-makkiyyah/privacy</span>
      </div>

      <div className="term-doc-page px">
        <div className="doc-frame">
          <div className="doc-header">
            <span className="tag xs up">[SYS] // data_protection_readout</span>
            <h1>Privacy Policy</h1>
            <div className="doc-meta">
              <span>App: <b>Barakat Makkiyyah</b></span>
              <span>Updated: <b>January 14, 2026</b></span>
              <span>Classification: <b className="ok">100% Offline / Zero-Data</b></span>
            </div>
          </div>

          <div className="doc-body">
            <p className="lead" style={{ fontSize: "16px", color: "var(--fg)" }}>
              Barakat Makkiyyah (&quot;the App&quot;) is developed by Rusdy Ahmad. This privacy policy
              explains how the App handles information. The App is designed to work fully offline and
              strictly prioritizes your privacy.
            </p>

            <h2>[01] // Information We Collect</h2>
            <div className="doc-box">
              <h3>1.1 Personal Data — ZERO COLLECTION</h3>
              <p>
                <strong>We do not collect any personal data.</strong> The App does not collect, store,
                or transmit any personally identifiable information such as:
              </p>
              <ul style={{ marginTop: "12px" }}>
                <li>Names, email addresses, or phone numbers</li>
                <li>Location data</li>
                <li>Device identifiers or advertising IDs</li>
                <li>Contacts, photos, or files</li>
                <li>Financial or payment information</li>
                <li>Health or biometric data</li>
              </ul>
            </div>

            <h3>1.2 Locally Stored Preferences</h3>
            <p>
              The App stores the following preferences locally on your device to enhance your
              experience:
            </p>
            <ul>
              <li>
                <strong>Language preference:</strong> Your selected display language (Malay, English,
                Arabic, Farsi, or Urdu)
              </li>
              <li>
                <strong>Theme setting:</strong> Your chosen appearance (light, dark, or system default)
              </li>
              <li>
                <strong>Font size:</strong> Your preferred text size for reading
              </li>
            </ul>
            <p>
              These preferences are stored using AsyncStorage on your device only. They are never
              transmitted to any server or third party.
            </p>

            <h2>[02] // How We Use Information</h2>
            <p>The locally stored preferences are used solely to:</p>
            <ul>
              <li>Display the App in your preferred language</li>
              <li>Apply your chosen visual theme</li>
              <li>Render text at your selected font size</li>
              <li>Maintain consistent settings between app sessions</li>
            </ul>

            <h2>[03] // Data Storage and Security</h2>
            <ul>
              <li>All data is stored locally on your device using sandboxed device storage</li>
              <li>The App does not use cloud storage or remote databases</li>
              <li>No data is transmitted over the internet</li>
              <li>Audio content is embedded within the App and played locally</li>
            </ul>

            <h2>[04] // App Permissions</h2>
            <p>The App requests the following permissions for essential functionality:</p>
            <div className="doc-box" style={{ padding: 0 }}>
              <table className="sys" style={{ width: "100%" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--line-2)" }}>
                    <th style={{ padding: "10px 14px", textAlign: "left", color: "var(--acc)", fontSize: "11px", textTransform: "uppercase" }}>Permission</th>
                    <th style={{ padding: "10px 14px", textAlign: "left", color: "var(--acc)", fontSize: "11px", textTransform: "uppercase" }}>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: "10px 14px" }}>INTERNET</td>
                    <td style={{ padding: "10px 14px" }}>Required only for opening external links (email, website) when tapped. The App itself sends zero telemetry.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px" }}>AUDIO SETTINGS</td>
                    <td style={{ padding: "10px 14px" }}>To control recitation audio playback volume and mute states.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px" }}>FOREGROUND SERVICE</td>
                    <td style={{ padding: "10px 14px" }}>To continue audio playback when the App is in background.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px" }}>WAKE LOCK</td>
                    <td style={{ padding: "10px 14px" }}>To prevent screen sleep during continuous recitation playback.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 14px" }}>VIBRATE</td>
                    <td style={{ padding: "10px 14px" }}>Haptic feedback for navigation buttons.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>[05] // Third-Party Services</h2>
            <p>
              <strong>The App does not integrate any third-party services</strong> for analytics,
              advertising, crash reporting, or tracking. Specifically:
            </p>
            <ul>
              <li>No Google Analytics or Firebase Analytics</li>
              <li>No advertising networks or ad SDKs</li>
              <li>No crash reporting services</li>
              <li>No user behavior tracking</li>
            </ul>

            <h2>[06] // Data Retention and Deletion</h2>
            <ul>
              <li>Preferences remain on your device until you clear app data or uninstall the App.</li>
              <li>To delete all stored preferences, go to device Settings &gt; Apps &gt; Barakat Makkiyyah &gt; Storage &gt; Clear Data.</li>
              <li>Uninstalling the App permanently removes all locally stored data.</li>
            </ul>

            <h2>[07] // Contact Operator</h2>
            <div className="doc-box">
              <p>For questions or verification regarding this policy:</p>
              <p style={{ marginTop: "8px" }}>
                <strong>Rusdy Ahmad</strong><br />
                Email: <a href="mailto:rusdyahmad@gmail.com" className="acc">rusdyahmad@gmail.com</a><br />
                Web: <a href="https://rusdy.com/barakat-makkiyyah" className="acc">https://rusdy.com/barakat-makkiyyah</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
