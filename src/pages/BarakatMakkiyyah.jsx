import SEO from "../components/SEO.jsx";

export default function BarakatMakkiyyah() {
  const title = "Barakat Makkiyyah — Offline Selawat Library";
  const description =
    "Offline Barakat Makkiyyah app with 805 selawat, hizb + one-third filters, multilingual UI, and on-device audio playback with seek controls.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Barakat Makkiyyah",
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
    url: "https://rusdy.com/barakat-makkiyyah",
    image: "https://rusdy.com/og.png",
  };

  return (
    <>
      <SEO
        title={title}
        description={description}
        path="/barakat-makkiyyah"
        type="article"
        image="/projects/barakat/icon.png"
        jsonLd={jsonLd}
      />
      <section className="case-hero reveal">
        <div className="container case-hero-inner">
          <div>
            <p className="eyebrow">Case study</p>
            <h1>Barakat Makkiyyah</h1>
            <p className="lead">
              A fully offline Barakat Makkiyyah library featuring 805 selawat, guided recitation
              methods (hizb or one-third), multilingual UI, and on-device audio playback so readers
              can follow the text with or without an internet connection.
            </p>
            <div className="case-meta">
              <div>
                <span className="meta-label">Platform</span>
                <span className="meta-value">Android + iOS (Expo)</span>
              </div>
              <div>
                <span className="meta-label">Core features</span>
                <span className="meta-value">
                  Offline library, hizb + 1/3 filters, audio with seek + background playback,
                  search, adjustable typography, multilingual + theme support
                </span>
              </div>
              <div>
                <span className="meta-label">Data source</span>
                <span className="meta-value">
                  Bundled Barakat Makkiyyah text, Arabic introduction, and audio assets
                </span>
              </div>
            </div>
            <div className="case-actions">
              <a
                className="btn btn-ghost"
                href="https://play.google.com/store/apps/details?id=com.barakatmakkiyyah.rusdyahmad"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  gap: "10px",
                  background: "#0b0b0b",
                  color: "#fff",
                  borderColor: "#0b0b0b",
                  width: "100%",
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
                  <path d="M16.8 12l3.2-2.1c.5-.3.5-1 0-1.3L16.8 6 10.8 12l6 6z" fill="#ff5b5b" />
                </svg>
                Get it on Google Play
              </a>
            </div>
            <div className="case-actions" style={{ marginTop: "10px" }}>
              <a
                className="btn"
                href="https://kitabselawat.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit website
              </a>
              <a className="btn btn-ghost" href="/#work">
                View all work
              </a>
            </div>
            <div className="case-links">
              <a href="/barakat-makkiyyah/privacy">Privacy Policy</a>
              <a href="/barakat-makkiyyah/terms">Terms of Service</a>
              <a href="/barakat-makkiyyah/support">Support</a>
            </div>
          </div>
          <div className="case-media">
            <img src="/projects/barakat/icon.png" alt="Barakat Makkiyyah app icon" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="case-section reveal">
        <div className="container case-grid">
          <div className="case-card">
            <h2>What I built</h2>
            <ul>
              <li>Offline Barakat Makkiyyah library with 805 selawat entries.</li>
              <li>Recitation guide with hizb (7 days) and one-third (3 days) reading paths.</li>
              <li>On-device audio playback with play, pause, stop, and seek controls.</li>
              <li>Search by number and highlight matching names inside each entry.</li>
              <li>Adjustable font size, theme options, and multilingual interface.</li>
            </ul>
          </div>
          <div className="case-card">
            <h2>Technical highlights</h2>
            <ul>
              <li>Expo + React Native build optimized for offline use.</li>
              <li>Audio playback handled entirely from bundled assets with seek support.</li>
              <li>Background audio enabled via platform audio mode settings.</li>
              <li>AsyncStorage preferences for language, theme, and typography.</li>
              <li>FlatList + sticky controls for fast navigation through long content lists.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="case-section reveal">
        <div className="container case-stack">
          <div>
            <p className="eyebrow">Stack</p>
            <h2>Expo + React Native, built for offline reading</h2>
          </div>
          <div className="case-tags">
            <span className="tag">Expo</span>
            <span className="tag">React Native</span>
            <span className="tag">Expo Audio</span>
            <span className="tag">AsyncStorage</span>
            <span className="tag">Multilingual UI</span>
          </div>
        </div>
      </section>

      <section className="case-section reveal">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Screens</p>
            <h2>Barakat Makkiyyah in action</h2>
          </div>
          <div className="phone-grid">
            {[
              "screenshot_20260113-201746.png",
              "screenshot_20260113-201751.png",
              "screenshot_20260113-201754.png",
              "screenshot_20260113-201756.png",
            ].map((file) => (
              <div className="phone-shot" key={file}>
                <img
                  src={`/projects/barakat/${file}`}
                  alt={`Barakat Makkiyyah screen ${file}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="case-actions" style={{ marginTop: "48px" }}>
            <a
              className="btn btn-ghost"
              href="https://play.google.com/store/apps/details?id=com.barakatmakkiyyah.rusdyahmad"
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
                <path d="M16.8 12l3.2-2.1c.5-.3.5-1 0-1.3L16.8 6 10.8 12l6 6z" fill="#ff5b5b" />
              </svg>
              Get it on Google Play
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
