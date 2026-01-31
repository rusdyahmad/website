import Seo from "../components/Seo.tsx";

const workItems = [
  {
    title: "Barakat Makkiyyah",
    category: "Mobile app",
    description:
      "Offline Barakat Makkiyyah companion with 805 selawat, local audio recitations, hizb-based reading paths, and fast search.",
    tags: ["Offline", "Audio", "Expo"],
    href: "/barakat-makkiyyah",
    linkLabel: "Case study",
    image: "/projects/barakat/icon.png",
    layout: "split",
  },
  {
    title: "Waktu Solat",
    category: "Mobile app",
    description:
      "Malaysia prayer times app with next prayer countdown, daily timetable, Qiblah direction, and home-screen widgets.",
    tags: ["Expo", "React Native", "Widgets"],
    href: "/waktusolat",
    linkLabel: "Case study",
    image: "/projects/waktusolat/icon.png",
    layout: "split",
  },
  {
    title: "SINI",
    category: "Sales platform",
    description:
      "All-in-one form builder + checkout for products, bookings, and digital goods with a live dashboard for revenue, orders, and customers.",
    tags: ["Checkout", "Forms", "Dashboard"],
    href: "/sini",
    linkLabel: "Case study",
    image: "/projects/sini/sini.png",
  },
  {
    title: "Gadget Ops",
    category: "Operations platform",
    description:
      "Back-office suite for products, serials, multi-channel orders (Shopee/TikTok/Sini), affiliates, warranty claims, payments, and reporting.",
    tags: ["Orders", "Integrations", "Warranty"],
    href: "/gadget-ops",
    linkLabel: "Case study",
    image: "/projects/gadget-ops/gadget.png",
    layout: "split",
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
  const title = "RA - Full-Stack Coder in Malaysia";
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
      <Seo title={title} description={description} path="/" jsonLd={jsonLd} />
      <section class="hero reveal">
        <div class="container hero-inner">
          <div class="hero-copy">
            <p class="eyebrow">Full-Stack Coder</p>
            <h1>Building fast, reliable products from database to pixel.</h1>
            <p class="lead">
              I ship full-stack web apps with clean architecture, scalable APIs,
              and polished UI when it matters. I also build Android &amp; iOS
              apps with Expo.
            </p>
            <div class="hero-actions">
              <a class="btn" href="#work">View work</a>
              <a class="btn btn-ghost" href="#contact">Start a project</a>
            </div>
            <div class="hero-meta">
              <div>
                <span class="meta-label">Based in</span>
                <span class="meta-value">Malacca, Malaysia</span>
              </div>
              <div>
                <span class="meta-label">Specialty</span>
                <span class="meta-value">
                  Laravel, Inertia, React, Postgres, MySQL
                </span>
              </div>
              <div>
                <span class="meta-label">Turnaround</span>
                <span class="meta-value">2-4 weeks</span>
              </div>
            </div>
          </div>
          <div class="hero-panel">
            <div class="panel-card">
              <p class="panel-title">Availability</p>
              <p class="panel-big">Open for Q1</p>
              <p class="panel-sub">Taking 2 new projects</p>
              <div class="panel-line"></div>
              <p class="panel-title">Focus</p>
              <p class="panel-sub">
                Full-stack apps, dashboards, internal tools
              </p>
            </div>
            <div class="panel-card alt">
              <p class="panel-title">Results</p>
              <ul>
                <li>+43% lead form conversion</li>
                <li>3x faster release cycles</li>
                <li>Clean, accessible UI systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="work" class="work reveal">
        <div class="container">
          <div class="section-head">
            <p class="eyebrow">Selected work</p>
            <h2 class="full-width-title">Recent builds with punch.</h2>
          </div>
          <div class="work-grid">
            {workItems.map((item) => (
              <div
                class={`work-item${item.layout === "split" ? " split" : ""}`}
                key={item.title}
              >
                {item.image
                  ? (
                    <div class="work-image">
                      {item.href
                        ? (
                          item.href.startsWith("/")
                            ? (
                              <a href={item.href}>
                                <img
                                  src={item.image}
                                  alt={`${item.title} screenshot`}
                                  loading="lazy"
                                />
                              </a>
                            )
                            : (
                              <a
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img
                                  src={item.image}
                                  alt={`${item.title} screenshot`}
                                  loading="lazy"
                                />
                              </a>
                            )
                        )
                        : (
                          <img
                            src={item.image}
                            alt={`${item.title} screenshot`}
                            loading="lazy"
                          />
                        )}
                    </div>
                  )
                  : null}
                <article
                  class={`work-card${
                    item.layout === "split" ? " split-card" : ""
                  }`}
                >
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div class="tags">
                    {item.tags.map((tag) => (
                      <span class="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  {item.href
                    ? (
                      <div class="work-links">
                        {item.href.startsWith("/")
                          ? (
                            <a class="work-link" href={item.href}>
                              {item.linkLabel}
                            </a>
                          )
                          : (
                            <a
                              class="work-link"
                              href={item.href}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {item.linkLabel}
                            </a>
                          )}
                      </div>
                    )
                    : null}
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" class="services reveal">
        <div class="container">
          <div class="section-head">
            <p class="eyebrow">Services</p>
            <h2>Full-stack delivery, web to mobile.</h2>
          </div>
          <div class="service-grid">
            <article>
              <h3>Backend + APIs</h3>
              <p>
                Laravel apps, secure auth, integrations, and Postgres/MySQL
                databases built to scale.
              </p>
            </article>
            <article>
              <h3>Inertia + React</h3>
              <p>
                Modern SPA experience with server-driven routing and clean state
                management.
              </p>
            </article>
            <article>
              <h3>Expo mobile apps</h3>
              <p>
                Android + iOS builds with Expo and React Native for fast,
                consistent delivery.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="about" class="about reveal">
        <div class="container about-inner">
          <div class="about-card">
            <p class="eyebrow">About</p>
            <h2>Full-stack builder who sweats the details.</h2>
            <p>
              I build production-ready web apps with Laravel, Inertia, and
              React, plus mobile apps with Expo. When design is needed, I keep
              it clean, purposeful, and aligned with the product goals.
            </p>
            <div class="about-stats">
              <div class="stat">
                <span class="stat-number">20+ years</span>
                <span class="stat-label">Building for the web</span>
              </div>
              <div class="stat">
                <span class="stat-number">100+</span>
                <span class="stat-label">Projects shipped</span>
              </div>
              <div class="stat">
                <span class="stat-number">24h</span>
                <span class="stat-label">Average response time</span>
              </div>
            </div>
          </div>
          <div class="process">
            <p class="eyebrow">Process</p>
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

      <section class="testimonials reveal">
        <div class="container">
          <div class="section-head">
            <p class="eyebrow">Notes</p>
            <h2>Kind words from teams.</h2>
          </div>
          <div class="testimonial-grid">
            <article>
              <p>
                "RA delivered a site that felt like our brand overnight. Clean,
                confident, and sharp."
              </p>
              <span>- Studio North</span>
            </article>
            <article>
              <p>
                "The handoff was smooth and the performance improvements were
                huge."
              </p>
              <span>- Brightline Labs</span>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" class="contact reveal">
        <div class="container contact-inner">
          <div class="contact-card">
            <p class="eyebrow">Let's build</p>
            <h2>Tell me about your next project.</h2>
            <p>Share a quick brief and I'll respond within 24 hours.</p>
            <a class="btn" href="mailto:rusdyahmad@gmail.com">
              rusdyahmad@gmail.com
            </a>
          </div>
          <div class="contact-list">
            <div>
              <span class="meta-label">Services</span>
              <span class="meta-value">
                Full-stack apps, APIs, internal tools
              </span>
            </div>
            <div>
              <span class="meta-label">Collaboration</span>
              <span class="meta-value">Remote worldwide, async friendly</span>
            </div>
            <div>
              <span class="meta-label">Social</span>
              <span class="meta-value">
                <a
                  href="https://github.com/rusdyahmad"
                  target="_blank"
                  rel="noreferrer"
                >
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
