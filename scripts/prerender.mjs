// Inject a build-time render of the app into dist/index.html.
//
// The site is a client-rendered SPA. Googlebot executes JavaScript, but Bing,
// DuckDuckGo and every social link scraper do not, so without this step they
// receive an empty <div id="root"></div> and index the page as blank.
//
// This runs after `vite build` and `vite build --ssr`. It is pure Node - there
// is deliberately no headless browser here, so CI needs nothing extra.
//
// Every check below is fatal. A silent failure would publish a blank page that
// looks fine in a browser, which is the exact defect this script exists to fix.

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const templatePath = resolve(root, "dist/index.html");
const serverEntry = resolve(root, "dist-ssr/entry-server.js");

function fail(message) {
  console.error(`FAIL prerender: ${message}`);
  process.exit(1);
}

if (!existsSync(templatePath)) fail("dist/index.html is missing. Run `vite build` first.");
if (!existsSync(serverEntry)) fail("dist-ssr/entry-server.js is missing. Run `vite build --ssr` first.");

const { render } = await import(serverEntry);
if (typeof render !== "function") fail("dist-ssr/entry-server.js does not export render().");

const template = readFileSync(templatePath, "utf8");
const marker = '<div id="root"></div>';
if (!template.includes(marker)) {
  fail(`dist/index.html does not contain ${marker}. The mount point changed; update this script.`);
}

let appHtml;
try {
  appHtml = render();
} catch (error) {
  fail(`render() threw. A component touched a browser global during render.\n${error?.stack ?? error}`);
}

// Gates. These assert the render produced the real page, not an empty shell or
// an error boundary. Tune the threshold only with a reason.
const minBytes = 20_000;
if (typeof appHtml !== "string" || appHtml.length < minBytes) {
  fail(`render() returned ${appHtml?.length ?? 0} bytes, expected at least ${minBytes}.`);
}
for (const required of ["<h1", "Find your way into cybersecurity", "</footer>"]) {
  if (!appHtml.includes(required)) fail(`rendered HTML is missing ${JSON.stringify(required)}.`);
}

writeFileSync(templatePath, template.replace(marker, `<div id="root">${appHtml}</div>`), "utf8");

const text = appHtml.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
const links = (appHtml.match(/<a\b/g) ?? []).length;
console.log(
  `PASS prerender: ${appHtml.length} bytes of HTML, ${text.length} crawler-visible characters, ${links} links`,
);
