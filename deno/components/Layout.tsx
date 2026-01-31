import { ComponentChildren } from "preact";
import SiteFooter from "./SiteFooter.tsx";
import SiteHeader from "../islands/SiteHeader.tsx";
import RevealObserver from "../islands/RevealObserver.tsx";

interface LayoutProps {
  children: ComponentChildren;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div class="bg-noise"></div>
      <SiteHeader />
      <main id="top">
        {children}
      </main>
      <SiteFooter />
      <RevealObserver />
    </>
  );
}
