import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const interests = [
  { id: "soc", label: "SOC Analyst Training" },
  { id: "pentest", label: "Penetration Testing" },
  { id: "cloud", label: "Cloud Security" },
  { id: "grc", label: "GRC & Compliance" },
  { id: "dfir", label: "Incident Response" },
  { id: "certprep", label: "Certification Prep" },
];

export function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInterestToggle = (interestId: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interestId)
        ? prev.filter((id) => id !== interestId)
        : [...prev, interestId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission (replace with Formspree or actual endpoint)
    try {
      const response = await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          interests: selectedInterests,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      // Handle error
      console.error("Submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 md:py-32 relative bg-card/50" id="waitlist">
        <div className="container px-4">
          <div className="max-w-xl mx-auto text-center">
            <div className="cyber-card p-8">
              <div className="icon-box mx-auto mb-6">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">You're on the list!</h2>
              <p className="text-muted-foreground">
                Thanks for joining the waitlist. We'll notify you when new courses
                and resources become available.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-32 relative bg-card/50" id="waitlist">
      <div className="container px-4">
        <div className="max-w-xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-8">
            <span className="section-label">[ JOIN WAITLIST ]</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">
              Get <span className="text-primary">Early Access</span>
            </h2>
            <p className="text-muted-foreground mt-2">
              Be the first to know when new courses and resources launch.
            </p>
          </div>

          <div className="cyber-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email input */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Interests */}
              <div>
                <label className="text-sm font-medium mb-3 block">
                  What interests you? (optional)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {interests.map((interest) => (
                    <label
                      key={interest.id}
                      className="flex items-center gap-3 p-3 border border-border hover:border-primary/50 transition-colors cursor-pointer"
                    >
                      <Checkbox
                        checked={selectedInterests.includes(interest.id)}
                        onCheckedChange={() => handleInterestToggle(interest.id)}
                      />
                      <span className="text-sm">{interest.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                className="w-full cyber-button"
                disabled={isLoading || !email}
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
