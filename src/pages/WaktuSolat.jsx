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
    image: "https://rusdy.com/assets/waktusolat.jpg",
  };

  const screens = [1, 2, 3, 4];

  return (
    <>
      <SEO
        title={title}
        description={description}
        path="/waktusolat"
        type="article"
        image="/assets/waktusolat.jpg"
        jsonLd={jsonLd}
      />

      {/* Breadcrumb strip */}
      <div className="back-strip">
        <Link to="/#work" className="back-link">
          ← cd .. // return_to_work
        </Link>
        <span className="dim">~/projects/waktusolat</span>
      </div>

      {/* Case Hero */}
      <section className="case-hero px">
        <div className="case-hero-inner">
          <div className="rv">
            <span className="tag xs up">[06] // case_study · mobile_app</span>
            <h1>
              Waktu<br />
              <span className="o">Solat</span><span className="acc">.</span>
            </h1>
            <p className="lead">
              A Malaysia prayer times app built with Expo and React Native. It delivers pinpoint
              accurate prayer schedules, next-prayer countdown, Qiblah compass, reminders, and
              home-screen widgets that stay in real-time sync.
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
                    <td>Prayer timetable · Next-prayer countdown · Qiblah finder · Home-screen widgets</td>
                  </tr>
                  <tr>
                    <td>DATA PIPELINE</td>
                    <td>Official Malaysia e-Solat API with offline caching &amp; background refresh</td>
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
                href="https://play.google.com/store/apps/details?id=com.waktusolat.rusdyahmad"
                target="_blank"
                rel="noopener noreferrer"
              >
                get_on_google_play →
              </a>
              <Link className="btn btn-ghost" to="/#work">
                ./all_builds
              </Link>
            </div>

            <div className="case-sublinks">
              <span className="dim">docs:</span>
              <Link to="/waktusolat/privacy">Privacy Policy</Link>
              <Link to="/waktusolat/terms">Terms of Service</Link>
              <Link to="/waktusolat/support">Support</Link>
            </div>
          </div>

          <div className="case-hero-media rv">
            <div className="shot contain" style={{ "--tint": "#2F7D3A" }}>
              <img
                src="/assets/waktusolat.jpg"
                alt="Waktu Solat app icon"
                style={{ objectPosition: "center" }}
              />
              <span className="hud"></span>
              <span className="lbl">/waktusolat</span>
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
            <li>Prayer time schedule with next prayer countdown and daily timetable.</li>
            <li>Qiblah direction finder with digital compass calibration and smooth gyro heading.</li>
            <li>Home-screen widgets for quick glance updates every 15 minutes.</li>
            <li>Notification scheduling and azan audio triggers for daily prayer times.</li>
            <li>Zone picker supporting all Malaysian states and federal territories.</li>
          </ul>
        </div>
        <div className="case-card rv">
          <span className="tag xs up">[02] // engineering</span>
          <h3 style={{ marginTop: "12px" }}>Technical highlights</h3>
          <ul>
            <li>Expo + React Native architecture with localized Malay and English labels.</li>
            <li>Widget data pipeline that syncs app state seamlessly to Android and iOS widgets.</li>
            <li>GPS-assisted zone auto-detection and Hijri lunar date calculations.</li>
            <li>Resilient API-driven updates using the official JAKIM e-Solat endpoint.</li>
            <li>Lightweight bundle with instant cold-start time and minimal battery consumption.</li>
          </ul>
        </div>
      </section>

      {/* Stack Section */}
      <section className="case-stack-sec px rv">
        <div>
          <span className="tag xs up">{"// stack_architecture"}</span>
          <h4 style={{ marginTop: "8px" }}>Expo + React Native, built for accuracy and widgets</h4>
        </div>
        <div className="chips">
          <span className="chip">Expo</span>
          <span className="chip">React Native</span>
          <span className="chip">iOS Widgets</span>
          <span className="chip">Android Widgets</span>
          <span className="chip">Compass API</span>
          <span className="chip">Notifications</span>
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
          {screens.map((num) => (
            <div className="gallery-item rv" key={num}>
              <div className="shot">
                <img
                  src={`/projects/waktusolat/${num}.png`}
                  alt={`Waktu Solat interface capture 0${num}`}
                  loading="lazy"
                />
                <span className="hud"></span>
                <span className="lbl">screen_0{num}.png</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
