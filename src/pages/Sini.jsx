import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

export default function Sini() {
  const title = "Sini — Sales Platform";
  const description =
    "All-in-one form builder + checkout for products, bookings, and digital goods with a live dashboard for revenue, orders, and customers.";

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
        image="/sini/hero.jpg"
        jsonLd={jsonLd}
      />
      <section className="case-hero reveal">
        <div className="container case-hero-inner">
          <div>
            <p className="eyebrow">Featured project</p>
            <h1>Sini</h1>
            <p className="lead">
              An all-in-one form builder + checkout for selling products, bookings, and digital
              goods. Launch today with your own domain, unlimited products, and a price that only
              moves when you sell.
            </p>
            <div className="case-meta">
              <div>
                <span className="meta-label">Platform</span>
                <span className="meta-value">Web + Android mobile app</span>
              </div>
              <div>
                <span className="meta-label">Pricing model</span>
                <span className="meta-value">RM0.20 per successful order</span>
              </div>
              <div>
                <span className="meta-label">Core features</span>
                <span className="meta-value">
                  Form builder, checkout, orders, analytics, mobile notifications
                </span>
              </div>
            </div>
            <div className="case-actions">
              <a className="btn" href="https://sini.my" target="_blank" rel="noopener noreferrer">
                View case study
              </a>
              <Link className="btn btn-ghost" to="/">
                Back to home
              </Link>
            </div>
          </div>
          <div className="case-media">
            <img src="/sini/icon.png" alt="Sini app icon" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="case-section reveal">
        <div className="container case-grid">
          <div className="case-card">
            <h2>Problem</h2>
            <p>
              Small businesses and creators wanted a simple way to sell without juggling multiple
              tools—forms, checkout, payments, and analytics were fragmented and hard to manage.
            </p>
          </div>
          <div className="case-card">
            <h2>Solution</h2>
            <p>
              Sini brings everything together: build a sales form, collect payments, manage orders,
              and track performance in one place.
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
              <h3>Custom Domain</h3>
              <p>Own the link your customers remember. Connect your domain in minutes.</p>
            </div>
            <div className="case-card">
              <h3>Unlimited Products</h3>
              <p>List everything you sell with variants, images, and simple stock control.</p>
            </div>
            <div className="case-card">
              <h3>Order Management</h3>
              <p>See every order, every step. Stay on top without spreadsheets.</p>
            </div>
            <div className="case-card">
              <h3>Multiple Payments</h3>
              <p>Offer the payment options your buyers trust with no dev work.</p>
            </div>
            <div className="case-card">
              <h3>Smart Analytics</h3>
              <p>Know what sells, who buys, and where to grow next.</p>
            </div>
            <div className="case-card">
              <h3>Form Builder</h3>
              <p>Drag blocks, customize layout, and launch fast.</p>
            </div>
            <div className="case-card">
              <h3>Mobile App</h3>
              <p>Get simple order notifications and stats for each shop on Android.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section reveal">
        <div className="container case-grid">
          <div className="case-card">
            <h2>Who it&apos;s for</h2>
            <p>
              Creators, sellers, and small teams selling physical products, digital goods, bookings,
              classes, and event tickets.
            </p>
          </div>
          <div className="case-card">
            <h2>My role</h2>
            <p>
              Full-stack product designer & developer — Strategy, UX/UI, front-end, back-end, and
              deployment.
            </p>
          </div>
        </div>
      </section>

      <section className="case-section reveal">
        <div className="container case-grid">
          <div className="case-card">
            <h2>Key work</h2>
            <ul>
              <li>Designed a real dashboard that keeps you in control.</li>
              <li>Built an Inertia + React form builder UX with fast setup flows.</li>
              <li>Integrated multiple payment gateways and order lifecycle tooling.</li>
              <li>Shipped analytics, customer management, and operations views.</li>
              <li>Developed Android mobile app with Expo for order notifications and stats.</li>
            </ul>
          </div>
          <div className="case-card">
            <h2>Results</h2>
            <ul>
              <li>RM0.20 per successful order pricing model communicated clearly.</li>
              <li>Faster launch time for sellers with streamlined setup flow.</li>
              <li>Multi-tenant architecture supporting unlimited products per seller.</li>
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
            <span className="tag">Postgres</span>
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
                <img src={`/sini/${photo}`} alt={`Sini screen ${index + 1}`} loading="lazy" />
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
