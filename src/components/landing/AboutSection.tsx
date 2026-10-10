import { contactEmail, contactHref } from "@/data/sites";

// Every statement here is sourced; see /workspace/apex-v2/bio-sources.md in the PR notes.
const points = [
  "Insider Threat Manager at Google",
  "GIAC GSEC; CompTIA Security+, Network+ and Cloud+",
  "Past President, ISACA Baton Rouge Chapter",
  "Volunteer, NIST NCCoE Zero Trust Architecture Community of Interest",
];
const links = [
  { label: "Sessionize speaker profile", href: "https://sessionize.com/ian-trimble/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/itrimble/" },
  { label: "Books on Amazon", href: "https://www.amazon.com/stores/author/B0BRL7WV64" },
  { label: contactEmail, href: contactHref },
];

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title">
      <div className="container grid items-start gap-12 md:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16">
        <picture>
          <source type="image/webp" srcSet="/images/ian-trimble-480.webp 480w, /images/ian-trimble-960.webp 960w" sizes="(min-width: 768px) 20rem, 80vw" />
          <img
            src="/images/ian-trimble-480.jpg"
            srcSet="/images/ian-trimble-480.jpg 480w, /images/ian-trimble-960.jpg 960w"
            sizes="(min-width: 768px) 20rem, 80vw"
            width={480}
            height={480}
            loading="lazy"
            alt="Ian Trimble"
            className="aspect-square w-full max-w-[20rem] rounded-[16px] border border-border object-cover"
          />
        </picture>
        <div>
          <h2 id="about-title" className="font-bold">About Ian Trimble</h2>
          <p className="mt-6 text-lg leading-relaxed">
            Ian Trimble is an Insider Threat Manager at Google, based in Baton Rouge, Louisiana. He is a
            cybersecurity leader whose work spans incident response, business continuity, and risk
            management. His conference sessions cover insider threats, AI for security operations teams,
            and taking an app from idea to the App Store with AI coding assistants. Through Remnant
            Security he ships Mac and iOS apps and writes suspense fiction about technology, starting
            with Code Red and the Max Mercer series.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="border-l-2 !border-l-primary pl-4 text-[0.9375rem]">{p}</li>
            ))}
          </ul>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})} className="font-medium text-primary underline">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
