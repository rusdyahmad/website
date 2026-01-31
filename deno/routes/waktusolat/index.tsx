import Seo from "../../components/Seo.tsx";

export default function WaktuSolat() {
  const title = "Waktu Solat App - Expo & React Native";
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
      <Seo
        title={title}
        description={description}
        path="/waktusolat"
        type="article"
        image="/projects/waktusolat/splash.jpg"
        jsonLd={jsonLd}
      />
      <section class="case-hero reveal">
        <div class="container case-hero-inner">
          <div>
            <p class="eyebrow">Latest project</p>
            <h1>Waktu Solat</h1>
            <p class="lead">
              A Malaysia prayer time app built with Expo and React Native. It
              delivers accurate prayer times, Qiblah direction, reminders, and
              home-screen widgets that stay in sync.
            </p>
            <div class="case-meta">
              <div>
                <span class="meta-label">Platform</span>
                <span class="meta-value">Android + iOS (Expo)</span>
              </div>
              <div>
                <span class="meta-label">Core features</span>
                <span class="meta-value">
                  Prayer timetable, Qiblah, widgets, notifications
                </span>
              </div>
              <div>
                <span class="meta-label">Data source</span>
                <span class="meta-value">Malaysia e-Solat API</span>
              </div>
            </div>
            <div class="case-actions">
              <a
                class="btn btn-ghost"
                href="https://play.google.com/store/apps/details?id=com.waktusolat.rusdyahmad"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  gap: "10px",
                  background: "#0b0b0b",
                  color: "#fff",
                  borderColor: "#0b0b0b",
                  width: "100%",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  role="img"
                  focusable="false"
                >
                  <path d="M4 3.5v17l12.8-8.5L4 3.5z" fill="#00d2ff" />
                  <path d="M4 3.5l6.8 7-3.1 3.1L4 3.5z" fill="#00f076" />
                  <path d="M4 20.5l6.8-7-3.1-3.1L4 20.5z" fill="#ffcf3f" />
                  <path
                    d="M16.8 12l3.2-2.1c.5-.3.5-1 0-1.3L16.8 6 10.8 12l6 6z"
                    fill="#ff5b5b"
                  />
                </svg>
                Get it on Google Play
              </a>
            </div>
            <div class="case-actions">
              <a class="btn" href="/">Back to home</a>
              <a class="btn btn-ghost" href="/#work">View all work</a>
            </div>
            <div class="case-links">
              <a href="/waktusolat/privacy">Privacy Policy</a>
              <a href="/waktusolat/terms">Terms of Service</a>
              <a href="/waktusolat/support">Support</a>
            </div>
          </div>
          <div class="case-media">
            <img
              src="/projects/waktusolat/icon.png"
              alt="Waktu Solat app icon"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section class="case-section reveal">
        <div class="container case-grid">
          <div class="case-card">
            <h2>What I built</h2>
            <ul>
              <li>
                Prayer time schedule with next prayer countdown and daily
                timetable.
              </li>
              <li>
                Qiblah finder with compass calibration and on-device heading.
              </li>
              <li>
                Home-screen widgets for quick glance updates every 15 minutes.
              </li>
              <li>Notification scheduling for key prayer times.</li>
            </ul>
          </div>
          <div class="case-card">
            <h2>Technical highlights</h2>
            <ul>
              <li>
                Expo + React Native app with localized Malay/English labels.
              </li>
              <li>
                Widget data pipeline that syncs app data to Android and iOS
                widgets.
              </li>
              <li>Location-based zone handling and Hijri date display.</li>
              <li>API-driven updates using the official e-Solat endpoint.</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="case-section reveal">
        <div class="container case-stack">
          <div>
            <p class="eyebrow">Stack</p>
            <h2>Expo + React Native, built for production</h2>
          </div>
          <div class="case-tags">
            <span class="tag">Expo</span>
            <span class="tag">React Native</span>
            <span class="tag">Notifications</span>
            <span class="tag">Widgets</span>
            <span class="tag">Location</span>
          </div>
        </div>
      </section>

      <section class="case-section reveal">
        <div class="container">
          <div class="section-head">
            <p class="eyebrow">Screens</p>
            <h2>Waktu Solat in action</h2>
          </div>
          <div class="phone-grid">
            {[1, 2, 3, 4].map((num) => (
              <div class="phone-shot" key={num}>
                <img
                  src={`/projects/waktusolat/${num}.png`}
                  alt={`Waktu Solat screen ${num}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div class="case-actions" style={{ marginTop: "48px" }}>
            <a
              class="btn btn-ghost"
              href="https://play.google.com/store/apps/details?id=com.waktusolat.rusdyahmad"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                gap: "10px",
                background: "#0b0b0b",
                color: "#fff",
                borderColor: "#0b0b0b",
                width: "100%",
                maxWidth: "360px",
                margin: "0 auto",
                justifyContent: "center",
              }}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                role="img"
                focusable="false"
              >
                <path d="M4 3.5v17l12.8-8.5L4 3.5z" fill="#00d2ff" />
                <path d="M4 3.5l6.8 7-3.1 3.1L4 3.5z" fill="#00f076" />
                <path d="M4 20.5l6.8-7-3.1-3.1L4 20.5z" fill="#ffcf3f" />
                <path
                  d="M16.8 12l3.2-2.1c.5-.3.5-1 0-1.3L16.8 6 10.8 12l6 6z"
                  fill="#ff5b5b"
                />
              </svg>
              Get it on Google Play
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
