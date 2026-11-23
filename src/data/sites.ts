// Remnant Security app & book sites. Blurbs are taken from each site's own live <title>/meta description.
export type BuyLink = { label: string; href: string };
export type SiteLink = { name: string; href: string; tag: string; blurb: string; buy?: BuyLink[] };

// Gumroad is a secondary buy option for Max Mercer books 2 and 3 only (Amazon / books site stays primary).
export const gumroadStore = "https://remnantsecurity.gumroad.com";
export const gumroadLinks: BuyLink[] = [
  { label: "Obsidian Protocol on Gumroad", href: "https://remnantsecurity.gumroad.com/l/dafhqy" },
  { label: "Lazarus Directive on Gumroad", href: "https://remnantsecurity.gumroad.com/l/zxega" },
];

export const appSites: SiteLink[] = [
  { name: "All apps", href: "https://apps.remnantsecurity.com/", tag: "Portfolio", blurb: "Public Mac, iOS and web software from Remnant Security: Lectern AI, SnapDog, StatBar, CyberSim and Plumber Puzzle: Pipe Flow, with Lightfence, Night Chorus and Comfy Golf coming soon, plus AI Budget Build, Remnant AI Models, Let Me Retire and the Grok Bot Wiki." },
  { name: "SnapDog", href: "https://snapdog.remnantsecurity.com/", tag: "Mac · $14.99 one-time", blurb: "Capture, record & annotate from your Mac's menu bar — OCR, QR tools, on-device transcription, workflows, and 18 built-in destinations." },
  { name: "Lectern AI", href: "https://lectern.remnantsecurity.com/", tag: "Mac", blurb: "Talk tracks for every slide. Turns decks into instructor-ready teaching packages — talk tracks, labs, quizzes, handouts — on your Mac." },
  { name: "CyberSim", href: "https://cybersim.remnantsecurity.com/", tag: "iOS · Free", blurb: "Cert exam practice for iOS. Security+, CISSP, CEH, and more — 10 certs, 7 question types. Security+ free. Full unlock coming soon." },
  { name: "Plumber Puzzle: Pipe Flow", href: "https://plumberpuzzle.remnantsecurity.com/", tag: "iOS · $2.99 one-time", blurb: "Connect pipes. Beat the flow. 140 handcrafted pipe puzzles for iPhone. No ads, no account." },
  { name: "Lightfence", href: "https://lightfence.remnantsecurity.com/", tag: "iPhone · iPad · Apple TV · Coming soon", blurb: "Conquer the grid. Claim the universe. A neon arcade game of cutting lines and claiming ground: ten sectors, ten guardian fights, a 100-stage campaign and Endless mode." },
  { name: "Night Chorus", href: "https://nightchorus.remnantsecurity.com/", tag: "iPhone · iPad · Apple TV · Coming soon", blurb: "A homebrew rhythm puzzle game: build connected crystal networks, bank the sweep, and journey through fifteen audiovisual skins." },
  { name: "Comfy Golf", href: "https://comfygolf.remnantsecurity.com/", tag: "Web · In development", blurb: "A cozy 3D golf game in the browser: two original three-hole courses, a caddie who reads the shot, and a three-click swing. Free, no account, no install." },
  { name: "AI Budget Build", href: "https://aibudgetbuilder.remnantsecurity.com/", tag: "Web · Free", blurb: "A parts picker for a cheap local-AI machine with 128 GB of video memory or more. Start from the PC you own, see what fits, what it costs and which models it can run. No account, no tracking." },
  { name: "Remnant AI Models", href: "https://aimodels.remnantsecurity.com/", tag: "Web · Free", blurb: "Remnant Security’s local AI model archive: what we keep, what runs on which machine, and how to run it." },
  { name: "Let Me Retire", href: "https://letmeretire.remnantsecurity.com/", tag: "Web · Free", blurb: "One tired person. One million dollars. Zero desire to attend another meeting." },
  { name: "Grok Bot Wiki", href: "https://wiki.remnantsecurity.com/", tag: "Docs · Wiki", blurb: "The automation stack behind Remnant Security: systems, agents, decisions and the skills they use." },
];

export const bookSites: SiteLink[] = [
  { name: "Books by Ian Trimble", href: "https://books.remnantsecurity.com/", tag: "Author hub", blurb: "Intelligent suspense at the edge of technology. Start with Code Red, the Max Mercer series, or The Unfiltered Future." },
  { name: "Code Red", href: "https://books.remnantsecurity.com/code-red/", tag: "Novel", blurb: "The race to build and control artificial intelligence." },
  { name: "The Max Mercer Series", href: "https://books.remnantsecurity.com/max-mercer/", tag: "Trilogy", blurb: "Bay Enclave, 2043. Start with The Halcyon Key. Then The Obsidian Protocol and The Lazarus Directive.", buy: gumroadLinks },
  { name: "The Unfiltered Future — sample", href: "https://books.remnantsecurity.com/the-unfiltered-future/sample.html", tag: "Free sample", blurb: "The AI doesn't lie. That's what makes it dangerous. Read the opening." },
];

// Single contact address for the apex site (training, teams, Lectern support, general).
export const contactEmail = "iantrimble@remnantsecurity.com";
export const contactHref = `mailto:${contactEmail}`;

// Build notes and write-ups. One destination rather than a collection, so it sits
// in the nav as a plain link alongside Contact rather than becoming a dropdown.
export const blogHref = "https://blog.remnantsecurity.com/";
