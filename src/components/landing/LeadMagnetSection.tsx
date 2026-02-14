import { useState } from "react";
import { Download, CheckCircle2, AlertCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LeadMagnetSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // ConvertKit API for lead magnet form
      const response = await fetch(
        "https://api.convertkit.com/v3/forms/9088673/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            api_secret: "cFtDuqJz2WuvGXRbM0c7sSHOamEgh2kGuL8CTWu0Aog",
            email: email,
            fields: {
              interests: "career-roadmap-guide",
            },
          }),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error("Failed to submit");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const guideFeatures = [
    "Career path comparison chart",
    "Certification roadmap by role",
    "Salary benchmarks 2025",
    "Skills gap assessment",
    "30-day action plan",
  ];

  if (isSubmitted) {
    return (
      <section className="py-16 md:py-24 relative bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <div className="cyber-card p-8 text-center">
              <div className="icon-box mx-auto mb-6">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Check Your Inbox!</h2>
              <p className="text-muted-foreground mb-6">
                Your Cybersecurity Career Roadmap 2025 is on its way. Check your
                email (and spam folder) for the download link.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Our Courses
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 relative bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <div className="cyber-card p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - Content */}
              <div>
                <span className="section-label mb-4 inline-block">
                  [ FREE GUIDE ]
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Cybersecurity Career Roadmap{" "}
                  <span className="text-primary">2025</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  Navigate your path into cybersecurity with our comprehensive
                  guide. Learn which certifications matter, what skills to
                  develop, and how to stand out.
                </p>

                <ul className="space-y-3 mb-6">
                  {guideFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <FileText className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right side - Form */}
              <div className="bg-background/50 border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-4 text-center">
                  Get Your Free Copy
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  {error && (
                    <div className="flex items-center gap-2 text-sm text-red-400">
                      <AlertCircle className="h-4 w-4" />
                      <span>{error}</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full cyber-button"
                    disabled={isLoading || !email}
                  >
                    {isLoading ? (
                      "Sending..."
                    ) : (
                      <>
                        <Download className="mr-2 h-4 w-4" />
                        Download Free Guide
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Free instant access. No credit card required.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
