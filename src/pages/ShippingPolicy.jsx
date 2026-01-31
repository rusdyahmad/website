import SEO from "../components/SEO.jsx";

export default function ShippingPolicy() {
  const title = "RA — Shipping Policy";
  const description =
    "Shipping and delivery policy for RA full-stack development services and digital deliverables.";

  return (
    <>
      <SEO title={title} description={description} path="/shipping-policy" type="article" />
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
          <h1>Shipping Policy</h1>
          <p className="lead">Last updated: January 20, 2026</p>

          <p>
            RA provides digital services and delivers work electronically. No physical products are
            shipped unless explicitly agreed in writing.
          </p>

          <h2>1) Delivery method</h2>
          <p>
            Deliverables are shared through email, shared repositories, file transfers, or project
            management tools as agreed in the project scope.
          </p>

          <h2>2) Delivery timeline</h2>
          <p>
            Timelines are defined in each proposal or statement of work. Typical projects are
            completed within 2 to 4 weeks, depending on scope and feedback cycles.
          </p>

          <h2>3) Acceptance and revisions</h2>
          <p>
            Each milestone includes a review window to confirm requirements are met. Revisions are
            handled according to the project scope and timeline.
          </p>

          <h2>4) Physical shipping (if applicable)</h2>
          <p>
            If a project requires any physical materials, shipping arrangements and costs must be
            approved in writing before dispatch.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about delivery can be sent to:
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
