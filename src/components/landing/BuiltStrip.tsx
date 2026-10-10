import { ArrowUpRight } from "lucide-react";
import { appSites, bookSites } from "@/data/sites";

// Compact proof-of-work strip under the hero: one line per shipped product.
const short: Record<string, string> = {
  "SnapDog": "Mac capture & annotate",
  "Lectern AI": "Mac teaching packages",
  "CyberSim": "iOS cert exam practice",
  "Plumber Puzzle: Pipe Flow": "iOS pipe puzzles",
};
const items = [
  ...appSites.filter((s) => short[s.name]).map((s) => ({ name: s.name === "Plumber Puzzle: Pipe Flow" ? "Pipe Flow" : s.name, href: s.href, note: short[s.name] })),
  { name: "Books", href: bookSites[0].href, note: "Technology suspense fiction" },
];

export function BuiltStrip() {
  return (
    <section id="built" aria-labelledby="built-title" className="!py-8 bg-card">
      <div className="container flex flex-col gap-4 lg:flex-row lg:items-baseline lg:gap-10">
        <p id="built-title" className="shrink-0 text-sm font-semibold uppercase tracking-[0.08em] tracking-[0.08em] text-muted-foreground">
          Built by Remnant Security
        </p>
        <ul className="flex flex-wrap gap-x-8 gap-y-3">
          {items.map((i) => (
            <li key={i.href}>
              <a href={i.href} className="group inline-flex items-baseline gap-2">
                <span className="font-display font-semibold transition-colors group-hover:text-primary">{i.name}</span>
                <span className="text-sm text-muted-foreground">{i.note}</span>
                <ArrowUpRight aria-hidden className="h-3.5 w-3.5 self-center text-muted-foreground group-hover:text-primary" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
