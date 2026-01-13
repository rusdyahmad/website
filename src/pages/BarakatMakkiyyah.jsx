import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

export default function BarakatMakkiyyah() {
  const title = "Barakat Makkiyyah — Offline Selawat Companion";
  const description =
    "Offline Barakat Makkiyyah collection with 805 selawat, local audio recitations, hizb filters, and flexible reading modes.";

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
              A fully offline Barakat Makkiyyah companion featuring 805 selawat entries, local audio
              playback, and guided recitation options so users can follow hizb or complete the
              collection on their own schedule.
            </p>
            <div className="case-meta">
              <div>
                <span className="meta-label">Platform</span>
                <span className="meta-value">Android + iOS (Expo)</span>
              </div>
              <div>
                <span className="meta-label">Core features</span>
                <span className="meta-value">
                  Offline library, audio recitations, book-based writing, hizb filters, search,
                  adjustable typography
                </span>
              </div>
              <div>
                <span className="meta-label">Data source</span>
                <span className="meta-value">Bundled Barakat Makkiyyah text + audio assets</span>
              </div>
            </div>
            <div className="case-actions">
              <a
                className="btn"
                href="https://kitabselawat.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit website
              </a>
              <Link className="btn" to="/">
                Back to home
              </Link>
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
              <li>Local audio playback with progress controls and quick play/pause.</li>
              <li>Writing selawat from books to preserve the original text flow.</li>
              <li>Reading paths for hizb-by-day, one-third in three days, or full recitation.</li>
              <li>Search by number, range filters, and adjustable font size for readability.</li>
            </ul>
          </div>
          <div className="case-card">
            <h2>Technical highlights</h2>
            <ul>
              <li>Expo + React Native build optimized for offline use.</li>
              <li>Audio playback handled entirely from bundled assets.</li>
              <li>AsyncStorage preferences for language, theme, and typography.</li>
              <li>FlatList rendering for fast scrolling through long content lists.</li>
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
            <span className="tag">Offline Audio</span>
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
        </div>
      </section>
    </>
  );
}
