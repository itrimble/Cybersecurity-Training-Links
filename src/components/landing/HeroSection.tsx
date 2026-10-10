import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { certifications } from "@/data/certifications";

const ladder = [
  { level: "Entry", certs: certifications.entry.slice(0, 3) },
  { level: "Intermediate", certs: certifications.intermediate.slice(0, 3) },
  { level: "Advanced", certs: certifications.advanced.slice(0, 3) },
];

export function HeroSection() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="container grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div className="hero-settle">
          <h1 id="hero-title" className="max-w-[14ch] text-[clamp(2.75rem,1.6rem+4.6vw,5.25rem)] font-bold leading-[1.02] tracking-[-0.03em]">
            Find your way into cybersecurity.
          </h1>
          <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-muted-foreground md:text-xl">
            Cybersecurity career roadmaps, apps, and books by Ian Trimble, Insider Threat Manager at
            Google. Start with the free roadmap for the role you want.
          </p>
          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
            <a href="#roadmap" className={cn(buttonVariants({ size: "lg" }), "group")}>
              Get the free roadmap
              <ArrowRight aria-hidden className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a href="#careers" className="font-medium text-primary underline">Explore career paths</a>
          </div>
        </div>

        <figure aria-label="Certification ladder, entry to advanced" className="rounded-[16px] border border-border bg-card p-6 md:p-8">
          <figcaption className="mb-6 flex items-baseline justify-between gap-4">
            <span className="font-display text-lg font-semibold">The certification ladder</span>
            <a href="#certifications" className="text-sm text-primary underline">Full roadmap</a>
          </figcaption>
          <ol className="relative space-y-6">
            {ladder.map((rung, i) => (
              <li key={rung.level} className="grid grid-cols-[1.75rem_1fr] gap-4">
                <span className="tabular flex h-7 w-7 items-center justify-center rounded-full border border-primary/60 text-sm font-semibold text-primary">{i + 1}</span>
                <div>
                  <p className="font-semibold">{rung.level}</p>
                  <p className="mt-1 text-[0.9375rem] text-muted-foreground">{rung.certs.map((c) => c.name.replace(/\s*\(.*\)$/, "")).join(" · ")}</p>
                </div>
              </li>
            ))}
          </ol>
        </figure>
      </div>
    </section>
  );
}
