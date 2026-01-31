const root = typeof globalThis !== "undefined" ? globalThis : undefined;

function gtag() {
  if (!root || typeof root.document === "undefined") {
    return;
  }
  root.dataLayer = root.dataLayer || [];
  root.dataLayer.push(arguments);
}

if (root && typeof root.document !== "undefined") {
  gtag("js", new Date());
  gtag("config", "G-JP295JCT48");
}
