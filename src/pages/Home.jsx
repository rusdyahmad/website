import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

const workItems = [
  {
    title: "Waktu Solat",
    category: "Mobile app",
    description:
      "Malaysia prayer times app with next prayer countdown, daily timetable, Qiblah direction, and home-screen widgets.",
    tags: ["Expo", "React Native", "Widgets"],
    href: "/waktusolat",
    linkLabel: "Case study",
    image: "/waktusolat/icon.png",
    layout: "split",
  },
  {
    title: "SINI",
    category: "Sales platform",
    description:
      "All-in-one form builder + checkout for products, bookings, and digital goods with a live dashboard for revenue, orders, and customers.",
    tags: ["Checkout", "Forms", "Dashboard"],
    href: "https://sini.my/",
    linkLabel: "Visit website",
    image: "/projects/sini/sini.png",
  },
  {
    title: "XBOSS",
    category: "Digital marketplace",
    description:
      "Global marketplace for eSIM, gaming top-up, modem, mobile plans, IT services, and affiliate offers.",
    tags: ["Marketplace", "eSIM", "Gaming"],
    href: "https://xboss.asia/",
    linkLabel: "Visit website",
    image: "/projects/xboss/xboss.png",
    layout: "split",
  },
];

export default function Home() {
  const title = "RA — Full-Stack Coder in Malaysia";
  const description =
    "Full-stack coder based in Malacca, Malaysia. Laravel, Inertia, React, Postgres, MySQL, and Expo app development. View latest work and case studies.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "RA",
    jobTitle: "Full-stack coder",
    url: "https://rusdy.com/",
    image: "https://rusdy.com/og.png",
    email: "mailto:rusdyahmad@gmail.com",
    sameAs: ["https://github.com/rusdyahmad"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Malacca",
      addressCountry: "MY",
    },
    knowsAbout: [
      "Laravel",
      "Inertia.js",
      "React",
      "PostgreSQL",
      "MySQL",
      "Expo",
      "React Native",
    ],
  };

  return (
    <>
      <SEO title={title} description={description} path="/" jsonLd={jsonLd} />
      <section className="hero reveal">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Full-Stack Coder</p>
            <h1>Building fast, reliable products from database to pixel.</h1>
            <p className="lead">
              I ship full-stack web apps with clean architecture, scalable APIs, and polished UI when it
              matters. I also build Android & iOS apps with Expo.
            </p>
            <div className="hero-actions">
              <a className="btn" href="#work">
                View work
              </a>
              <a className="btn btn-ghost" href="#contact">
                Start a project
              </a>
            </div>
            <div className="hero-meta">
              <div>
                <span className="meta-label">Based in</span>
                <span className="meta-value">Malacca, Malaysia</span>
              </div>
              <div>
                <span className="meta-label">Specialty</span>
                <span className="meta-value">Laravel, Inertia, React, Postgres, MySQL</span>
              </div>
              <div>
                <span className="meta-label">Turnaround</span>
                <span className="meta-value">2–4 weeks</span>
              </div>
            </div>
          </div>
          <div className="hero-panel">
            <div className="panel-card">
              <p className="panel-title">Availability</p>
              <p className="panel-big">Open for Q1</p>
              <p className="panel-sub">Taking 2 new projects</p>
              <div className="panel-line"></div>
              <p className="panel-title">Focus</p>
              <p className="panel-sub">Full-stack apps, dashboards, internal tools</p>
            </div>
            <div className="panel-card alt">
              <p className="panel-title">Results</p>
              <ul>
                <li>+43% lead form conversion</li>
                <li>3x faster release cycles</li>
                <li>Clean, accessible UI systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="work reveal">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Selected work</p>
            <h2 className="full-width-title">Recent builds with punch.</h2>
          </div>
          <div className="work-grid">
            {workItems.map((item) => (
              <div className={`work-item${item.layout === "split" ? " split" : ""}`} key={item.title}>
                {item.image ? (
                  <div className="work-image">
                    <img src={item.image} alt={`${item.title} screenshot`} loading="lazy" />
                  </div>
                ) : null}
                <article className={`work-card${item.layout === "split" ? " split-card" : ""}`}>
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="tags">
                    {item.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  {item.href ? (
                    <div className="work-links">
                      {item.href.startsWith("/") ? (
                        <Link className="work-link" to={item.href}>
                          {item.linkLabel}
                        </Link>
                      ) : (
                        <a className="work-link" href={item.href} target="_blank" rel="noreferrer">
                          {item.linkLabel}
                        </a>
                      )}
                    </div>
                  ) : null}
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="services reveal">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Services</p>
            <h2>Full-stack delivery, web to mobile.</h2>
          </div>
          <div className="service-grid">
            <article>
              <h3>Backend + APIs</h3>
              <p>Laravel apps, secure auth, integrations, and Postgres/MySQL databases built to scale.</p>
            </article>
            <article>
              <h3>Inertia + React</h3>
              <p>Modern SPA experience with server-driven routing and clean state management.</p>
            </article>
            <article>
              <h3>Expo mobile apps</h3>
              <p>Android + iOS builds with Expo and React Native for fast, consistent delivery.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="about" className="about reveal">
        <div className="container about-inner">
          <div className="about-card">
            <p className="eyebrow">About</p>
            <h2>Full-stack builder who sweats the details.</h2>
            <p>
              I build production-ready web apps with Laravel, Inertia, and React, plus mobile apps with
              Expo. When design is needed, I keep it clean, purposeful, and aligned with the product goals.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">20+ years</span>
                <span className="stat-label">Building for the web</span>
              </div>
              <div className="stat">
                <span className="stat-number">100+</span>
                <span className="stat-label">Projects shipped</span>
              </div>
              <div className="stat">
                <span className="stat-number">24h</span>
                <span className="stat-label">Average response time</span>
              </div>
            </div>
          </div>
          <div className="process">
            <p className="eyebrow">Process</p>
            <ol>
              <li>
                <span>01</span>Kickoff + goals
              </li>
              <li>
                <span>02</span>Architecture + plan
              </li>
              <li>
                <span>03</span>Build + refine
              </li>
              <li>
                <span>04</span>Launch + support
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="testimonials reveal">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Notes</p>
            <h2>Kind words from teams.</h2>
          </div>
          <div className="testimonial-grid">
            <article>
              <p>“RA delivered a site that felt like our brand overnight. Clean, confident, and sharp.”</p>
              <span>— Studio North</span>
            </article>
            <article>
              <p>“The handoff was smooth and the performance improvements were huge.”</p>
              <span>— Brightline Labs</span>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="contact reveal">
        <div className="container contact-inner">
          <div className="contact-card">
            <p className="eyebrow">Let’s build</p>
            <h2>Tell me about your next project.</h2>
            <p>Share a quick brief and I’ll respond within 24 hours.</p>
            <a className="btn" href="mailto:rusdyahmad@gmail.com">
              rusdyahmad@gmail.com
            </a>
          </div>
          <div className="contact-list">
            <div>
              <span className="meta-label">Services</span>
              <span className="meta-value">Full-stack apps, APIs, internal tools</span>
            </div>
            <div>
              <span className="meta-label">Collaboration</span>
              <span className="meta-value">Remote worldwide, async friendly</span>
            </div>
            <div>
              <span className="meta-label">Social</span>
              <span className="meta-value">
                <a href="https://github.com/rusdyahmad" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
