import { Shield, Github, Linkedin, Twitter, ExternalLink } from "lucide-react";

const footerLinks = [
  {
    title: "Start Here",
    links: [
      { label: "90-Day Plan", href: "#plan-builder" },
      { label: "Free 2026 Roadmap", href: "/Cybersecurity-Career-Roadmap-2026.pdf" },
      { label: "Career Paths", href: "#careers" },
      { label: "Courses", href: "#courses" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Certifications", href: "#certifications" },
      { label: "Learning Resources", href: "#resources" },
      { label: "Pricing", href: "#pricing" },
      { label: "Waitlist", href: "#waitlist" },
    ],
  },
  {
    title: "Connect",
    links: [
      {
        label: "Start.me Collection",
        href: "https://start.me/p/nR1xwN/cybersecurity-resources",
        external: true,
      },
      { label: "Contact", href: "mailto:hello@remnantsecurity.com" },
    ],
  },
];

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/remnantsec", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/remnant-security", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/remnant-security", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="icon-box">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <span className="font-bold">Remnant Security</span>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                Portfolio-first cybersecurity training: choose a lane, build proof,
                and ship a plan you can execute in 90 days.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-border p-2 transition-colors hover:border-primary/50 hover:text-primary"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="mb-4 text-sm font-semibold">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...("external" in link && link.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                        {"external" in link && link.external && (
                          <ExternalLink className="h-3 w-3" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Remnant Security. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Made with <span className="text-primary">&lt;/&gt;</span> for the security community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
