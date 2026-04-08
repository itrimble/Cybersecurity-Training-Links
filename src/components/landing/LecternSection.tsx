import {
  Mic,
  FlaskConical,
  HelpCircle,
  BookOpen,
  Sparkles,
  Image as ImageIcon,
  Apple,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const features = [
  {
    icon: Mic,
    title: "Talk Tracks",
    description: "Natural, conversational speaker notes generated from every slide.",
  },
  {
    icon: FlaskConical,
    title: "Lab Activities",
    description: "Hands-on exercises tailored to your subject and audience.",
  },
  {
    icon: HelpCircle,
    title: "Practice Quizzes",
    description: "Auto-generated checks for understanding with answer keys.",
  },
  {
    icon: BookOpen,
    title: "Student Handouts",
    description: "Branded PDF takeaways students can study from later.",
  },
  {
    icon: Sparkles,
    title: "AI Diagrams",
    description: "Custom illustrations that make abstract concepts click.",
  },
  {
    icon: ImageIcon,
    title: "Slide Images",
    description: "High-fidelity visual thumbnails for every slide in your deck.",
  },
];

const subjects = [
  "Security+",
  "CISSP",
  "Higher Education",
  "Corporate Training",
  "K-12",
  "Conference Talks",
  "Generic",
];

export function LecternSection() {
  return (
    <section
      className="py-20 md:py-32 relative border-y border-border bg-card/20"
      id="lectern"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="container px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="section-label">[ OUR APP ]</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 tracking-tight">
              Meet <span className="text-primary text-glow">Lectern AI</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
              Turn any PowerPoint or PDF into professional instructor talk
              tracks in minutes — powered by AI.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground border border-primary/30 bg-primary/5 px-3 py-1.5">
              <Apple className="h-3.5 w-3.5 text-primary" />
              <span>Native macOS app · Built for educators by an educator</span>
            </div>
          </div>

          {/* Two-column hero */}
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
            {/* Left: Pitch */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Hours of prep work,{" "}
                <span className="text-primary">done in minutes</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Whether you're a professor preparing a lecture, a corporate
                trainer running a workshop, or a conference speaker polishing
                your delivery — Lectern reads your slides and generates
                speaking notes that sound like an experienced teacher wrote
                them.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Turbo &amp; Multi-Provider modes</span>
                    <span className="text-muted-foreground"> — process 4 slides in parallel for 4× speed</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Your data stays on your Mac</span>
                    <span className="text-muted-foreground"> — fully sandboxed, zero servers, BYO API key</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">7 subject templates, 14 personas</span>
                    <span className="text-muted-foreground"> — from Complete Beginners to Executives</span>
                  </div>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#lectern-waitlist"
                  className={cn(buttonVariants({ size: "lg" }), "cyber-button group")}
                >
                  Get Notified at Launch
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://github.com/itrimble/slideprocessor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ size: "lg", variant: "outline" })}
                >
                  View on GitHub
                </a>
              </div>
            </div>

            {/* Right: Feature grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="cyber-card p-5 flex flex-col items-start"
                >
                  <div className="w-10 h-10 border border-primary/30 bg-primary/10 flex items-center justify-center mb-3">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground leading-snug">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* How it works */}
          <div className="mb-16">
            <h3 className="text-center text-2xl font-bold mb-8">
              How It Works
            </h3>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                "Drop your .pptx or .pdf",
                "Pick subject &amp; audience",
                "Choose which slides",
                "AI generates talk tracks",
                "Export PDF or PPTX notes",
              ].map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-10 h-10 mx-auto mb-3 border border-primary/40 bg-primary/10 text-primary font-bold flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <p
                    className="text-sm text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: step }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Subjects */}
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Built-in subject templates
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {subjects.map((subject) => (
                <span
                  key={subject}
                  className="text-xs px-3 py-1.5 border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>

          {/* Pricing strip */}
          <div className="cyber-card p-8 max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-xl font-bold mb-1">Free to start</h3>
                <p className="text-sm text-muted-foreground">
                  3 free presentations, no subscription required. Pro unlocks
                  unlimited generations, Turbo modes, batch processing, and all
                  output types.
                </p>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Free</span>
                  <span className="font-semibold">$0 · 3 decks</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Pro Monthly</span>
                  <span className="font-semibold text-primary">$4.99/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Pro Annual</span>
                  <span className="font-semibold text-primary">$29.99/yr</span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-xs text-muted-foreground mb-3">
                Coming soon to the Mac App Store
              </p>
              <Button
                size="lg"
                className="cyber-button"
                onClick={() => {
                  document
                    .getElementById("waitlist")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Join the Launch List
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
