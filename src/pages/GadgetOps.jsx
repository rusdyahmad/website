import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

export default function GadgetOps() {
  const title = "Gadget Ops — Operations Platform";
  const description =
    "Operations platform for inventory, serials, multi-channel orders, affiliates, warranty claims, and reporting with marketplace + payment integrations.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Gadget Ops",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description,
    author: {
      "@type": "Person",
      name: "RA",
      url: "https://rusdy.com/",
    },
    url: "https://rusdy.com/gadget-ops",
    image: "https://rusdy.com/assets/gadgetops.jpg",
  };

  return (
    <>
      <SEO
        title={title}
        description={description}
        path="/gadget-ops"
        type="article"
        image="/assets/gadgetops.jpg"
        jsonLd={jsonLd}
      />

      {/* Breadcrumb strip */}
      <div className="back-strip">
        <Link to="/#work" className="back-link">
          ← cd .. // return_to_work
        </Link>
        <span className="dim">~/projects/gadget-ops</span>
      </div>

      {/* Case Hero */}
      <section className="case-hero px">
        <div className="case-hero-inner">
          <div className="rv">
            <span className="tag xs up">[08] // case_study · operations_platform</span>
            <h1>
              Gadget<br />
              <span className="o">Ops</span><span className="acc">.</span>
            </h1>
            <p className="lead">
              A unified back-office suite engineered for multi-channel gadget retailers.
              Gadget Ops connects product inventory, IMEI/serial number tracking, multi-channel marketplace orders
              (Shopee, TikTok, Sini), affiliate commission trees, and end-to-end warranty claim workflows.
            </p>

            <div className="case-meta-box">
              <table className="sys">
                <tbody>
                  <tr>
                    <td>PLATFORM</td>
                    <td>
                      <span className="ok">Web application</span> for internal operations + affiliates
                    </td>
                  </tr>
                  <tr>
                    <td>CORE MODULES</td>
                    <td>Products · Serials &amp; IMEIs · Multi-channel orders · Affiliates · Warranty claims · Reports</td>
                  </tr>
                  <tr>
                    <td>INTEGRATIONS</td>
                    <td>Shopee Open API · TikTok Shop API · SINI · BayarCash · EasyParcel</td>
                  </tr>
                  <tr>
                    <td>MY ROLE</td>
                    <td>Full-stack product developer — architecture, database design, queue pipelines, UI</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="case-actions">
              <a
                className="btn p"
                href="https://app.gadget.com.my/"
                target="_blank"
                rel="noopener noreferrer"
              >
                visit_app ↗
              </a>
              <Link className="btn btn-ghost" to="/#work">
                ./all_builds
              </Link>
            </div>
          </div>

          <div className="case-hero-media rv">
            <div className="shot">
              <img src="/assets/gadgetops.jpg" alt="Gadget Ops dashboard screenshot" />
              <span className="hud"></span>
              <span className="lbl">/gadget-ops</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution Grid */}
      <section className="case-grid">
        <div className="case-card rv">
          <span className="tag xs up">[01] // operational_bottlenecks</span>
          <h3 style={{ marginTop: "12px" }}>The challenge</h3>
          <p className="mid" style={{ marginBottom: "16px" }}>
            As order volume surged across Shopee, TikTok Shop, and offline direct sales,
            serial numbers were logged manually, affiliate commissions were tracked in disjointed spreadsheets,
            and warranty verification took hours per customer inquiry.
          </p>
          <ul>
            <li>High error rates in matching shipped hardware to IMEI/serial numbers.</li>
            <li>Lack of real-time commission calculation across tiered affiliate networks.</li>
            <li>No customer self-service warranty lookup or digital claim status updates.</li>
          </ul>
        </div>
        <div className="case-card rv">
          <span className="tag xs up">[02] // automated_orchestration</span>
          <h3 style={{ marginTop: "12px" }}>The platform</h3>
          <p className="mid" style={{ marginBottom: "16px" }}>
            A single, consolidated operations hub that automatically ingests orders via webhooks,
            binds serials during packing, calculates affiliate payouts, and manages the lifecycle of customer warranty claims.
          </p>
          <ul>
            <li>Automated webhook ingestion with worker queues for 100% order capture.</li>
            <li>Barcode/scanner support for zero-error serial tagging during packaging.</li>
            <li>Audited financial reporting and instant CSV exports for reconciliation.</li>
          </ul>
        </div>
      </section>

      {/* Capabilities */}
      <section className="sec px" style={{ paddingBottom: "48px" }}>
        <div className="sh" style={{ paddingTop: "48px", paddingBottom: "24px" }}>
          <span className="tag xs up">{"// operational_modules"}</span>
          <h2 className="rv">Engineered <span className="o">subsystems.</span></h2>
          <span className="xs up dim right">06 modules</span>
        </div>
        <div className="svc" style={{ borderTop: "1px solid var(--line)" }}>
          <div className="rv">
            <span className="path">~/modules/serials</span>
            <h4 style={{ fontSize: "22px", margin: "24px 0 10px" }}>Inventory &amp; Serials</h4>
            <p>Granular tracking of hardware units by serial number from supplier delivery to customer doorstep.</p>
          </div>
          <div className="rv">
            <span className="path">~/modules/sync</span>
            <h4 style={{ fontSize: "22px", margin: "24px 0 10px" }}>Marketplace Sync</h4>
            <p>Unified queue workers syncing orders and status updates across Shopee, TikTok, and direct channels.</p>
          </div>
          <div className="rv">
            <span className="path">~/modules/warranty</span>
            <h4 style={{ fontSize: "22px", margin: "24px 0 10px" }}>Warranty &amp; RMA</h4>
            <p>Self-serve customer warranty registration, claim verification, photo proof, and repair logs.</p>
          </div>
        </div>
      </section>

      {/* Stack Section */}
      <section className="case-stack-sec px rv">
        <div>
          <span className="tag xs up">{"// stack_architecture"}</span>
          <h4 style={{ marginTop: "8px" }}>Laravel + Inertia + Vue + MySQL, high-volume queues</h4>
        </div>
        <div className="chips">
          <span className="chip">Laravel</span>
          <span className="chip">Inertia.js</span>
          <span className="chip">Vue</span>
          <span className="chip">MySQL</span>
          <span className="chip">Redis Queues</span>
          <span className="chip">REST APIs</span>
          <span className="chip">Webhooks</span>
        </div>
      </section>
    </>
  );
}
