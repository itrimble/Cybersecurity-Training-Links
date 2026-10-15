import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

// Build-time entry point. scripts/prerender.mjs calls this to turn the app into
// static HTML, so crawlers that do not run JavaScript - Bing, DuckDuckGo, and
// the LinkedIn/Slack/Discord link scrapers - receive the real page.
//
// Nothing here may touch browser globals at render time. Components may use
// them inside event handlers and effects, which never run during this pass.
export function render(): string {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
