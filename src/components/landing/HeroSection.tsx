import { Shield, ChevronRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      {/* Animated grid background */}
      <div className="absolute inset-0 cyber-grid opacity-50" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Logo */}
          <div className="mb-8 flex items-center justify-center gap-3">
            <div className="icon-box">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <span className="text-2xl font-bold tracking-tight">Remnant Security</span>
          </div>

          {/* Section label */}
          <span className="section-label">[ PORTFOLIO-FIRST CYBER TRAINING ]</span>

          {/* Main heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Build Proof for Your{" "}
            <span className="text-primary text-glow">Cybersecurity</span>
            {" "}Career
          </h1>

          {/* Subheading */}
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Choose a lane, build safe defender and hunter tools, and turn the work
            into evidence you can explain—without vague promises or random tutorials.
          </p>

          {/* CTA buttons - single clear action */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#plan-builder"
              className={cn(buttonVariants({ size: "lg" }), "cyber-button group")}
            >
              Build My 90-Day Plan
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#free-guide"
              className={buttonVariants({ size: "lg", variant: "outline" })}
            >
              Get the Free Roadmap
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
