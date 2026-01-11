import SEO from "../components/SEO.jsx";

export default function WaktuSolatTerms() {
  const title = "Waktu Solat — Terms of Service";
  const description = "Terms of Service for the Waktu Solat app.";

  return (
    <>
      <SEO title={title} description={description} path="/waktusolat/terms" type="article" />
      <section className="legal reveal">
        <div className="container legal-content">
          <a className="btn btn-ghost back-link" href="/waktusolat">
            <span className="back-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <path
                  d="M15 6l-6 6 6 6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Back to Waktu Solat
          </a>
          <p className="eyebrow">Policy</p>
          <h1>Terms of Service</h1>
          <p className="lead">Effective date: January 11, 2026</p>

          <p>
            By using the Waktu Solat app, you agree to these Terms of Service. If you do not agree, please
            do not use the app.
          </p>

          <h2>Use of the app</h2>
          <p>
            Waktu Solat provides prayer time information and related utilities. The app is provided “as is”
            without warranties of any kind. While we strive for accuracy, prayer times may vary by source
            and location settings.
          </p>

          <h2>Acceptable use</h2>
          <ul>
            <li>Do not misuse the app or attempt to disrupt its operation.</li>
            <li>Do not reverse engineer or redistribute the app without permission.</li>
          </ul>

          <h2>Intellectual property</h2>
          <p>
            All trademarks, logos, and content in the app are owned by their respective owners. You may not
            use them without permission.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            We are not liable for any damages arising from the use or inability to use the app.
          </p>

          <h2>Changes to these terms</h2>
          <p>
            We may update these terms from time to time. Updates will be posted on this page with a revised
            effective date.
          </p>

          <h2>Contact</h2>
          <p>For questions, contact: rusdyahmad@gmail.com</p>
        </div>
      </section>
    </>
  );
}
