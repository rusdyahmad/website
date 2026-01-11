import SEO from "../components/SEO.jsx";

export default function WaktuSolatPrivacy() {
  const title = "Waktu Solat — Privacy Policy";
  const description =
    "Privacy policy for the Waktu Solat app. Learn how data is used for prayer times, location, and notifications.";

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
          <p className="lead">Effective date: January 11, 2026</p>

          <p>
            This Privacy Policy explains how Waktu Solat (“we”, “our”, “us”) handles information when you
            use the Waktu Solat mobile application.
          </p>

          <h2>Information we use</h2>
          <ul>
            <li>
              <strong>Location (optional):</strong> Used to determine your prayer time zone and Qiblah
              direction. You can choose a zone manually if you prefer not to share location.
            </li>
            <li>
              <strong>Notification settings:</strong> Used to schedule prayer time reminders on your device.
            </li>
            <li>
              <strong>App preferences:</strong> Language, time format, and zone settings stored on your device.
            </li>
          </ul>

          <h2>Data storage</h2>
          <p>
            Waktu Solat stores preferences and prayer schedule data locally on your device to power widgets
            and reminders. We do not sell your data.
          </p>

          <h2>Third-party services</h2>
          <p>
            Prayer times are fetched from the official Malaysia e-Solat API. We do not share your personal
            data with third parties beyond what is required to fetch prayer time schedules.
          </p>

          <h2>Permissions</h2>
          <ul>
            <li><strong>Location:</strong> For zone detection and Qiblah calculation.</li>
            <li><strong>Notifications:</strong> For prayer time reminders.</li>
          </ul>

          <h2>Children’s privacy</h2>
          <p>
            Waktu Solat is not directed to children under 13. If you believe a child has provided personal
            information, please contact us and we will delete it.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy from time to time. Updates will be posted on this page with a revised
            effective date.
          </p>

          <h2>Contact</h2>
          <p>If you have questions, contact: rusdyahmad@gmail.com</p>
        </div>
      </section>
    </>
  );
}
