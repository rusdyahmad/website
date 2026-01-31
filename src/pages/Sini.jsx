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
    image: "https://rusdy.com/og.png",
  };

  return (
    <>
      <SEO
        title={title}
        description={description}
        path="/sini"
        type="article"
        image="/projects/sini/hero.jpg"
        jsonLd={jsonLd}
      />
      <section className="case-hero reveal">
        <div className="container case-hero-inner">
          <div>
            <p className="eyebrow">Featured project</p>
            <h1>Sini</h1>
            <p className="lead">
              A multi-tenant sales engine built for serious operators. Sini powers branded
              storefronts with custom domains, embeddable forms, and a checkout that handles
              physical, digital, and booking flows end-to-end.
            </p>
            <div className="case-meta">
              <div>
                <span className="meta-label">Platform</span>
                <span className="meta-value">Web app + mobile dashboard</span>
              </div>
              <div>
                <span className="meta-label">Pricing model</span>
                <span className="meta-value">RM0.20 per successful order</span>
              </div>
              <div>
                <span className="meta-label">Core features</span>
                <span className="meta-value">
                  Custom domains, checkout, promotions, shipping, payouts, analytics
                </span>
              </div>
            </div>
            <div className="case-actions">
              <a className="btn" href="https://sini.my" target="_blank" rel="noopener noreferrer">
                Visit website
              </a>
              <Link className="btn btn-ghost" to="/">
                Back to home
              </Link>
            </div>
          </div>
          <div className="case-media">
            <img src="/projects/sini/icon.png" alt="Sini app icon" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="case-section reveal">
        <div className="container case-grid">
          <div className="case-card">
            <h2>Problem</h2>
            <p>
              Selling across products, bookings, and digital downloads required a patchwork of
              tools: forms, payments, shipping, invoices, and customer support lived in separate
              systems.
            </p>
          </div>
          <div className="case-card">
            <h2>Solution</h2>
            <p>
              Sini unifies storefronts, checkout, order operations, and analytics with automation
              for delivery, shipping, and support.
            </p>
          </div>
        </div>
      </section>

      <section className="case-section reveal">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Features</p>
            <h2>What it does</h2>
          </div>
          <div className="case-grid">
            <div className="case-card">
              <h3>Custom domains + subdomains</h3>
              <p>Launch branded storefronts per tenant with automatic routing.</p>
            </div>
            <div className="case-card">
              <h3>Embeddable sales forms</h3>
              <p>Publish to a full storefront or embed directly on any site.</p>
            </div>
            <div className="case-card">
              <h3>Order operations</h3>
              <p>Invoices, status updates, refunds, and resend links in one workspace.</p>
            </div>
            <div className="case-card">
              <h3>Payments + webhooks</h3>
              <p>Multiple gateways, callbacks, and webhook automation per form.</p>
            </div>
            <div className="case-card">
              <h3>Promotions engine</h3>
              <p>Flash sales, bundle deals, and quantity discounts with countdowns.</p>
            </div>
            <div className="case-card">
              <h3>Shipping + couriers</h3>
              <p>Live rates, courier selection, and consignment printing.</p>
            </div>
            <div className="case-card">
              <h3>Analytics + search</h3>
              <p>Sales dashboards, filters, and global search across orders.</p>
            </div>
            <div className="case-card">
              <h3>Teams + affiliates</h3>
              <p>Invite staff, manage roles, and run affiliate payouts.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section reveal">
        <div className="container case-grid">
          <div className="case-card">
            <h2>Who it&apos;s for</h2>
            <p>
              Creators, sellers, and ops teams managing physical products, bookings, digital
              downloads, and event tickets at scale.
            </p>
          </div>
          <div className="case-card">
            <h2>My role</h2>
            <p>
              Full-stack product developer — architecture, tenancy, payments, frontend, and ops
              tooling.
            </p>
          </div>
        </div>
      </section>

      <section className="case-section reveal">
        <div className="container case-grid">
          <div className="case-card">
            <h2>Key work</h2>
            <ul>
              <li>Built a multi-tenant architecture with custom domains and storefront routing.</li>
              <li>Shipped embeddable forms + checkout with promotions and live pricing.</li>
              <li>Implemented payment callbacks, webhooks, and downloadable delivery links.</li>
              <li>Created order ops tooling: invoices, refunds, shipping, consignments.</li>
              <li>Delivered team roles, affiliate payouts, and support ticketing.</li>
            </ul>
          </div>
          <div className="case-card">
            <h2>Results</h2>
            <ul>
              <li>Single platform for storefronts, checkout, and operations.</li>
              <li>Faster onboarding with tenant + domain setup flows.</li>
              <li>Scalable foundation for promotions, shipping, and payouts.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="case-section reveal">
        <div className="container case-stack">
          <div>
            <p className="eyebrow">Stack</p>
            <h2>Laravel + Inertia + React, built for production</h2>
          </div>
          <div className="case-tags">
            <span className="tag">Laravel 12</span>
            <span className="tag">Inertia.js</span>
            <span className="tag">React 19</span>
            <span className="tag">Tailwind v4</span>
            <span className="tag">Multi-tenant</span>
            <span className="tag">Webhooks</span>
            <span className="tag">Expo</span>
            <span className="tag">Vite</span>
          </div>
        </div>
      </section>

      <section className="case-section reveal">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Screens</p>
            <h2>Sini in action</h2>
          </div>
          <div className="phone-grid">
            {[
              "photo_2026-01-12_14-38-19.jpg",
              "photo_2026-01-12_14-38-20.jpg",
              "photo_2026-01-12_14-38-22.jpg",
              "photo_2026-01-12_14-38-23.jpg",
            ].map((photo, index) => (
              <div className="phone-shot" key={photo}>
                <img
                  src={`/projects/sini/${photo}`}
                  alt={`Sini screen ${index + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section reveal">
        <div className="container case-cta">
          <h2>Want to sell faster without extra tools?</h2>
          <p className="lead">Build with Sini.</p>
        </div>
      </section>
    </>
  );
}
