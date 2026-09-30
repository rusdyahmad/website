import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import SiteHeader from "./SiteHeader.jsx";
import SiteFooter from "./SiteFooter.jsx";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    // Only scroll to top if there is no hash
    if (!location.hash) {
      window.scrollTo(0, 0);
    } else {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".rv, #pipe");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (typeof window.gtag !== "function") return;
    const pagePath = location.pathname + location.search;
    const pageTitle = document.title;
    window.gtag("config", "G-JP295JCT48", {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }, [location.pathname, location.search]);

  return (
    <>
      <SiteHeader />
      <div className="frame" id="top">
        <main>
          <Outlet />
        </main>
        <SiteFooter />
      </div>
      <SpeedInsights />
    </>
  );
}
