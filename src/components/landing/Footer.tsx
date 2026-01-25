import { Shield, Github, Linkedin, Twitter } from "lucide-react";

const footerLinks = [
  {
    title: "Resources",
    links: [
      { label: "Career Paths", href: "#careers" },
      { label: "Certifications", href: "#certifications" },
      { label: "Interview Prep", href: "#interview" },
      { label: "Tools", href: "#tools" },
    ],
  },
  {
    title: "Training",
    links: [
      { label: "Free Resources", href: "#training" },
      { label: "Hands-on Labs", href: "#labs" },
      { label: "Books", href: "#books" },
      { label: "Career Quiz", href: "#quiz" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
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
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
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
