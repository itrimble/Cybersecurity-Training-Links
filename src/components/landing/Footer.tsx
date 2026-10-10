import { appSites, bookSites, contactEmail, contactHref, gumroadLinks, gumroadStore } from "@/data/sites";
import { Github, Mail } from "lucide-react";
import { Mark } from "./Mark";

type FooterLink = { label: string; href: string; external?: boolean };

const footerLinks: { title: string; links: FooterLink[] }[] = [
  {
    title: "Training",
    links: [
      { label: "Career paths", href: "#careers" },
      { label: "Certifications", href: "#certifications" },
      { label: "Resources", href: "#resources" },
      { label: "Courses", href: "#courses" },
      { label: "Pricing", href: "#pricing" },
      { label: "Waitlist", href: "#waitlist" },
    ],
  },
  { title: "Apps", links: appSites.map((s) => ({ label: s.name, href: s.href })) },
  {
    title: "Books",
    links: [
      ...bookSites.map((s) => ({ label: s.name, href: s.href })),
      ...gumroadLinks.map((b) => ({ label: b.label, href: b.href, external: true })),
      { label: "Gumroad store", href: gumroadStore, external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact", href: contactHref },
      { label: "Support", href: "#support" },
      { label: "Privacy", href: "#privacy" },
      { label: "Lectern terms", href: "/lectern/terms.html" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-16">
        <div className="mb-14 flex flex-col justify-between gap-8 border-b border-border pb-12 md:flex-row md:items-end">
          <div className="max-w-md">
            <p className="flex items-center gap-2.5 font-display text-lg font-semibold">
              <Mark className="h-6 w-6 text-primary" /> Remnant Security
            </p>
            <p className="mt-3 text-muted-foreground">
              Cybersecurity career training, plus the apps and books we make along the way.
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Questions, team training, or support</p>
            <a href={contactHref} className="mt-1 inline-flex items-center gap-2 font-display text-xl font-semibold text-primary underline decoration-primary/40 hover:decoration-primary md:text-2xl">
              <Mail aria-hidden className="h-5 w-5" /> {contactEmail}
            </a>
          </div>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h2 className="mb-4 font-sans text-sm font-semibold tracking-normal text-foreground" style={{ fontSize: "0.875rem" }}>{section.title}</h2>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-[0.9375rem] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                      {link.external && <span className="sr-only"> (opens in a new tab)</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} Remnant Security. All rights reserved.</p>
          <a href="https://github.com/itrimble" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-foreground">
            <Github aria-hidden className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
