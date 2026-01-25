import { useState } from "react";
import { Wrench, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toolsByRole, essentialTools } from "@/data/tools";

type RoleKey = keyof typeof toolsByRole;

export function ToolsSection() {
  const [activeRole, setActiveRole] = useState<RoleKey>("socAnalyst");

  const roleData = toolsByRole[activeRole];

  return (
    <section className="py-20 md:py-32 relative bg-card/50">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="section-label">[ TOOLS ]</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Security Tools <span className="text-primary">by Role</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Essential tools organized by security role to help you build
              your toolkit and practice with industry-standard software.
            </p>
          </div>

          {/* Role tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.entries(toolsByRole).map(([key, value]) => (
              <Button
                key={key}
                variant={activeRole === key ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveRole(key as RoleKey)}
              >
                {value.title.replace(" Tools", "")}
              </Button>
            ))}
          </div>

          {/* Tool categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {roleData.categories.map((category) => (
              <div key={category.name} className="cyber-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-box">
                    <Wrench className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 text-xs bg-secondary text-secondary-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Essential tools */}
          <div>
            <h3 className="text-center font-semibold mb-6">
              Essential Free Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {essentialTools.map((tool) => (
                <a
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 cyber-card hover:border-primary/50 transition-colors group"
                >
                  <span className="text-sm">{tool.name}</span>
                  <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
