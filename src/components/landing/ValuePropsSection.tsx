import { CalendarDays, FolderKanban, Route, ShieldCheck } from "lucide-react";

const valueProps = [
  {
    icon: Route,
    title: "Choose a Lane",
    description: "Pick a realistic role path instead of random tutorials",
  },
  {
    icon: CalendarDays,
    title: "90-Day Plan",
    description: "Week-by-week actions with proof you can show",
  },
  {
    icon: FolderKanban,
    title: "Portfolio Evidence",
    description: "Build tools and writeups hiring managers understand",
  },
  {
    icon: ShieldCheck,
    title: "Safe Practice",
    description: "Authorized labs and defender-first home setups",
  },
];

export function ValuePropsSection() {
  return (
    <section className="border-y border-border bg-card/30 py-12">
      <div className="container px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
            {valueProps.map((prop) => (
              <div key={prop.title} className="flex flex-col items-center text-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center border border-accent/30 bg-accent/10">
                  <prop.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-1 text-sm font-semibold">{prop.title}</h3>
                <p className="text-xs text-muted-foreground">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
