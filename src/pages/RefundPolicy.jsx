import SEO from "../components/SEO.jsx";

export default function RefundPolicy() {
  const title = "RA — Refund Policy";
  const description =
    "Refund policy for RA full-stack development services, covering deposits, milestones, and cancellations.";

  return (
    <>
      <SEO title={title} description={description} path="/refund-policy" type="article" />
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
          <h1>Refund Policy</h1>
          <p className="lead">Last updated: January 20, 2026</p>

          <p>
            This refund policy applies to RA&apos;s full-stack development services, including web
            apps, dashboards, and mobile app builds. Each engagement is custom and delivered in
            milestones.
          </p>

          <h2>1) Deposits and kickoff</h2>
          <p>
            Deposits reserve time on the schedule and cover discovery, planning, and setup. Once
            kickoff begins, deposits are non-refundable.
          </p>

          <h2>2) Milestones and work in progress</h2>
          <p>
            Milestone payments cover work completed within that phase. Completed milestones are not
            refundable. If a milestone has started but is not finished, refunds (if any) are
            prorated based on work completed and deliverables already shared.
          </p>

          <h2>3) Cancellations</h2>
          <p>
            You may cancel a project at any time by email. You will be billed for work completed up
            to the cancellation date. Any unused, unstarted work will not be charged.
          </p>

          <h2>4) Disputes and corrections</h2>
          <p>
            If something is delivered incorrectly or does not match the agreed scope, I will correct
            it at no additional cost. Please report issues within 7 days of delivery so they can be
            resolved quickly.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about refunds can be sent to:
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
