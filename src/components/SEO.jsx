import { Helmet } from "../lib/helmet.js";

export default function SEO({
  title,
  description,
  path,
  image = "/og.png",
  type = "website",
  jsonLd,
}) {
  const origin = "https://rusdy.com";
  const url = `${origin}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${origin}${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${origin}${image}`} />

      {jsonLd ? <script type="application/ld+json">{JSON.stringify(jsonLd)}</script> : null}
    </Helmet>
  );
}
