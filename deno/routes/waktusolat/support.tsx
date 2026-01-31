import Seo from "../../components/Seo.tsx";

export default function WaktuSolatSupport() {
  const title = "Waktu Solat - Support";
  const description =
    "Support and contact information for the Waktu Solat app.";

  return (
    <>
      <Seo
        title={title}
        description={description}
        path="/waktusolat/support"
        type="article"
      />
      <section class="legal reveal">
        <div class="container legal-content">
          <a class="btn btn-ghost back-link" href="/waktusolat">
            <span class="back-icon" aria-hidden="true">
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
          <p class="eyebrow">Support</p>
          <h1>Waktu Solat Support</h1>
          <p class="lead">Need help? Get in touch.</p>

          <h2>Contact</h2>
          <p>Email: rusdyahmad@gmail.com</p>

          <h2>Common help topics</h2>
          <ul>
            <li>Prayer times not showing: check your zone or download data.</li>
            <li>
              Notifications not working: ensure permissions are enabled in
              system settings.
            </li>
            <li>
              Qiblah finder accuracy: place the phone flat and calibrate the
              compass.
            </li>
          </ul>

          <h2>Feedback</h2>
          <p>
            If you have suggestions or bug reports, please email with your
            device model, OS version, and a brief description of the issue.
          </p>
        </div>
      </section>
    </>
  );
}
