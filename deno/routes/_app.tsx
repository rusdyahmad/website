import { define } from "../utils.ts";
import Layout from "../components/Layout.tsx";

export default define.page(function App({ Component }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f4efe8" />
        <link rel="stylesheet" href="/styles.css" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JP295JCT48"
        >
        </script>
        <script src="/gtag.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Space+Grotesk:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Layout>
          <Component />
        </Layout>
      </body>
    </html>
  );
});
