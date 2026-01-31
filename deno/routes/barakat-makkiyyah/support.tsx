import Seo from "../../components/Seo.tsx";

export default function BarakatMakkiyyahSupport() {
  const title = "Barakat Makkiyyah - Support";
  const description =
    "Support and contact information for the Barakat Makkiyyah app.";

  return (
    <>
      <Seo
        title={title}
        description={description}
        path="/barakat-makkiyyah/support"
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
          <p class="eyebrow">Support</p>
          <h1>Barakat Makkiyyah Support</h1>
          <p class="lead">Need help? Get in touch.</p>

          <h2>Contact</h2>
          <p>Email: rusdyahmad@gmail.com</p>

          <h2>Common help topics</h2>
          <ul>
            <li>Audio not playing: check device volume and silent mode.</li>
            <li>Text too small: use the font size controls in the app.</li>
            <li>
              Reading mode: use hizb or range filters to follow your preferred
              schedule.
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
