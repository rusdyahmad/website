import Seo from "../../components/Seo.tsx";

export default function BarakatMakkiyyahTerms() {
  const title = "Barakat Makkiyyah - Terms of Service";
  const description = "Terms of Service for the Barakat Makkiyyah app.";

  return (
    <>
      <Seo
        title={title}
        description={description}
        path="/barakat-makkiyyah/terms"
        type="article"
      />
      <section class="legal reveal">
        <div class="container legal-content">
          <a class="btn btn-ghost back-link" href="/barakat-makkiyyah">
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
            Back to Barakat Makkiyyah
          </a>
          <p class="eyebrow">Policy</p>
          <h1>Terms of Service</h1>
          <p class="lead">Effective date: January 12, 2026</p>

          <p>
            By using the Barakat Makkiyyah app, you agree to these Terms of
            Service. If you do not agree, please do not use the app.
          </p>

          <h2>Use of the app</h2>
          <p>
            Barakat Makkiyyah provides offline text and audio for recitation.
            The app is provided "as is" without warranties of any kind. While we
            strive for accuracy, users should verify content based on their own
            sources.
          </p>

          <h2>Acceptable use</h2>
          <ul>
            <li>Do not misuse the app or attempt to disrupt its operation.</li>
            <li>
              Do not reverse engineer or redistribute the app without
              permission.
            </li>
          </ul>

          <h2>Intellectual property</h2>
          <p>
            All trademarks, logos, and content in the app are owned by their
            respective owners. You may not use them without permission.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            We are not liable for any damages arising from the use or inability
            to use the app.
          </p>

          <h2>Changes to these terms</h2>
          <p>
            We may update these terms from time to time. Updates will be posted
            on this page with a revised effective date.
          </p>

          <h2>Contact</h2>
          <p>For questions, contact: rusdyahmad@gmail.com</p>
        </div>
      </section>
    </>
  );
}
