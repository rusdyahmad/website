import Seo from "../components/Seo.tsx";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page not found - RA"
        description="Page not found."
        path="/404"
      />
      <section class="legal reveal">
        <div class="container legal-content">
          <p class="eyebrow">404</p>
          <h1>Page not found</h1>
          <p>The page you're looking for doesn't exist.</p>
          <a class="btn" href="/">Back to home</a>
        </div>
      </section>
    </>
  );
}
