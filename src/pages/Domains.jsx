import SEO from "../components/SEO.jsx";

const domainItems = [
  {
    name: "tenang.my",
    meaning: "Calm, by name.",
    description: "A natural fit for wellness, mindful living, or a peaceful retreat.",
    illustration: "A quiet tropical lake with green hills and a warm sun",
  },
  {
    name: "seluar.my",
    meaning: "Made for a good fit.",
    description: "A direct, memorable name for a clothing label or fashion store.",
    illustration: "Indigo denim and terracotta trousers with tailoring scissors",
  },
  {
    name: "kopiah.my",
    meaning: "Rooted in tradition.",
    description: "A distinctive home for kopiah, modest wear, or everyday essentials.",
    illustration: "Ivory embroidered kopiah caps against an emerald and gold backdrop",
  },
  {
    name: "borak.my",
    meaning: "Start a conversation.",
    description: "A friendly name for a community, podcast, or the next place to connect.",
    illustration: "Playful speech bubbles above two cups of kopitiam coffee",
  },
  {
    name: "sukan.my",
    meaning: "A name with momentum.",
    description: "Built for a sports brand, active community, or match-day destination.",
    illustration: "A badminton racket, shuttlecock, football, and curved running track",
  },
  {
    name: "reda.my",
    meaning: "Make room for peace.",
    description: "A warm, meaningful name for wellbeing, reflection, or intentional living.",
    illustration: "Open hands holding a leafy sprig beneath a warm sun and gentle hills",
  },
  {
    name: "sini.my",
    meaning: "It starts here.",
    description: "A welcoming name for local discovery, a neighbourhood hub, or a new destination.",
    illustration: "An orange location pin among village homes, palms, and winding paths",
  },
];

export default function Domains() {
  return (
    <>
      <SEO
        title=".my Domains for Sale — RA/SYS"
        description="Explore tenang.my, seluar.my, kopiah.my, borak.my, sukan.my, reda.my, and sini.my. Memorable Malaysian domains available for sale. Enquire directly to discuss an offer."
        path="/domains"
      />
      <section className="sec domain-section" id="domains" aria-labelledby="domains-title" data-screen-label="Domains for sale">
        <div className="sh px">
          <span className="tag xs up">[MY] // domain_portfolio</span>
          <h1 id="domains-title">
            Good names. <span className="o">New possibilities.</span>
          </h1>
          <span className="xs up dim right">{String(domainItems.length).padStart(2, "0")} domains</span>
        </div>
        <p className="domain-intro px">
          A collection of memorable .my domains, available for sale. Find a name
          for your next idea and get in touch to discuss an offer.
        </p>
        <div className="domain-grid">
          {domainItems.map((domain) => (
            <article className="domain-card" key={domain.name}>
              <div className="domain-art">
                <img
                  src={`/assets/domains/${domain.name.split(".")[0]}.webp`}
                  alt={domain.illustration}
                  width="960"
                  height="960"
                  loading="lazy"
                />
                <span className="domain-sale xs up">For sale</span>
              </div>
              <div className="domain-info">
                <h3>{domain.name}</h3>
                <p className="domain-meaning">{domain.meaning}</p>
                <p>{domain.description}</p>
                <a
                  className="domain-enquire"
                  href={`mailto:me@rusdy.com?subject=${encodeURIComponent(`Domain enquiry: ${domain.name}`)}`}
                  aria-label={`Enquire to buy ${domain.name}`}
                >
                  Enquire to buy <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
