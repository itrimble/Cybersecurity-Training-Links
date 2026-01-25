import { Shield, ChevronRight, Award, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 cyber-grid opacity-50" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="icon-box">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <span className="text-2xl font-bold tracking-tight">Remnant Security</span>
          </div>

          {/* Section label */}
          <span className="section-label">[ CAREER TRAINING ]</span>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Launch Your{" "}
            <span className="text-primary text-glow">Cybersecurity</span>
            {" "}Career Today
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Expert-led training, hands-on labs, and personalized career guidance
            to help you break into the cybersecurity industry.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="cyber-button group">
              Explore Career Paths
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Take Career Quiz
            </Button>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="cyber-card p-6 text-center">
              <div className="icon-box mx-auto mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">10+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>

            <div className="cyber-card p-6 text-center">
              <div className="icon-box mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Students Helped</div>
            </div>

            <div className="cyber-card p-6 text-center">
              <div className="icon-box mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
