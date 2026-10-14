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
  { name: "All apps", href: "https://apps.remnantsecurity.com/", tag: "Portfolio", blurb: "Public Mac and iOS software from Remnant Security: Lectern AI, SnapDog, CyberSim, and Plumber Puzzle: Pipe Flow." },
  { name: "SnapDog", href: "https://snapdog.remnantsecurity.com/", tag: "Mac · $14.99 one-time", blurb: "Capture, record & annotate from your Mac's menu bar — OCR, QR tools, on-device transcription, workflows, and 18 built-in destinations." },
  { name: "Lectern AI", href: "https://lectern.remnantsecurity.com/", tag: "Mac", blurb: "Talk tracks for every slide. Turns decks into instructor-ready teaching packages — talk tracks, labs, quizzes, handouts — on your Mac." },
  { name: "CyberSim", href: "https://cybersim.remnantsecurity.com/", tag: "iOS · Free", blurb: "Cert exam practice for iOS. Security+, CISSP, CEH, and more — 10 certs, 7 question types. Security+ free. Full unlock coming soon." },
  { name: "Plumber Puzzle: Pipe Flow", href: "https://plumberpuzzle.remnantsecurity.com/", tag: "iOS · $2.99 one-time", blurb: "Connect pipes. Beat the flow. 140 handcrafted pipe puzzles for iPhone. No ads, no account." },
  { name: "Lightfence", href: "https://lightfence.remnantsecurity.com/", tag: "iPhone · iPad · Apple TV · Coming soon", blurb: "Conquer the grid. Claim the universe. A neon arcade game of cutting lines and claiming ground: ten sectors, ten guardian fights, a 100-stage campaign and Endless mode." },
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
