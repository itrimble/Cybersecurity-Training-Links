import { ExternalLink } from "lucide-react";

// A short, curated set of free, current starting points. Each link verified in the PR link crawl.
const resources = [
  { name: "Kali Linux", note: "Penetration-testing distribution", href: "https://www.kali.org/" },
  { name: "Wireshark", note: "Network protocol analyzer", href: "https://www.wireshark.org/" },
  { name: "Nmap", note: "Network discovery and scanning", href: "https://nmap.org/" },
  { name: "Burp Suite Community", note: "Web application testing", href: "https://portswigger.net/burp/communitydownload" },
  { name: "OWASP ZAP", note: "Open-source web app scanner", href: "https://www.zaproxy.org/" },
  { name: "Ghidra", note: "NSA's reverse-engineering suite", href: "https://ghidra-sre.org/" },
  { name: "Autopsy", note: "Digital forensics platform", href: "https://www.autopsy.com/" },
  { name: "Metasploit Framework", note: "Exploitation framework", href: "https://www.metasploit.com/" },
];

export function ResourcesSection() {
  return (
    <section id="resources" aria-labelledby="resources-title">
      <div className="container">
        <div className="mb-10 max-w-2xl">
          <h2 id="resources-title" className="font-bold">Start with these tools</h2>
          <p className="mt-4 text-lg text-muted-foreground">Eight free tools worth learning first, whichever path you choose.</p>
        </div>
        <ul className="grid gap-x-10 border-t border-border sm:grid-cols-2">
          {resources.map((r) => (
            <li key={r.href} className="border-b border-border">
              <a href={r.href} target="_blank" rel="noopener noreferrer" className="group flex items-baseline gap-3 py-4">
                <span className="font-semibold transition-colors group-hover:text-primary">{r.name}</span>
                <span className="text-sm text-muted-foreground">{r.note}</span>
                <ExternalLink aria-hidden className="ml-auto h-3.5 w-3.5 self-center text-muted-foreground" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
