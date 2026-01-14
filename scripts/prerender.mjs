import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const routes = [
  "/",
  "/sini",
  "/barakat-makkiyyah",
  "/barakat-makkiyyah/privacy",
  "/barakat-makkiyyah/terms",
  "/barakat-makkiyyah/support",
  "/waktusolat",
  "/waktusolat/privacy",
  "/waktusolat/terms",
  "/waktusolat/support",
  "/404",
];

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, "..", "dist");
const ssrDir = resolve(__dirname, "..", "dist-ssr");
const templateRaw = await readFile(resolve(distDir, "index.html"), "utf8");

function stripHeadTags(html) {
  return html
    .replace(/<title>.*?<\/title>/s, "")
    .replace(/<meta[^>]*name=["']description["'][^>]*>\s*/gi, "")
    .replace(/<meta[^>]*property=["']og:[^"']+["'][^>]*>\s*/gi, "")
    .replace(/<meta[^>]*name=["']twitter:[^"']+["'][^>]*>\s*/gi, "");
}

const template = stripHeadTags(templateRaw);

const ssrEntry = pathToFileURL(resolve(ssrDir, "entry-server.js")).href;
const { render } = await import(ssrEntry);

function injectHead(html, helmet) {
  const headTags = [
    helmet?.title?.toString() ?? "",
    helmet?.priority?.toString?.() ?? "",
    helmet?.meta?.toString() ?? "",
    helmet?.link?.toString() ?? "",
    helmet?.script?.toString() ?? "",
  ].join("\n");

  return html.replace("</head>", `${headTags}\n</head>`);
}

for (const route of routes) {
  const { app, helmet } = render(route);
  let html = template.replace('<div id="root"></div>', `<div id="root">${app}</div>`);
  html = injectHead(html, helmet);

  const outPath = route === "/"
    ? resolve(distDir, "index.html")
    : route === "/404"
      ? resolve(distDir, "404.html")
      : resolve(distDir, route.slice(1), "index.html");

  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, html, "utf8");
}
