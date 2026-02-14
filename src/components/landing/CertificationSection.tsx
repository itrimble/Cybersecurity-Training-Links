import { useState } from "react";
import { ExternalLink, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { certifications, certificationLevelLabels } from "@/data/certifications";

type CertLevel = "entry" | "intermediate" | "advanced";

const careerOutcomes = [
  {
    title: "Security Analyst",
    certifications: ["Security+", "CySA+"],
    avgSalary: "$75K",
    growth: "18%"
  },
  {
    title: "Penetration Tester",
    certifications: ["CEH", "OSCP"],
    avgSalary: "$105K",
    growth: "31%"
  },
  {
    title: "Security Architect",
    certifications: ["CISSP", "CCSP"],
    avgSalary: "$145K",
    growth: "25%"
  }
];

export function CertificationSection() {
  const [activeLevel, setActiveLevel] = useState<CertLevel>("entry");

  return (
    <section className="py-20 md:py-32 relative bg-card/50" id="certifications">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="section-label">[ CERTIFICATIONS ]</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Certification <span className="text-primary">Roadmap</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industry-recognized certifications organized by experience level
              to guide your professional development.
            </p>
          </div>

          {/* Level tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {(Object.keys(certificationLevelLabels) as CertLevel[]).map((level) => (
              <Button
                key={level}
                variant={activeLevel === level ? "default" : "outline"}
                onClick={() => setActiveLevel(level)}
              >
                {certificationLevelLabels[level].label}
              </Button>
            ))}
          </div>

          {/* Level description */}
          <p className="text-center text-sm text-muted-foreground mb-8">
            {certificationLevelLabels[activeLevel].description}
          </p>

          {/* Certification grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {certifications[activeLevel].map((cert) => (
              <a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-card p-6 group hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="icon-box shrink-0">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm group-hover:text-primary transition-colors line-clamp-2">
                      {cert.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">{cert.org}</p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {cert.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-1.5 py-0.5 text-[10px] font-mono bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </div>
              </a>
            ))}
          </div>

          {/* Career outcomes - merged from pathways section */}
          <div className="border-t border-border pt-12">
            <h3 className="text-center font-semibold mb-8">
              Career Outcomes by Certification
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {careerOutcomes.map((outcome) => (
                <div key={outcome.title} className="cyber-card p-6 text-center">
                  <h4 className="font-semibold mb-2">{outcome.title}</h4>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-500 font-mono">{outcome.growth} growth</span>
                  </div>
                  <p className="text-2xl font-bold text-primary mb-2">{outcome.avgSalary}</p>
                  <p className="text-xs text-muted-foreground">
                    Key certs: {outcome.certifications.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
