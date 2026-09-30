import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

export default function Sini() {
  const title = "Sini — Sales Platform";
  const description =
    "Multi-tenant sales platform with custom domains, storefront checkout, order ops, analytics, and automated delivery.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Sini",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description,
    offers: {
      "@type": "Offer",
      price: "0.20",
      priceCurrency: "MYR",
    },
    author: {
      "@type": "Person",
      name: "RA",
      url: "https://rusdy.com/",
    },
    url: "https://rusdy.com/sini",
    image: "https://rusdy.com/assets/sini.jpg",
  };

  const photos = [
    "photo_2026-01-12_14-38-19.jpg",
    "photo_2026-01-12_14-38-20.jpg",
    "photo_2026-01-12_14-38-22.jpg",
    "photo_2026-01-12_14-38-23.jpg",
  ];

  return (
    <>
      <SEO
        title={title}
        description={description}
        path="/sini"
        type="article"
        image="/assets/sini.jpg"
        jsonLd={jsonLd}
      />

      {/* Breadcrumb strip */}
      <div className="back-strip">
        <Link to="/#work" className="back-link">
          ← cd .. // return_to_work
        </Link>
        <span className="dim">~/projects/sini</span>
      </div>

      {/* Case Hero */}
      <section className="case-hero px">
        <div className="case-hero-inner">
          <div className="rv">
            <span className="tag xs up">[07] // case_study · sales_platform</span>
            <h1>
              SINI<span className="acc">.</span>
            </h1>
            <p className="lead">
              A multi-tenant commerce engine engineered for direct sellers and operators.
              Sini powers custom-domain storefronts, embeddable checkout forms, and automated fulfillment
              for physical products, bookings, and digital goods in one synchronized dashboard.
            </p>

            <div className="case-meta-box">
              <table className="sys">
                <tbody>
                  <tr>
                    <td>PLATFORM</td>
                    <td>
                      <span className="ok">Web application</span> + mobile dashboard (Expo)
                    </td>
                  </tr>
                  <tr>
                    <td>CORE SPECS</td>
                    <td>
                      Custom domains · Embedded checkout · Promotions engine · Automated delivery · Payouts
                    </td>
                  </tr>
                  <tr>
                    <td>PRICING MODEL</td>
                    <td>RM0.20 per completed order</td>
                  </tr>
                  <tr>
                    <td>MY ROLE</td>
                    <td>Full-stack product developer — architecture, tenancy, payments, ops</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="case-actions">
              <a
                className="btn p"
                href="https://sini.my"
                target="_blank"
                rel="noopener noreferrer"
              >
                visit_website ↗
              </a>
              <Link className="btn btn-ghost" to="/#work">
                ./all_builds
              </Link>
            </div>
          </div>

          <div className="case-hero-media rv">
            <div className="shot">
              <img src="/assets/sini.jpg" alt="Sini landing page screenshot" />
              <span className="hud"></span>
              <span className="lbl">/sini</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution Grid */}
      <section className="case-grid">
        <div className="case-card rv">
          <span className="tag xs up">[01] // problem_statement</span>
          <h3 style={{ marginTop: "12px" }}>The fragmentation</h3>
          <p className="mid" style={{ marginBottom: "16px" }}>
            Selling across physical goods, bookings, and instant digital downloads required a fragile patchwork:
            form builders, payment links, courier portals, invoices, and affiliate spreadsheets lived in completely disconnected silos.
          </p>
          <ul>
            <li>Manual reconciliation between payment gateways and order states.</li>
            <li>Lack of branded custom domains on typical checkout form tools.</li>
            <li>No automated fulfillment pipelines for immediate digital delivery.</li>
          </ul>
        </div>
        <div className="case-card rv">
          <span className="tag xs up">[02] // architectural_solution</span>
          <h3 style={{ marginTop: "12px" }}>Unified ops engine</h3>
          <p className="mid" style={{ marginBottom: "16px" }}>
            Sini unifies branded multi-tenant storefronts, optimized checkout flows, order fulfillment,
            consignment note printing, and real-time revenue analytics into a single high-speed dashboard.
          </p>
          <ul>
            <li>Single centralized database with tenant domain isolation.</li>
            <li>Real-time payment webhook verification and instant license dispatch.</li>
            <li>Built-in courier rates and one-click shipping consignment generation.</li>
          </ul>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="sec px" style={{ paddingBottom: "48px" }}>
        <div className="sh" style={{ paddingTop: "48px", paddingBottom: "24px" }}>
          <span className="tag xs up">{"// core_capabilities"}</span>
          <h2 className="rv">Engineered <span className="o">modules.</span></h2>
          <span className="xs up dim right">08 modules</span>
        </div>
        <div className="svc" style={{ borderTop: "1px solid var(--line)" }}>
          <div className="rv">
            <span className="path">~/modules/domains</span>
            <h4 style={{ fontSize: "22px", margin: "24px 0 10px" }}>Custom Domains</h4>
            <p>Automatic SSL and custom subdomain or apex domain routing for tenant storefronts.</p>
          </div>
          <div className="rv">
            <span className="path">~/modules/checkout</span>
            <h4 style={{ fontSize: "22px", margin: "24px 0 10px" }}>Embeddable Forms</h4>
            <p>Fast checkout widgets ready to embed on any existing web page or landing page.</p>
          </div>
          <div className="rv">
            <span className="path">~/modules/orders</span>
            <h4 style={{ fontSize: "22px", margin: "24px 0 10px" }}>Order Operations</h4>
            <p>Invoices, status transitions, refunds, and customer resend links in one workspace.</p>
          </div>
        </div>
      </section>

      {/* Stack Section */}
      <section className="case-stack-sec px rv">
        <div>
          <span className="tag xs up">{"// stack_architecture"}</span>
          <h4 style={{ marginTop: "8px" }}>Laravel + Inertia + React, built for scale</h4>
        </div>
        <div className="chips">
          <span className="chip">Laravel 12</span>
          <span className="chip">Inertia.js</span>
          <span className="chip">React 19</span>
          <span className="chip">Multi-tenant</span>
          <span className="chip">Webhooks</span>
          <span className="chip">Postgres</span>
          <span className="chip">Expo Dashboard</span>
        </div>
      </section>

      {/* Screen Gallery */}
      <section className="gallery-sec px">
        <div className="sh" style={{ paddingTop: 0, paddingBottom: "24px" }}>
          <span className="tag xs up">{"// interface_telemetry"}</span>
          <h2 className="rv">Platform screens <span className="o">in action.</span></h2>
          <span className="xs up dim right">04 captures</span>
        </div>
        <div className="gallery-grid">
          {photos.map((photo, idx) => (
            <div className="gallery-item rv" key={photo}>
              <div className="shot">
                <img
                  src={`/projects/sini/${photo}`}
                  alt={`Sini dashboard interface capture 0${idx + 1}`}
                  loading="lazy"
                />
                <span className="hud"></span>
                <span className="lbl">{`screen_0${idx + 1}.jpg`}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
