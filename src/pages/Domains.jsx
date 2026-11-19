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
  {
    name: "sepak.my",
    meaning: "Kick off something great.",
    description: "A sharp, memorable name for football news, a fan community, or a football brand.",
    illustration: "A football boot striking a ball above a sweeping green football pitch",
  },
  {
    name: "algoritma.my",
    meaning: "Built on smart ideas.",
    description: "A distinctive name for software, AI, coding education, or a technology studio.",
    illustration: "Branching geometric nodes, connected logic blocks, and an abstract computer chip",
  },
  {
    name: "keropok.my",
    meaning: "A familiar crunch.",
    description: "A deliciously local name for a keropok brand, snack shop, or Malaysian food business.",
    illustration: "A bowl of golden Malaysian fish crackers in a warm food still life",
  },
  {
    name: "patin.my",
    meaning: "Fresh from the river.",
    description: "A short, recognisable name for freshwater fish, aquaculture, or a local food destination.",
    illustration: "A silver patin fish swimming through blue river curves and tropical leaves",
  },
  {
    name: "janda.my",
    meaning: "A new chapter, your way.",
    description: "A memorable Malay name for a community, personal stories, or a lifestyle publication.",
    illustration: "A confident woman wearing a hijab beside a flowering branch in warm plum and rose",
  },
  {
    name: "sekarang.my",
    meaning: "The moment is now.",
    description: "An action-ready name for timely news, on-demand services, or everyday discovery.",
    illustration: "A bold clock, a rising sun, and flowing arcs that evoke the present moment",
  },
  {
    name: "quran.my",
    meaning: "A place for reflection.",
    description: "A dedicated name for the Quran, learning, and reflection. This domain is not for sale.",
    illustration: "A Quran resting on a wooden rehal beneath an emerald and gold arch",
    forSale: false,
  },
];

export default function Domains() {
  return (
    <>
      <SEO
        title=".my Domain Portfolio — RA/SYS"
        description="Explore a collection of memorable Malaysian .my domains. Selected domains are available for sale; quran.my is not for sale."
        path="/domains"
      />
      <section className="sec domain-section" id="domains" aria-labelledby="domains-title" data-screen-label="Domain portfolio">
        <div className="sh px">
          <span className="tag xs up">[MY] // domain_portfolio</span>
          <h1 id="domains-title">
            Good names. <span className="o">New possibilities.</span>
          </h1>
          <span className="xs up dim right">{String(domainItems.length).padStart(2, "0")} domains</span>
        </div>
        <p className="domain-intro px">
          A collection of memorable .my domains. Selected names are available for sale;
          check each card for availability and get in touch to discuss an offer.
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
                <span className={`domain-sale xs up${domain.forSale === false ? " domain-sale--reserved" : ""}`}>
                  {domain.forSale === false ? "Not for sale" : "For sale"}
                </span>
              </div>
              <div className="domain-info">
                <h3>{domain.name}</h3>
                <p className="domain-meaning">{domain.meaning}</p>
                <p>{domain.description}</p>
                {domain.forSale !== false && (
                  <a
                    className="domain-enquire"
                    href={`mailto:me@rusdy.com?subject=${encodeURIComponent(`Domain enquiry: ${domain.name}`)}`}
                    aria-label={`Enquire to buy ${domain.name}`}
                  >
                    Enquire to buy <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
