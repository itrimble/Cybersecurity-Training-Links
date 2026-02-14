import { Target, Users, Lightbulb, FlaskConical } from "lucide-react";

const valueProps = [
  {
    icon: Target,
    title: "Hands-On Labs",
    description: "Practice with real tools and scenarios"
  },
  {
    icon: Users,
    title: "Career Guidance",
    description: "Personalized mentorship and job prep"
  },
  {
    icon: Lightbulb,
    title: "Current Threats",
    description: "Learn the latest attack techniques"
  },
  {
    icon: FlaskConical,
    title: "Cert Prep",
    description: "Structured paths to industry certs"
  }
];

export function ValuePropsSection() {
  return (
    <section className="py-12 border-y border-border bg-card/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {valueProps.map((prop) => (
              <div key={prop.title} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 border border-accent/30 bg-accent/10 flex items-center justify-center mb-3">
                  <prop.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{prop.title}</h3>
                <p className="text-xs text-muted-foreground">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
