import { Head } from "fresh/runtime";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: string;
  jsonLd?: Record<string, unknown> | null;
}

export default function Seo({
  title,
  description,
  path,
  image = "/og.png",
  type = "website",
  jsonLd,
}: SeoProps) {
  const origin = "https://rusdy.com";
  const url = `${origin}${path}`;

  return (
    <Head>
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

      {jsonLd
        ? <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        : null}
    </Head>
  );
}
