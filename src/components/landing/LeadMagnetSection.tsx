import { useState } from "react";
import { Download, CheckCircle2, AlertCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { waitlistApiUrl } from "@/lib/academy";
import { trackEvent } from "@/lib/analytics";

const roadmapPdfPath = "/Cybersecurity-Career-Roadmap-2026.pdf";

export function LeadMagnetSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [deliveryNote, setDeliveryNote] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setDeliveryNote(null);

    try {
      const submitted = new window.FormData(e.currentTarget);
      const response = await fetch(waitlistApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          interests: ["career-roadmap-guide", "career-jumpstart"],
          role: "",
          source: window.location.href,
          company: submitted.get("company"),
        }),
      });

      if (response.ok) {
        setDeliveryNote("You’re on the list. Open the roadmap below anytime.");
        trackEvent("lead_magnet_submitted", { delivery: "waitlist" });
      } else {
        // Guide stays free even when the list service is unavailable.
        setDeliveryNote(
          "The email list is temporarily unavailable, but your free roadmap is ready below.",
        );
        trackEvent("lead_magnet_submitted", { delivery: "pdf-only" });
      }
      setIsSubmitted(true);
    } catch {
      setDeliveryNote(
        "We could not reach the email list right now, but your free roadmap is ready below.",
      );
      trackEvent("lead_magnet_submitted", { delivery: "pdf-only-offline" });
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  const guideFeatures = [
    "Career path comparison chart",
    "Certification roadmap by role",
    "Dated salary-planning context",
    "Safe home-lab and portfolio plan",
    "90-day action plan",
  ];

  if (isSubmitted) {
    return (
      <section id="roadmap" className="relative">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl">
            <div className="cyber-card p-8 text-center">
              <div className="icon-box mx-auto mb-6">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h2 className="mb-4 text-2xl font-bold">Your roadmap is ready</h2>
              <p className="mb-6 text-muted-foreground">
                {deliveryNote ??
                  "Your Cybersecurity Career Roadmap 2026 is ready. We also added you to the Career Jumpstart update list."}
              </p>
              <a
                href={roadmapPdfPath}
                className="inline-flex items-center justify-center rounded-md border border-primary/50 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10"
                onClick={() => trackEvent("lead_magnet_downloaded", { source: "success_state" })}
              >
                <Download className="mr-2 h-4 w-4" />
                Open the 2026 Roadmap
              </a>
              <p className="mt-4 text-sm text-muted-foreground">
                Next:{" "}
                <a href="#plan-builder" className="text-primary hover:underline">
                  build your personalized 90-day plan
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="roadmap" className="relative">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl">
          <div className="cyber-card p-8 md:p-10">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h2 className="font-bold mb-4">
                  Cybersecurity Career Roadmap{" "}
                  2026
                </h2>
                <p className="mb-6 text-muted-foreground">
                  A practical free guide for choosing a lane, building portfolio
                  proof, and planning your next 90 days—without another random tutorial binge.
                </p>

                <ul className="mb-6 space-y-3">
                  {guideFeatures.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <FileText className="mr-3 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-background/50 p-6">
                <h3 className="mb-4 text-center font-semibold">Get Your Free Copy</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <label className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0" aria-hidden="true">
                    Company
                    <input name="company" tabIndex={-1} autoComplete="off" />
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
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
                      "Preparing..."
                    ) : (
                      <>
                        <Download className="mr-2 h-4 w-4" />
                        Download Free Guide
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    Free PDF access. Optional updates only—no spam.
                  </p>
                  <p className="text-center text-xs text-muted-foreground">
                    Prefer no email?{" "}
                    <a
                      href={roadmapPdfPath}
                      className="text-primary hover:underline"
                      onClick={() => trackEvent("lead_magnet_downloaded", { source: "direct_link" })}
                    >
                      Open the PDF directly
                    </a>
                    .
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
