import { useState } from "react";
import { ExternalLink, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { careers, careerCategories, type Career } from "@/data/careers";

export function TrainingSection() {
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filteredCareers = filter === "all"
    ? careers
    : careers.filter((c) => c.category === filter);

  return (
    <section className="py-20 md:py-32 relative bg-card/50">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="section-label">[ CAREER PATHS ]</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore <span className="text-primary">12+ Career Paths</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find your ideal role in cybersecurity with detailed career guides,
              required skills, and recommended certifications.
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("all")}
            >
              All Paths
            </Button>
            {Object.entries(careerCategories).map(([key, { label }]) => (
              <Button
                key={key}
                variant={filter === key ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(key)}
              >
                {label}
              </Button>
            ))}
          </div>

          {/* Career grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCareers.map((career) => (
              <button
                key={career.id}
                onClick={() => setSelectedCareer(career)}
                className="cyber-card p-6 text-left hover:border-primary/50 transition-colors group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{career.icon}</span>
                  <span className={`text-xs font-mono ${careerCategories[career.category].color}`}>
                    {career.level}
                  </span>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {career.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {career.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-primary font-mono">{career.salaryRange}</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </button>
            ))}
          </div>

          {/* Career detail modal */}
          <Dialog open={!!selectedCareer} onOpenChange={() => setSelectedCareer(null)}>
            <DialogContent className="max-h-[90vh] overflow-y-auto">
              {selectedCareer && (
                <>
                  <DialogHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-4xl">{selectedCareer.icon}</span>
                      <div>
                        <DialogTitle className="text-xl">{selectedCareer.title}</DialogTitle>
                        <DialogDescription className="text-primary font-mono">
                          {selectedCareer.salaryRange}
                        </DialogDescription>
                      </div>
                    </div>
                  </DialogHeader>

                  <div className="space-y-6">
                    <p className="text-muted-foreground">{selectedCareer.description}</p>

                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Required Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCareer.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-xs bg-secondary text-secondary-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Certifications */}
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Recommended Certifications</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCareer.certifications.map((cert) => (
                          <span
                            key={cert}
                            className="px-2 py-1 text-xs bg-primary/10 text-primary border border-primary/20"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Daily Tasks */}
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Daily Tasks</h4>
                      <ul className="space-y-1">
                        {selectedCareer.dailyTasks.map((task) => (
                          <li key={task} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary">•</span>
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Career Progression */}
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Career Progression</h4>
                      <div className="flex flex-wrap items-center gap-2">
                        {selectedCareer.careerProgression.map((stage, index) => (
                          <span key={stage} className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">{stage}</span>
                            {index < selectedCareer.careerProgression.length - 1 && (
                              <ChevronRight className="h-3 w-3 text-primary" />
                            )}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Resources */}
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Learning Resources</h4>
                      <div className="space-y-2">
                        {selectedCareer.resources.map((resource) => (
                          <a
                            key={resource.name}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-primary hover:underline"
                          >
                            <ExternalLink className="h-3 w-3" />
                            {resource.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
