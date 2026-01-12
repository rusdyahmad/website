import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

export default function WaktuSolat() {
  const title = "Waktu Solat App — Expo & React Native";
  const description =
    "Malaysia prayer time app with countdowns, daily timetable, Qiblah finder, widgets, and notifications. Built with Expo and React Native.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Waktu Solat",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Android, iOS",
    description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: "RA",
      url: "https://rusdy.com/",
    },
    url: "https://rusdy.com/waktusolat",
    image: "https://rusdy.com/og.png",
  };

  return (
    <>
      <SEO
        title={title}
        description={description}
        path="/waktusolat"
        type="article"
        image="/projects/waktusolat/splash.jpg"
        jsonLd={jsonLd}
      />
      <section className="case-hero reveal">
        <div className="container case-hero-inner">
          <div>
            <p className="eyebrow">Latest project</p>
            <h1>Waktu Solat</h1>
            <p className="lead">
              A Malaysia prayer time app built with Expo and React Native. It delivers accurate
              prayer times, Qiblah direction, reminders, and home-screen widgets that stay in sync.
            </p>
            <div className="case-meta">
              <div>
                <span className="meta-label">Platform</span>
                <span className="meta-value">Android + iOS (Expo)</span>
              </div>
              <div>
                <span className="meta-label">Core features</span>
                <span className="meta-value">Prayer timetable, Qiblah, widgets, notifications</span>
              </div>
              <div>
                <span className="meta-label">Data source</span>
                <span className="meta-value">Malaysia e-Solat API</span>
              </div>
            </div>
            <div className="case-actions">
              <Link className="btn" to="/">
                Back to home
              </Link>
              <a className="btn btn-ghost" href="/#work">
                View all work
              </a>
            </div>
            <div className="case-links">
              <a href="/waktusolat/privacy">Privacy Policy</a>
              <a href="/waktusolat/terms">Terms of Service</a>
              <a href="/waktusolat/support">Support</a>
            </div>
          </div>
          <div className="case-media">
            <img src="/projects/waktusolat/icon.png" alt="Waktu Solat app icon" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="case-section reveal">
        <div className="container case-grid">
          <div className="case-card">
            <h2>What I built</h2>
            <ul>
              <li>Prayer time schedule with next prayer countdown and daily timetable.</li>
              <li>Qiblah finder with compass calibration and on-device heading.</li>
              <li>Home-screen widgets for quick glance updates every 15 minutes.</li>
              <li>Notification scheduling for key prayer times.</li>
            </ul>
          </div>
          <div className="case-card">
            <h2>Technical highlights</h2>
            <ul>
              <li>Expo + React Native app with localized Malay/English labels.</li>
              <li>Widget data pipeline that syncs app data to Android and iOS widgets.</li>
              <li>Location-based zone handling and Hijri date display.</li>
              <li>API-driven updates using the official e-Solat endpoint.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="case-section reveal">
        <div className="container case-stack">
          <div>
            <p className="eyebrow">Stack</p>
            <h2>Expo + React Native, built for production</h2>
          </div>
          <div className="case-tags">
            <span className="tag">Expo</span>
            <span className="tag">React Native</span>
            <span className="tag">Notifications</span>
            <span className="tag">Widgets</span>
            <span className="tag">Location</span>
          </div>
        </div>
      </section>

      <section className="case-section reveal">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Screens</p>
            <h2>Waktu Solat in action</h2>
          </div>
          <div className="phone-grid">
            {[1, 2, 3, 4].map((num) => (
              <div className="phone-shot" key={num}>
                <img
                  src={`/projects/waktusolat/${num}.png`}
                  alt={`Waktu Solat screen ${num}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
