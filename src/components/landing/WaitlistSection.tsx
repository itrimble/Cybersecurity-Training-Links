import { useEffect, useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { courseInterests, roleOptions } from "@/data/courses";
import { waitlistApiUrl } from "@/lib/academy";

interface WaitlistFormData {
  email: string;
  interests: string[];
  role: string;
}

export function WaitlistSection() {
  const [formData, setFormData] = useState<WaitlistFormData>({
    email: "",
    interests: [],
    role: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const aliases: Record<string, string> = {
      "remnant-security-bootcamp": "portfolio-labs",
      "career-jumpstart": "career-jumpstart",
      "ai-security-practitioner": "ai-security",
    };

    const handleRecommendation = (event: Event) => {
      const interest = (event as CustomEvent<{ interest?: string }>).detail?.interest;
      if (!interest) return;
      const resolved = aliases[interest] ?? interest;
      if (!courseInterests.some((item) => item.id === resolved)) return;
      setFormData((current) => ({
        ...current,
        interests: current.interests.includes(resolved)
          ? current.interests
          : [...current.interests, resolved],
      }));
    };

    window.addEventListener("remnant:waitlist", handleRecommendation);
    return () => window.removeEventListener("remnant:waitlist", handleRecommendation);
  }, []);

  const handleInterestChange = (interestId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, interestId]
        : prev.interests.filter((id) => id !== interestId),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const submitted = new window.FormData(e.currentTarget);
      const response = await fetch(waitlistApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          interests: formData.interests,
          role: formData.role,
          source: window.location.href,
          company: submitted.get("company"),
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const data = await response.json().catch(() => ({})) as { error?: string };
        throw new Error(data.error ?? "Failed to submit form");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError(
        "Something went wrong. Please try again or email us directly."
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className=" relative bg-card/50" id="waitlist">
        <div className="container px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="cyber-card p-8">
              <div className="icon-box mx-auto mb-6">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">You're on the list!</h2>
              <p className="text-muted-foreground">
                We'll notify you when courses matching your interests are
                available.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className=" relative bg-card/50" id="waitlist">
      <div className="container px-4">
        <div className="max-w-lg mx-auto">
          {/* Section header */}
          <div className="text-center mb-8">
            <h2 className="font-bold mt-2">
              Get Early Access
            </h2>
            <p className="text-muted-foreground mt-2">
              Be the first to know when courses launch. Tell us what interests
              you.
            </p>
          </div>

          <div className="cyber-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <label className="absolute w-px h-px overflow-hidden opacity-0 pointer-events-none" aria-hidden="true">
                Company
                <input name="company" tabIndex={-1} autoComplete="off" />
              </label>
              {/* Email input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  required
                />
              </div>

              {/* Interest checkboxes */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  What interests you? (optional)
                </label>
                <div className="space-y-3">
                  {courseInterests.map((interest) => (
                    <label
                      key={interest.id}
                      className="flex items-start space-x-3 cursor-pointer group"
                    >
                      <Checkbox
                        id={interest.id}
                        checked={formData.interests.includes(interest.id)}
                        onCheckedChange={(checked) =>
                          handleInterestChange(interest.id, checked === true)
                        }
                        className="mt-0.5"
                      />
                      <div className="flex-1">
                        <span className="text-sm font-medium group-hover:text-primary transition-colors">
                          {interest.label}
                        </span>
                        <p className="text-xs text-muted-foreground">
                          {interest.description}
                        </p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Role dropdown */}
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium mb-2"
                >
                  What best describes you? (optional)
                </label>
                <select
                  id="role"
                  value={formData.role}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, role: e.target.value }))
                  }
                  className="w-full h-10 px-3 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select your role...</option>
                  {roleOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Error message */}
              {error && (
                <div className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 p-3 rounded-md">
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Submit button */}
              <Button
                type="submit"
                className="w-full cyber-button"
                disabled={isLoading || !formData.email}
              >
                {isLoading ? (
                  "Joining..."
                ) : (
                  <>
                    Join Waitlist
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                No spam, ever. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
