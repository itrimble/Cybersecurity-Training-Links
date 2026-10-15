import "@fontsource-variable/bricolage-grotesque/wght.css";
import "@fontsource-variable/public-sans/wght.css";
import "@fontsource-variable/jetbrains-mono/wght.css";
import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import posthog from 'posthog-js'
import './index.css'
import App from './App.tsx'

posthog.init('phc_q4H6cMy4vo2kZetsdPjvPNWkJgjhC32MBHnVFj7HTzdf', {
  api_host: 'https://us.i.posthog.com',
  defaults: '2026-05-30',
  disable_session_recording: true,
  person_profiles: 'identified_only'
})

const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// scripts/prerender.mjs fills #root with a build-time render of the same tree,
// so in production we hydrate it rather than throwing it away and re-rendering.
// `npm run dev` serves the empty template, which takes the createRoot branch.
if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
