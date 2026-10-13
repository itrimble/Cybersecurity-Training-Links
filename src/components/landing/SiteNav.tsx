import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { appSites, blogHref, bookSites, contactHref, type SiteLink } from "@/data/sites";
import { Mark } from "./Mark";

function Dropdown({ label, items }: { label: string; items: SiteLink[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("mousedown", onClick); };
  }, [open]);
  const id = `menu-${label.toLowerCase()}`;
  return (
    <div ref={ref} className="relative" onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-md px-1 py-2 text-[0.9375rem] text-muted-foreground transition-colors hover:text-foreground aria-expanded:text-foreground"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
      >
        {label} <ChevronDown aria-hidden className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        id={id}
        hidden={!open}
        className="absolute right-0 top-full z-50 w-80 pt-2"
      >
        <ul className="rounded-[14px] border border-border bg-card p-2 shadow-[0_18px_40px_-12px_oklch(0_0_0/0.6)]">
          {items.map((s) => (
            <li key={s.href}>
              <a href={s.href} className="block rounded-[10px] px-3 py-2.5 transition-colors hover:bg-secondary">
                <span className="block font-medium text-foreground">{s.name}</span>
                <span className="block text-sm text-muted-foreground">{s.tag}</span>
              </a>
              {s.buy?.map((b) => (
                <a key={b.href} href={b.href} target="_blank" rel="noopener" className="block rounded-[10px] py-1.5 pl-6 pr-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                  {b.label}
                </a>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// The first four are in-page anchors; Blog is a separate site on its own
// subdomain. Keeping it in this list means desktop and mobile stay in step,
// since both render from it.
const primaryLinks = [
  { label: "Career paths", href: "#careers" },
  { label: "Certifications", href: "#certifications" },
  { label: "Courses", href: "#courses" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: blogHref },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/92 backdrop-blur-md">
      <nav aria-label="Main" className="container flex h-16 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2.5 font-display text-[1.0625rem] font-semibold tracking-tight">
          <Mark className="h-6 w-6 text-primary" /> Remnant Security
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          {primaryLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-[0.9375rem] text-muted-foreground transition-colors hover:text-foreground">{l.label}</a>
          ))}
          <Dropdown label="Apps" items={appSites} />
          <Dropdown label="Books" items={bookSites} />
          <a href={contactHref} className="rounded-[10px] border border-input px-3.5 py-1.5 text-[0.9375rem] font-medium transition-colors hover:border-primary hover:text-primary">Contact</a>
        </div>
        <button className="rounded-md p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background px-5 pb-6 pt-4 lg:hidden">
          <ul className="space-y-1">
            {primaryLinks.map((l) => (
              <li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className="block py-2 text-lg font-medium">{l.label}</a></li>
            ))}
          </ul>
          {[{ t: "Apps", items: appSites }, { t: "Books", items: bookSites }].map(({ t, items }) => (
            <div key={t} className="mt-5">
              <p className="mb-1 text-sm font-semibold text-muted-foreground">{t}</p>
              <ul>
                {items.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} className="block py-1.5">{s.name}</a>
                    {s.buy?.map((b) => <a key={b.href} href={b.href} target="_blank" rel="noopener" className="block py-1 pl-4 text-sm text-muted-foreground">{b.label}</a>)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <a href={contactHref} className="mt-6 block rounded-[10px] bg-primary px-4 py-3 text-center font-semibold text-primary-foreground">Email Ian</a>
        </div>
      )}
    </header>
  );
}
