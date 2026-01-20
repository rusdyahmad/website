import SEO from "../components/SEO.jsx";

export default function PrivacyPolicy() {
  const title = "RA — Privacy Policy";
  const description =
    "Privacy policy for RA full-stack development services, covering data collected through email and site analytics.";

  return (
    <>
      <SEO title={title} description={description} path="/privacy-policy" type="article" />
      <section className="legal reveal">
        <div className="container legal-content">
          <a className="btn btn-ghost back-link" href="/">
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
            Back to home
          </a>
          <p className="eyebrow">Policy</p>
          <h1>Privacy Policy</h1>
          <p className="lead">Last updated: January 20, 2026</p>

          <p>
            This privacy policy explains how RA collects and uses information for full-stack
            development services and this website.
          </p>

          <h2>1) Information we collect</h2>
          <ul>
            <li>
              <strong>Contact details:</strong> Name, email, and company information you share when
              you reach out.
            </li>
            <li>
              <strong>Project details:</strong> Requirements, timelines, and other information needed
              to provide services.
            </li>
            <li>
              <strong>Billing details:</strong> Invoices and payment status. Payment processing is
              handled by third-party providers and I do not store full payment card details.
            </li>
            <li>
              <strong>Usage data:</strong> Basic analytics data (pages viewed, device type, and
              approximate location) collected via Google Analytics.
            </li>
          </ul>

          <h2>2) How we use information</h2>
          <ul>
            <li>To respond to inquiries and deliver agreed services.</li>
            <li>To manage projects, invoices, and support.</li>
            <li>To improve the website and understand traffic patterns.</li>
          </ul>

          <h2>3) Cookies and analytics</h2>
          <p>
            This site uses Google Analytics to understand usage and improve content. Google may set
            cookies or similar technologies to collect aggregate statistics. You can control cookies
            through your browser settings.
          </p>

          <h2>4) Data sharing</h2>
          <p>
            Data is shared only with service providers necessary to operate the business (such as
            analytics, email, and invoicing). It is never sold to third parties.
          </p>

          <h2>5) Data retention</h2>
          <p>
            Project and billing records are retained as needed for operations and legal or tax
            requirements. You can request deletion of your personal data where legally possible.
          </p>

          <h2>6) Your rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal data. Email me to
            make a request.
          </p>

          <h2>7) Updates</h2>
          <p>
            This policy may be updated from time to time. The latest version will be posted on this
            page.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about privacy, contact:
            <br />
            Rusdy Ahmad
            <br />
            Email: rusdyahmad@gmail.com
          </p>
        </div>
      </section>
    </>
  );
}
