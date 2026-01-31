import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SiteHeader from "./SiteHeader.jsx";
import SiteFooter from "./SiteFooter.jsx";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el, index) => {
      el.style.transitionDelay = `${index * 0.08}s`;
      observer.observe(el);
    });

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
      <div className="bg-noise"></div>
      <SiteHeader />
      <main id="top">
        <Outlet />
      </main>
      <SiteFooter />
      <SpeedInsights />
    </>
  );
}
