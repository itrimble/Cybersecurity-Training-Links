import { ArrowUpRight } from "lucide-react";
import { appSites, bookSites, type SiteLink } from "@/data/sites";

// An index, not a card grid: each row is one site, scannable like a table of contents.
function Index({ items, id, title }: { items: SiteLink[]; id: string; title: string }) {
  return (
    <div>
      <h3 id={id} className="mb-2 text-sm font-semibold uppercase tracking-[0.08em] text-muted-foreground">{title}</h3>
      <ul className="divide-y divide-border border-y border-border">
        {items.map((s) => (
          <li key={s.href} className="group py-5">
            <a href={s.href} className="grid gap-x-6 gap-y-1 sm:grid-cols-[minmax(0,14rem)_1fr_auto] sm:items-baseline">
              <span className="font-display text-xl font-semibold transition-colors group-hover:text-primary">{s.name}</span>
              <span className="text-muted-foreground">
                <span className="mr-2 text-sm font-medium text-foreground/85">{s.tag}</span>
                {s.blurb}
              </span>
              <ArrowUpRight aria-hidden className="hidden h-5 w-5 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary sm:block" />
            </a>
            {s.buy && (
              <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 sm:pl-[calc(14rem+1.5rem)]">
                {s.buy.map((b) => (
                  <a key={b.href} href={b.href} target="_blank" rel="noopener" className="text-sm text-primary underline">{b.label}</a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AppsBooksSection() {
  return (
    <section id="apps-books" aria-labelledby="apps-books-title">
      <div className="container">
        <div className="mb-12 max-w-2xl">
          <h2 id="apps-books-title" className="font-bold">Apps &amp; books</h2>
          <p className="mt-4 text-lg text-muted-foreground">Mac and iOS software and fiction, also from Remnant Security.</p>
        </div>
        <div className="grid gap-14 lg:grid-cols-1">
          <Index id="apps" title="Apps" items={appSites} />
          <Index id="books" title="Books" items={bookSites} />
        </div>
      </div>
    </section>
  );
}
