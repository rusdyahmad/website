import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

const workItems = [
  {
    num: "01",
    title: "REKOOD",
    category: "AI fintech app",
    description:
      "AI receipt manager: snap a receipt and it pulls out the merchant, date, amount and category in under a second. Tracks bills, subscriptions, debts and budgets, and works on iOS, Android, the web, Telegram and WhatsApp.",
    chips: ["ai-ocr", "ios · android", "web · bots"],
    href: "https://rekood.com",
    linkLabel: "visit rekood.com ↗",
    image: "/assets/rekood.png",
    tint: "#F7F7F5",
    lbl: "rekood.com",
    isExternal: true,
  },
  {
    num: "02",
    title: "Simple Mobile",
    category: "Telco operations platform",
    description:
      "Operations system for selling telco plans on TikTok Shop. It pulls in orders in real time through the TikTok Shop API, tags each SIM's ICCID serial or assigns an eSIM QR code, records packing and courier-drop photos as proof, and tracks recurring commissions for affiliates and dealers.",
    chips: ["tiktok-shop api", "webhooks", "esim", "rbac"],
    href: "https://simplemobile.my",
    linkLabel: "visit simplemobile.my ↗",
    image: "/assets/simplemobile.png",
    tint: "#07090C",
    lbl: "simplemobile.my",
    isExternal: true,
  },
  {
    num: "03",
    title: "Masjid.org.my",
    category: "Smart TV & digital signage",
    description:
      "Digital signage and smart TV prayer timetable system for mosques and suraus across Malaysia. Transforms any Android TV into an automated display with e-Solat JAKIM synchronization, Hijri calendar, hadith, announcements, and live lecture streaming via WebRTC.",
    chips: ["e-solat jakim", "smart tv", "digital signage", "webrtc live"],
    href: "https://masjid.org.my",
    linkLabel: "visit masjid.org.my ↗",
    image: "/assets/masjid.png",
    tint: "#065F46",
    lbl: "masjid.org.my",
    isExternal: true,
  },
  {
    num: "04",
    title: "RASUK",
    category: "Social network",
    description:
      "Social network built for \"honest reach\", with no algorithm deciding who sees what. Every post reaches all of your followers in a time-ordered feed, and reach numbers can be checked. It also has low-latency live streaming and direct creator commerce. Built in Malaysia, available worldwide in 18 languages.",
    chips: ["social", "live-streaming", "flutter", "ios · android"],
    href: "https://rasuk.app",
    linkLabel: "visit rasuk.app ↗",
    image: "/assets/rasuk.png",
    tint: "#F7F4F0",
    lbl: "rasuk.app",
    isExternal: true,
  },
  {
    num: "05",
    title: "eDesa",
    category: "E-commerce marketplace",
    description:
      "Malaysian marketplace for local SMEs and village products, from food, crafts and fresh produce to fashion and cosmetics. It has seller storefronts, themed malls (HALAL, RCB, SAFA), wholesale and e-infak, and works on web and mobile.",
    chips: ["marketplace", "multi-vendor", "inertia", "pwa"],
    href: "https://edesa.my",
    linkLabel: "visit edesa.my ↗",
    image: "/assets/edesa.png",
    tint: "#FFFFFF",
    lbl: "edesa.my",
    isExternal: true,
  },
  {
    num: "06",
    title: "Barakat Makkiyyah",
    category: "Mobile app",
    description:
      "Offline companion with 805 selawat, local audio recitations, hizb-based reading paths, and fast search.",
    chips: ["offline", "audio", "expo"],
    href: "/barakat-makkiyyah",
    linkLabel: "open case_study →",
    image: "/assets/barakat.jpg",
    tint: "#D7E0D1",
    lbl: "/barakat-makkiyyah",
    imgPos: "center",
    isExternal: false,
  },
  {
    num: "07",
    title: "Waktu Solat",
    category: "Mobile app",
    description:
      "Malaysia prayer-times app with next-prayer countdown, daily timetable, Qiblah direction, and home-screen widgets.",
    chips: ["expo", "react-native", "widgets"],
    href: "/waktusolat",
    linkLabel: "open case_study →",
    image: "/assets/waktusolat.jpg",
    tint: "#2F7D3A",
    contain: true,
    lbl: "/waktusolat",
    isExternal: false,
  },
  {
    num: "08",
    title: "SINI",
    category: "Sales platform",
    description:
      "All-in-one form builder and checkout for products, bookings, and digital goods — with a live dashboard for revenue, orders, and customers.",
    chips: ["checkout", "forms", "dashboard"],
    href: "/sini",
    linkLabel: "open case_study →",
    image: "/assets/sini.jpg",
    lbl: "/sini",
    isExternal: false,
  },
  {
    num: "09",
    title: "Gadget Ops",
    category: "Operations platform",
    description:
      "Back-office suite for products, serials, multi-channel orders (Shopee / TikTok / Sini), affiliates, warranty claims, payments, and reporting.",
    chips: ["orders", "integrations", "warranty"],
    href: "/gadget-ops",
    linkLabel: "open case_study →",
    image: "/assets/gadgetops.jpg",
    lbl: "/gadget-ops",
    isExternal: false,
  },
  {
    num: "10",
    title: "XBOSS",
    category: "Digital marketplace",
    description:
      "Global marketplace for eSIM, gaming top-up, modems, mobile plans, IT services, and affiliate offers.",
    chips: ["marketplace", "esim", "gaming"],
    href: "https://xboss.asia/",
    linkLabel: "visit xboss.asia ↗",
    image: "/assets/xboss.jpg",
    lbl: "xboss.asia",
    isExternal: true,
  },
];

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const [termLines, setTermLines] = useState([
    {
      type: "out",
      html: "RA/SYS v2026.09 — interactive shell\ntype <span class=\"acc\">help</span> or tap a command below.\n",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const termOutRef = useRef(null);

  // Typing animation for hero command
  useEffect(() => {
    const fullCmd = "build --fast --reliable --from=database --to=pixel";
    let index = 0;
    let timeoutId;

    const typeNext = () => {
      if (index <= fullCmd.length) {
        setTypedText(fullCmd.slice(0, index));
        index++;
        timeoutId = window.setTimeout(typeNext, 28 + Math.random() * 40);
      }
    };

    timeoutId = window.setTimeout(typeNext, 100);
    return () => window.clearTimeout(timeoutId);
  }, []);

  // Auto-scroll terminal output
  useEffect(() => {
    if (termOutRef.current) {
      termOutRef.current.scrollTop = termOutRef.current.scrollHeight;
    }
  }, [termLines]);

  const commandResponses = {
    help: "commands: whoami · ls work · stack · status · services · contact · clear",
    whoami:
      "RA — full-stack coder. 20+ yrs on the web, 100+ projects shipped.\ncore: go (api) · next.js (web) · flutter (mobile)\nalso: laravel · inertia · react · expo",
    "ls work":
      "rekood/              ai receipts · ios · android · web\nsimplemobile/        tiktok shop · telco ops · esim\nmasjid/              smart tv · digital signage · e-solat\nrasuk/               social · live streaming · no algorithm\nedesa/               marketplace · local smes\nbarakat-makkiyyah/   mobile · offline · audio\nwaktusolat/          mobile · widgets\nsini/                checkout · forms · dashboard\ngadget-ops/          orders · integrations · warranty\nxboss/               marketplace · esim · gaming",
    stack:
      "CORE\n  api    go\n  web    next.js\n  mobile flutter\n  db     postgres, mysql\nALSO\n  laravel · inertia · react · expo",
    status: "● OPEN FOR Q1 — 2 slots available. avg response < 24h.",
    services: "go apis · next.js web apps · flutter mobile apps",
    contact:
      'mail → <a href="mailto:me@rusdy.com">me@rusdy.com</a>',
  };

  const handleCommand = (raw) => {
    const c = raw.trim().toLowerCase();
    if (!c) return;

    if (c === "clear") {
      setTermLines([]);
      return;
    }

    const aliases = {
      ls: "ls work",
      work: "ls work",
      about: "whoami",
      email: "contact",
      mail: "contact",
    };

    const matched = commandResponses[c] || commandResponses[aliases[c]];
    const escapedInput = c.replace(/</g, "&lt;");

    setTermLines((prev) => [
      ...prev,
      { type: "in", html: escapedInput },
      {
        type: "out",
        html: matched
          ? matched
          : `zsh: command not found: ${escapedInput} — try 'help'`,
      },
    ]);
  };

  const onTermSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
    setInputVal("");
  };

  const title = "RA/SYS — Full-stack, database to pixel";
  const description =
    "Full-stack coder building fast, reliable products. Scalable Go APIs, Next.js front-ends, and Flutter apps for Android & iOS — clean architecture, polished UI when it matters.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "RA",
    jobTitle: "Full-stack coder",
    url: "https://rusdy.com/",
    image: "https://rusdy.com/og.png",
    email: "mailto:me@rusdy.com",
    sameAs: ["https://github.com/rusdyahmad"],
    knowsAbout: [
      "Go",
      "Next.js",
      "Flutter",
      "Laravel",
      "Inertia.js",
      "React",
      "PostgreSQL",
      "MySQL",
      "Expo",
    ],
  };

  return (
    <>
      <SEO title={title} description={description} path="/" jsonLd={jsonLd} />

      {/* HERO */}
      <section className="hero" data-screen-label="01 Hero">
        <div className="px">
          <div className="prompt">
            <span className="u">ra@sys</span>:<span className="dim">~</span>${" "}
            <span>{typedText}</span>
            <span className="caret"></span>
          </div>
          <h1>
            Database
            <br />
            <span className="o">to</span> <span className="a">pixel.</span>
          </h1>
        </div>

        <div className="hero-row px">
          <div className="rv">
            <p className="lede">
              Full-stack coder building <b>fast, reliable products</b>. Scalable{" "}
              <b>Go APIs</b>, <b>Next.js</b> front-ends, and <b>Flutter</b> apps for Android &amp;
              iOS — clean architecture, polished UI when it matters.
            </p>
            <div className="btns">
              <a className="btn p" href="#work">
                ./view_builds <span>↓</span>
              </a>
              <a className="btn" href="#contact">
                book_intro_call
              </a>
            </div>
          </div>
          <div className="rv">
            <table className="sys">
              <tbody>
                <tr>
                  <td>STATUS</td>
                  <td>
                    <span className="led"></span>
                    <span className="ok">OPEN FOR Q1</span>
                  </td>
                </tr>
                <tr>
                  <td>CAPACITY</td>
                  <td>2 new projects</td>
                </tr>
                <tr>
                  <td>FOCUS</td>
                  <td>Full-stack apps, dashboards, internal tools</td>
                </tr>
                <tr>
                  <td>CORE STACK</td>
                  <td>
                    <span className="ok">Go</span> · <span className="ok">Next.js</span> ·{" "}
                    <span className="ok">Flutter</span>
                  </td>
                </tr>
                <tr>
                  <td>ALSO</td>
                  <td className="mid">Laravel · Inertia · React · Expo · Postgres</td>
                </tr>
                <tr>
                  <td>RESPONSE</td>
                  <td>&lt; 24h avg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="ticker xs up" aria-hidden="true">
          <div className="ticker-in">
            <span><b>+43%</b>lead form conversion</span>
            <span><b>3×</b>faster release cycles</span>
            <span><b>A11Y</b>clean, accessible ui systems</span>
            <span><b>100+</b>projects shipped</span>
            <span><b>20+ YRS</b>building for the web</span>
            <span><b>GO · NEXT · FLUTTER</b>core stack</span>
            <span><b>WEB→MOBILE</b>one owner, whole stack</span>

            <span><b>+43%</b>lead form conversion</span>
            <span><b>3×</b>faster release cycles</span>
            <span><b>A11Y</b>clean, accessible ui systems</span>
            <span><b>100+</b>projects shipped</span>
            <span><b>20+ YRS</b>building for the web</span>
            <span><b>GO · NEXT · FLUTTER</b>core stack</span>
            <span><b>WEB→MOBILE</b>one owner, whole stack</span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats sec">
        <div className="stat">
          <div className="v">
            20<i>+</i>
          </div>
          <div className="l">Years on the web</div>
        </div>
        <div className="stat">
          <div className="v">
            100<i>+</i>
          </div>
          <div className="l">Projects shipped</div>
        </div>
        <div className="stat">
          <div className="v">
            24<i>h</i>
          </div>
          <div className="l">Avg response</div>
        </div>
        <div className="stat">
          <div className="v">
            <i>+</i>43%
          </div>
          <div className="l">Form conversion</div>
        </div>
        <div className="stat">
          <div className="v">
            3<i>×</i>
          </div>
          <div className="l">Release speed</div>
        </div>
      </section>

      {/* WORK */}
      <section className="sec" id="work" data-screen-label="02 Work">
        <div className="sh px">
          <span className="tag xs up">[01] // selected_work</span>
          <h2 className="rv">
            Recent builds <span className="o">with punch.</span>
          </h2>
          <span className="xs up dim right">
            {workItems.length < 10 ? `0${workItems.length}` : workItems.length} entries
          </span>
        </div>

        {workItems.map((item) => (
          <article className="proj" key={item.num}>
            <div className="meta">
              <span className="n">{item.num}</span>
              <span className="xs up dim">{item.category}</span>
            </div>
            <div className="info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="chips">
                {item.chips.map((chip) => (
                  <span className="chip" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
              {item.isExternal ? (
                <a
                  className="open"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.linkLabel}
                </a>
              ) : (
                <Link className="open" to={item.href}>
                  {item.linkLabel}
                </Link>
              )}
            </div>
            <div className="shotwrap">
              {item.isExternal ? (
                <a
                  className={`shot ${item.contain ? "contain" : ""}`}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ "--tint": item.tint }}
                >
                  <img
                    src={item.image}
                    alt={`${item.title} screenshot`}
                    loading="lazy"
                    style={item.imgPos ? { objectPosition: item.imgPos } : undefined}
                  />
                  <span className="hud"></span>
                  <span className="lbl">{item.lbl}</span>
                </a>
              ) : (
                <Link
                  className={`shot ${item.contain ? "contain" : ""}`}
                  to={item.href}
                  style={{ "--tint": item.tint }}
                >
                  <img
                    src={item.image}
                    alt={`${item.title} screenshot`}
                    loading="lazy"
                    style={item.imgPos ? { objectPosition: item.imgPos } : undefined}
                  />
                  <span className="hud"></span>
                  <span className="lbl">{item.lbl}</span>
                </Link>
              )}
            </div>
          </article>
        ))}
      </section>

      {/* SERVICES */}
      <section className="sec" id="services" data-screen-label="03 Services">
        <div className="sh px">
          <span className="tag xs up">[02] // services</span>
          <h2 className="rv">
            Full-stack delivery, <span className="o">web to mobile.</span>
          </h2>
          <span className="xs up dim right">03 modules</span>
        </div>
        <div className="svc">
          <div className="rv">
            <span className="path">~/services/backend</span>
            <h4>Go APIs</h4>
            <p>
              High-performance Go APIs with secure auth, integrations, and Postgres / MySQL databases built to scale.
            </p>
            <pre>
              <b>+</b> go{"\n"}
              <b>+</b> postgres / mysql{"\n"}
              <b>+</b> auth · integrations{"\n"}
              <span>~ also: laravel</span>
            </pre>
          </div>
          <div className="rv">
            <span className="path">~/services/web</span>
            <h4>Next.js web apps</h4>
            <p>
              Fast, SEO-ready web apps and dashboards with server rendering and clean state management.
            </p>
            <pre>
              <b>+</b> next.js{"\n"}
              <b>+</b> react · typescript{"\n"}
              <b>+</b> ui systems{"\n"}
              <span>~ also: inertia</span>
            </pre>
          </div>
          <div className="rv">
            <span className="path">~/services/mobile</span>
            <h4>Flutter mobile apps</h4>
            <p>
              Android + iOS from one Flutter codebase — smooth, native-feeling, and fast to ship.
            </p>
            <pre>
              <b>+</b> flutter · dart{"\n"}
              <b>+</b> ios · android{"\n"}
              <b>+</b> widgets · offline{"\n"}
              <span>~ also: expo / react native</span>
            </pre>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="sec" id="about" data-screen-label="04 About">
        <div className="sh px">
          <span className="tag xs up">[03] // about</span>
          <h2 className="rv">
            Sweats <span className="o">the details.</span>
          </h2>
          <span className="xs up dim right">whoami</span>
        </div>
        <div className="about">
          <div className="rv">
            <p className="big">
              I build production-ready products with Go on the backend, Next.js on the web, and Flutter on mobile — and still ship Laravel, Inertia and Expo when a project calls for it.{" "}
              <span>
                When design is needed, I keep it clean, purposeful, and aligned with the product goals.
              </span>
            </p>
          </div>
          <div className="rv">
            <span className="xs up dim">results.log</span>
            <ul className="results" style={{ marginTop: "8px" }}>
              <li>
                <span className="v">+43%</span>
                <span className="mid">Lead form conversion</span>
              </li>
              <li>
                <span className="v">3×</span>
                <span className="mid">Faster release cycles</span>
              </li>
              <li>
                <span className="v">A11Y</span>
                <span className="mid">Clean, accessible UI systems</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pipe" id="pipe">
          <div>
            <span className="xs up dim">step_01</span>
            <div className="bar2">
              <i></i>
            </div>
            <b>Kickoff + goals</b>
          </div>
          <div>
            <span className="xs up dim">step_02</span>
            <div className="bar2">
              <i></i>
            </div>
            <b>Architecture + plan</b>
          </div>
          <div>
            <span className="xs up dim">step_03</span>
            <div className="bar2">
              <i></i>
            </div>
            <b>Build + refine</b>
          </div>
          <div>
            <span className="xs up dim">step_04</span>
            <div className="bar2">
              <i></i>
            </div>
            <b>Launch + support</b>
          </div>
        </div>
      </section>

      {/* NOTES / CLIENT LOGS */}
      <section className="sec" id="notes" data-screen-label="05 Logs">
        <div className="sh px">
          <span className="tag xs up">[04] // client_logs</span>
          <h2 className="rv">
            Kind words <span className="o">from teams.</span>
          </h2>
          <span className="xs up dim right">02 entries</span>
        </div>
        <div className="quotes">
          <blockquote className="rv">
            <div className="log">[ok] feedback received · studio-north</div>
            <p>
              RA delivered a site that felt like our brand overnight. Clean, confident, and sharp.
            </p>
            <cite>— Studio North</cite>
          </blockquote>
          <blockquote className="rv">
            <div className="log">[ok] feedback received · brightline-labs</div>
            <p>
              The handoff was smooth and the performance improvements were huge.
            </p>
            <cite>— Brightline Labs</cite>
          </blockquote>
        </div>
      </section>

      {/* CONTACT */}
      <section className="sec" id="contact" data-screen-label="06 Contact">
        <div className="sh px">
          <span className="tag xs up">[05] // contact</span>
          <span></span>
          <span className="xs up dim right">
            <span className="led"></span>accepting connections
          </span>
        </div>
        <div className="contact">
          <div>
            <div className="huge">
              <a href="mailto:me@rusdy.com">
                Let’s
                <br />
                ship
                <br />
                <span className="acc">it →</span>
              </a>
            </div>
            <p className="mid" style={{ marginTop: "28px", maxWidth: "40ch" }}>
              Tell me what you’re building. I reply within 24 hours with questions, a rough plan, and next steps.
            </p>
            <div className="btns">
              <a className="btn p" href="mailto:me@rusdy.com">
                me@rusdy.com →
              </a>
            </div>
          </div>
          <div>
            <div className="term">
              <div className="term-h">
                <span>ra@sys — zsh</span>
                <span>80×24</span>
              </div>
              <div className="term-b" ref={termOutRef}>
                {termLines.map((line, idx) => (
                  <div
                    key={idx}
                    className={line.type}
                    dangerouslySetInnerHTML={{ __html: line.html }}
                  />
                ))}
              </div>
              <form className="term-f" onSubmit={onTermSubmit}>
                <span>$</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  autoComplete="off"
                  spellCheck="false"
                  placeholder="type 'help'"
                  aria-label="Terminal command"
                />
              </form>
            </div>
            <div className="hints">
              {[
                "help",
                "whoami",
                "ls work",
                "stack",
                "status",
                "services",
                "contact",
                "clear",
              ].map((cmd) => (
                <button key={cmd} type="button" onClick={() => handleCommand(cmd)}>
                  {cmd}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
