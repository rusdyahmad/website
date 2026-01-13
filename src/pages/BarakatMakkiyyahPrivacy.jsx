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
      <section className="legal reveal">
        <div className="container legal-content">
          <a className="btn btn-ghost back-link" href="/barakat-makkiyyah">
            <span className="back-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <path
                  d="M15 6l-6 6 6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Back to Barakat Makkiyyah
          </a>
          <p className="eyebrow">Policy</p>
          <h1>Privacy Policy</h1>
          <p className="lead">Last updated: January 12, 2026</p>

          <p>
            Barakat Makkiyyah (&quot;the App&quot;) is designed to work fully offline. This policy explains
            what data we store on your device and how it is used.
          </p>

          <h2>1) Information We Collect</h2>
          <ul>
            <li>
              <strong>App preferences:</strong> language, theme, and font size settings saved on
              your device.
            </li>
          </ul>
          <p>
            We do not collect names, emails, phone numbers, contacts, or advertising identifiers.
          </p>

          <h2>2) How We Use Information</h2>
          <ul>
            <li>To remember your language, theme, and reading preferences.</li>
            <li>To provide consistent playback and layout settings across sessions.</li>
          </ul>

          <h2>3) Data Storage</h2>
          <ul>
            <li>All data is stored locally on your device.</li>
            <li>The app does not upload data to any server.</li>
          </ul>

          <h2>4) Permissions</h2>
          <p>Barakat Makkiyyah does not require special permissions to function.</p>

          <h2>5) Data Sharing</h2>
          <p>We do not sell, rent, or share your data with third parties.</p>

          <h2>6) Data Retention &amp; Deletion</h2>
          <p>Data stays on your device until you clear app data or uninstall the app.</p>

          <h2>7) Children’s Privacy</h2>
          <p>
            The App is not directed to children under 13, and we do not knowingly collect personal
            data from children.
          </p>

          <h2>8) Changes to This Policy</h2>
          <p>We may update this policy. Any changes will be reflected in the updated date above.</p>

          <h2>Contact</h2>
          <p>If you have questions, contact:</p>
          <p>
            Rusdy Ahmad <br />
            Email: rusdyahmad@gmail.com
            <br />
            Website: https://rusdy.com/barakat-makkiyyah
          </p>
        </div>
      </section>
    </>
  );
}
