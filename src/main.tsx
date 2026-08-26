import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import posthog from 'posthog-js'
import './index.css'
import App from './App.tsx'

posthog.init('phc_q4H6cMy4vo2kZetsdPjvPNWkJgjhC32MBHnVFj7HTzdf', {
  api_host: 'https://us.i.posthog.com',
  defaults: '2026-05-30',
  disable_session_recording: true,
  person_profiles: 'identified_only'
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
