import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

export default function GadgetOps() {
  const title = "Gadget Ops — Operations Platform";
  const description =
    "Operations platform for inventory, serials, multi-channel orders, affiliates, warranty claims, and reporting with marketplace + payment integrations.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Gadget Ops",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description,
    author: {
      "@type": "Person",
      name: "RA",
      url: "https://rusdy.com/",
    },
    url: "https://rusdy.com/gadget-ops",
    image: "https://rusdy.com/og.png",
  };

  return (
    <>
      <SEO
        title={title}
        description={description}
        path="/gadget-ops"
        type="article"
        image="/projects/gadget-ops/gadget.png"
        jsonLd={jsonLd}
      />
      <section className="case-hero reveal">
        <div className="container case-hero-inner">
          <div>
            <p className="eyebrow">Featured project</p>
            <h1>Gadget Ops</h1>
            <p className="lead">
              A unified operations hub for product inventory, serial tracking, multi-channel orders,
              affiliate commissions, warranty workflows, and analytics.
            </p>
            <div className="case-meta">
              <div>
                <span className="meta-label">Platform</span>
                <span className="meta-value">Web app for internal teams + affiliates</span>
              </div>
              <div>
                <span className="meta-label">Core modules</span>
                <span className="meta-value">
                  Products, serials, orders, affiliates, warranty, reports
                </span>
              </div>
              <div>
                <span className="meta-label">Integrations</span>
                <span className="meta-value">Shopee, TikTok, Sini, BayarCash, EasyParcel</span>
              </div>
            </div>
            <div className="case-actions">
              <a
                className="btn"
                href="https://app.gadget.com.my/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit app
              </a>
              <Link className="btn btn-ghost" to="/">
                Back to home
              </Link>
            </div>
          </div>
          <div className="case-media">
            <img src="/projects/gadget-ops/gadget.png" alt="Gadget Ops preview" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="case-section reveal">
        <div className="container case-grid">
          <div className="case-card">
            <h2>Problem</h2>
            <p>
              Orders, serials, affiliates, and warranty flows lived in separate tools, making it
              hard to track fulfillment, commissions, and post-sale support at scale.
            </p>
          </div>
          <div className="case-card">
            <h2>Solution</h2>
            <p>
              A single operations suite that connects inventory, marketplace orders, payments, and
              warranty workflows, with dashboards that surface what needs action fast.
            </p>
          </div>
        </div>
      </section>

      <section className="case-section reveal">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Capabilities</p>
            <h2>What it does</h2>
          </div>
          <div className="case-grid">
            <div className="case-card">
              <h3>Inventory + Serials</h3>
              <p>Track products, variants, and serial assignments with exports and audits.</p>
            </div>
            <div className="case-card">
              <h3>Multi-channel Orders</h3>
              <p>Sync and manage orders from Shopee, TikTok, Sini, and manual entries.</p>
            </div>
            <div className="case-card">
              <h3>Affiliate Operations</h3>
              <p>Manage affiliate profiles, referral trees, and commission payouts.</p>
            </div>
            <div className="case-card">
              <h3>Warranty Workflow</h3>
              <p>Handle warranty registration, claims, media uploads, and status tracking.</p>
            </div>
            <div className="case-card">
              <h3>Reporting</h3>
              <p>Stock, sales, SKU, and order reporting with exports for accounting.</p>
            </div>
            <div className="case-card">
              <h3>Payments + Shipping</h3>
              <p>BayarCash payment flows and EasyParcel shipping status automation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section reveal">
        <div className="container case-grid">
          <div className="case-card">
            <h2>Who it&apos;s for</h2>
            <p>
              Operations teams running multi-channel gadget sales who need tight control over
              inventory, fulfillment, and post-sale support.
            </p>
          </div>
          <div className="case-card">
            <h2>My role</h2>
            <p>
              Full-stack product developer — architecture, data modeling, integrations, and the
              Inertia + Vue UI.
            </p>
          </div>
        </div>
      </section>

      <section className="case-section reveal">
        <div className="container case-grid">
          <div className="case-card">
            <h2>Key work</h2>
            <ul>
              <li>Built marketplace order ingestion with webhook handling and sync jobs.</li>
              <li>Shipped serial tracking, warranty registration, and claim management flows.</li>
              <li>Delivered affiliate tools, commission logic, and payout operations.</li>
              <li>Created reporting exports for sales, stock, and multi-quantity orders.</li>
              <li>Integrated BayarCash payments and EasyParcel shipping status.</li>
            </ul>
          </div>
          <div className="case-card">
            <h2>Outcomes</h2>
            <ul>
              <li>Single source of truth across sales channels.</li>
              <li>Faster order handling with automated sync and serial mapping.</li>
              <li>Clear warranty and affiliate visibility for support teams.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="case-section reveal">
        <div className="container case-stack">
          <div>
            <p className="eyebrow">Stack</p>
            <h2>Laravel + Inertia + Vue, built for operations</h2>
          </div>
          <div className="case-tags">
            <span className="tag">Laravel</span>
            <span className="tag">Inertia.js</span>
            <span className="tag">Vue</span>
            <span className="tag">Vite</span>
            <span className="tag">MySQL</span>
            <span className="tag">Queues</span>
          </div>
        </div>
      </section>

      <section className="case-section reveal">
        <div className="container case-cta">
          <h2>Need a system that keeps ops tight?</h2>
          <p className="lead">Let&apos;s build it.</p>
        </div>
      </section>
    </>
  );
}
