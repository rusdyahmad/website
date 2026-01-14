import SEO from "../components/SEO.jsx";

export default function WaktuSolatPrivacy() {
  const title = "Waktu Solat — Privacy Policy";
  const description =
    "Privacy policy for Waktu Solat covering data collection, local storage, permissions, and user choices.";

  return (
    <>
      <SEO title={title} description={description} path="/waktusolat/privacy" type="article" />
      <section className="legal reveal">
        <div className="container legal-content">
          <a className="btn btn-ghost back-link" href="/waktusolat">
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
            Back to Waktu Solat
          </a>
          <p className="eyebrow">Policy</p>
          <h1>Privacy Policy</h1>
          <p className="lead">Last updated: January 13, 2026</p>

          <p>
            Waktu Solat (“the App”) respects your privacy. This policy explains what data we
            collect, how we use it, and your choices.
          </p>

          <h2>1) Information We Collect</h2>
          <ul>
            <li>
              <strong>Location (optional):</strong> If you choose &quot;Use my current
              location,&quot; we access your device&apos;s location to detect the correct prayer
              zone.
            </li>
            <li>
              <strong>App preferences:</strong> Selected prayer zone, language, and notification
              settings.
            </li>
            <li>
              <strong>Notification data:</strong> Scheduled prayer time notifications and related
              settings.
            </li>
            <li>
              <strong>Device identifiers:</strong> The app framework (Expo) may collect device
              identifiers for push notification registration, crash reporting, and app stability.
              These identifiers are used solely for app functionality and error tracking.
            </li>
          </ul>
          <p>
            We do not collect names, emails, phone numbers, contacts, or advertising identifiers for
            marketing purposes.
          </p>

          <h2>2) How We Use Information</h2>
          <ul>
            <li>To detect your prayer zone (location is used only when you request it).</li>
            <li>To calculate and display prayer times.</li>
            <li>To schedule prayer notifications and reminders.</li>
            <li>
              To register and deliver push notifications (device identifiers are used by the app
              framework).
            </li>
            <li>To monitor app stability and fix crashes (anonymous error reports).</li>
          </ul>

          <h2>3) Data Storage</h2>
          <ul>
            <li>
              Your data is stored locally on your device (zone, settings, cached prayer times).
            </li>
            <li>
              Device identifiers may be transmitted to Expo&apos;s infrastructure for push
              notifications and crash reporting. These transmissions are encrypted and used solely
              for app functionality.
            </li>
          </ul>

          <h2>4) Permissions</h2>
          <ul>
            <li>
              <strong>Location (foreground):</strong> Used only for zone detection when you request
              it.
            </li>
            <li>
              <strong>Notifications:</strong> Used to show prayer reminders.
            </li>
            <li>
              <strong>Exact alarms (Android):</strong> Used to deliver time-critical prayer
              notifications.
            </li>
          </ul>

          <h2>5) Data Sharing</h2>
          <p>
            We do not sell, rent, or share your personal data with third parties for marketing
            purposes. Device identifiers are shared with Expo (our app development framework) only
            for technical purposes: push notification delivery, crash reporting, and app updates.
            Expo is bound by their own privacy policy and does not use this data for advertising.
          </p>

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
            Website: https://rusdy.com/waktusolat
          </p>
        </div>
      </section>
    </>
  );
}
