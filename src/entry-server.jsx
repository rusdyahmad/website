import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "./lib/helmet.js";
import App from "./App.jsx";
import "./styles.css";

export function render(url) {
  const helmetContext = {};
  const app = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  return { app, helmet: helmetContext.helmet };
}
