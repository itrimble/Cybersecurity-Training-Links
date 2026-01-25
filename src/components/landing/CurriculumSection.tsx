import { Monitor, Target, Cloud, FileText, AlertTriangle, Code } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { curriculumTopics } from "@/data/membership";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Target,
  Cloud,
  FileText,
  AlertTriangle,
  Code,
};

export function CurriculumSection() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="section-label">[ CURRICULUM ]</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What You'll <span className="text-primary">Learn</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive training covering all major cybersecurity domains,
              from security operations to penetration testing.
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {curriculumTopics.map((topic, index) => {
              const IconComponent = iconMap[topic.icon] || Monitor;

              return (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="cyber-card border-none"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="icon-box">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold">{topic.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {topic.description}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="pl-14">
                      <ul className="space-y-2">
                        {topic.topics.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
