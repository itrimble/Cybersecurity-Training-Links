import { useState } from "react";
import { Shield, ChevronDown, Menu, X } from "lucide-react";
import { appSites, bookSites, type SiteLink } from "@/data/sites";

function Dropdown({ label, items }: { label: string; items: SiteLink[] }) {
  return (
    <div className="relative group">
      <button className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors py-2" aria-haspopup="true">
        {label} <ChevronDown className="h-3 w-3" />
      </button>
      <div className="absolute right-0 top-full hidden group-hover:block group-focus-within:block min-w-64 bg-background border border-border p-2 shadow-lg">
        {items.map((s) => (
          <a key={s.href} href={s.href} className="block px-3 py-2 text-sm hover:text-primary hover:bg-primary/5">
            <span className="font-medium">{s.name}</span>
            <span className="block text-xs text-muted-foreground">{s.tag}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <nav className="container px-4 h-14 flex items-center justify-between max-w-6xl mx-auto">
        <a href="#" className="flex items-center gap-2 font-bold">
          <Shield className="h-5 w-5 text-primary" /> Remnant Security
        </a>
        <div className="hidden md:flex items-center gap-6">
          <a href="#careers" className="text-sm text-muted-foreground hover:text-primary">Training</a>
          <a href="#certifications" className="text-sm text-muted-foreground hover:text-primary">Certifications</a>
          <Dropdown label="Apps" items={appSites} />
          <Dropdown label="Books" items={bookSites} />
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary">Pricing</a>
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border px-4 py-3 space-y-3 bg-background">
          <a href="#careers" onClick={() => setOpen(false)} className="block text-sm">Training</a>
          <a href="#certifications" onClick={() => setOpen(false)} className="block text-sm">Certifications</a>
          <div>
            <div className="text-xs font-semibold text-primary mb-1">APPS</div>
            {appSites.map((s) => <a key={s.href} href={s.href} className="block text-sm py-1 text-muted-foreground">{s.name}</a>)}
          </div>
          <div>
            <div className="text-xs font-semibold text-primary mb-1">BOOKS</div>
            {bookSites.map((s) => <a key={s.href} href={s.href} className="block text-sm py-1 text-muted-foreground">{s.name}</a>)}
          </div>
          <a href="#pricing" onClick={() => setOpen(false)} className="block text-sm">Pricing</a>
        </div>
      )}
    </header>
  );
}
