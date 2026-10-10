import { ArrowUpRight } from "lucide-react";
import { appSites, bookSites, type SiteLink } from "@/data/sites";

function Cards({ items }: { items: SiteLink[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((s) => (
        <a key={s.href} href={s.href} className="block border border-border p-5 hover:border-primary/50 transition-colors group">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h4 className="font-semibold group-hover:text-primary">{s.name}</h4>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary flex-shrink-0" />
          </div>
          <div className="text-xs text-primary mb-2">{s.tag}</div>
          <p className="text-sm text-muted-foreground">{s.blurb}</p>
        </a>
      ))}
    </div>
  );
}

export function AppsBooksSection() {
  return (
    <section id="apps-books" className="py-20 border-t border-border">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">[ BEYOND TRAINING ]</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our apps &amp; books</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Software and fiction from Remnant Security.</p>
          </div>
          <h3 id="apps" className="text-lg font-semibold mb-4">Apps</h3>
          <Cards items={appSites} />
          <h3 id="books" className="text-lg font-semibold mt-10 mb-4">Books</h3>
          <Cards items={bookSites} />
        </div>
      </div>
    </section>
  );
}
