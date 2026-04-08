import { Shield, Github, Linkedin, Twitter, ExternalLink } from "lucide-react";

const footerLinks = [
  {
    title: "Resources",
    links: [
      { label: "Career Paths", href: "#careers" },
      { label: "Certifications", href: "#certifications" },
      { label: "Lectern AI", href: "#lectern" },
      { label: "Resources", href: "#resources" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "External",
    links: [
      { label: "Start.me Collection", href: "https://start.me/p/nR1xwN/cybersecurity-resources", external: true },
      { label: "Contact", href: "mailto:hello@remnantsecurity.com" },
      { label: "Privacy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
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
    <footer className="py-12 border-t border-border">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="icon-box">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <span className="font-bold">Remnant Security</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Expert-led cybersecurity training to launch and advance your career.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-border hover:border-primary/50 hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold text-sm mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...('external' in link && link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                      >
                        {link.label}
                        {'external' in link && link.external && <ExternalLink className="h-3 w-3" />}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
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
