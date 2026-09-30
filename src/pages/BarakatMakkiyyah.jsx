import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

export default function BarakatMakkiyyah() {
  const title = "Barakat Makkiyyah — Offline Selawat Companion";
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
    image: "https://rusdy.com/assets/barakat.jpg",
  };

  const screenshots = [
    "screenshot_20260113-201746.png",
    "screenshot_20260113-201751.png",
    "screenshot_20260113-201754.png",
    "screenshot_20260113-201756.png",
  ];

  return (
    <>
      <SEO
        title={title}
        description={description}
        path="/barakat-makkiyyah"
        type="article"
        image="/assets/barakat.jpg"
        jsonLd={jsonLd}
      />

      {/* Breadcrumb strip */}
      <div className="back-strip">
        <Link to="/#work" className="back-link">
          ← cd .. // return_to_work
        </Link>
        <span className="dim">~/projects/barakat-makkiyyah</span>
      </div>

      {/* Case Hero */}
      <section className="case-hero px">
        <div className="case-hero-inner">
          <div className="rv">
            <span className="tag xs up">[05] // case_study · mobile_app</span>
            <h1>
              Barakat<br />
              <span className="o">Makkiyyah</span><span className="acc">.</span>
            </h1>
            <p className="lead">
              A fully offline Barakat Makkiyyah library featuring 805 selawat, guided recitation
              methods (hizb or one-third), multilingual UI, and on-device audio playback so readers
              can follow the text with or without an internet connection.
            </p>

            <div className="case-meta-box">
              <table className="sys">
                <tbody>
                  <tr>
                    <td>PLATFORM</td>
                    <td>
                      <span className="ok">Android + iOS</span> (Expo / React Native)
                    </td>
                  </tr>
                  <tr>
                    <td>CORE SPECS</td>
                    <td>
                      Offline library · Hizb &amp; 1/3 filters · Background audio with seek · Search &amp; highlight
                    </td>
                  </tr>
                  <tr>
                    <td>DATA ASSETS</td>
                    <td>Bundled Barakat Makkiyyah text, Arabic intro, and local audio assets</td>
                  </tr>
                  <tr>
                    <td>STATUS</td>
                    <td><span className="led"></span><span className="ok">LIVE IN PRODUCTION</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="case-actions">
              <a
                className="btn p"
                href="https://play.google.com/store/apps/details?id=com.barakatmakkiyyah.rusdyahmad"
                target="_blank"
                rel="noopener noreferrer"
              >
                get_on_google_play →
              </a>
              <a
                className="btn"
                href="https://kitabselawat.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                visit_website ↗
              </a>
              <Link className="btn btn-ghost" to="/#work">
                ./all_builds
              </Link>
            </div>

            <div className="case-sublinks">
              <span className="dim">docs:</span>
              <Link to="/barakat-makkiyyah/privacy">Privacy Policy</Link>
              <Link to="/barakat-makkiyyah/terms">Terms of Service</Link>
              <Link to="/barakat-makkiyyah/support">Support</Link>
            </div>
          </div>

          <div className="case-hero-media rv">
            <div className="shot" style={{ "--tint": "#D7E0D1" }}>
              <img
                src="/assets/barakat.jpg"
                alt="Barakat Makkiyyah preview"
                style={{ objectPosition: "center" }}
              />
              <span className="hud"></span>
              <span className="lbl">/barakat-makkiyyah</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Details Grid */}
      <section className="case-grid">
        <div className="case-card rv">
          <span className="tag xs up">[01] // scope_delivery</span>
          <h3 style={{ marginTop: "12px" }}>What I built</h3>
          <ul>
            <li>Offline Barakat Makkiyyah library containing all 805 selawat entries.</li>
            <li>Recitation guide with hizb (7 days) and one-third (3 days) reading paths.</li>
            <li>On-device audio playback engine with play, pause, stop, and seek scrubbing.</li>
            <li>Instant number lookup and keyword search with in-line Arabic text highlighting.</li>
            <li>Adjustable typography scaling, dark/light reading modes, and multilingual UI.</li>
          </ul>
        </div>
        <div className="case-card rv">
          <span className="tag xs up">[02] // engineering</span>
          <h3 style={{ marginTop: "12px" }}>Technical highlights</h3>
          <ul>
            <li>Expo + React Native build optimized specifically for low memory and instant offline boots.</li>
            <li>Audio playback handled entirely from bundled assets without external latency.</li>
            <li>Seamless background audio playback via platform audio mode configuration.</li>
            <li>AsyncStorage persistence for fast recall of user language, reading bookmarks, and typography sizes.</li>
            <li>FlatList virtualization with pinned header controls for high-speed scrolling through large texts.</li>
          </ul>
        </div>
      </section>

      {/* Stack Section */}
      <section className="case-stack-sec px rv">
        <div>
          <span className="tag xs up">{"// stack_architecture"}</span>
          <h4 style={{ marginTop: "8px" }}>Expo + React Native, built for offline performance</h4>
        </div>
        <div className="chips">
          <span className="chip">Expo</span>
          <span className="chip">React Native</span>
          <span className="chip">Expo Audio</span>
          <span className="chip">AsyncStorage</span>
          <span className="chip">Multilingual UI</span>
          <span className="chip">Zero-network</span>
        </div>
      </section>

      {/* Screen Gallery */}
      <section className="gallery-sec px">
        <div className="sh" style={{ paddingTop: 0, paddingBottom: "24px" }}>
          <span className="tag xs up">{"// interface_telemetry"}</span>
          <h2 className="rv">App screens <span className="o">in action.</span></h2>
          <span className="xs up dim right">04 captures</span>
        </div>
        <div className="gallery-grid">
          {screenshots.map((file, idx) => (
            <div className="gallery-item rv" key={file}>
              <div className="shot">
                <img
                  src={`/projects/barakat/${file}`}
                  alt={`Barakat Makkiyyah interface capture 0${idx + 1}`}
                  loading="lazy"
                />
                <span className="hud"></span>
                <span className="lbl">screen_0{idx + 1}.png</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
