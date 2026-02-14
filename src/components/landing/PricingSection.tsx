import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { pricingTiers } from "@/data/membership";

export default function PricingSection() {
  const handleCtaClick = (link: string) => {
    if (link.startsWith("#")) {
      document.getElementById(link.slice(1))?.scrollIntoView({ behavior: "smooth" });
    } else if (link.startsWith("mailto:")) {
      window.open(link, "_self");
    }
  };

  return (
    <section id="pricing" className="py-20 md:py-32 container px-4 mx-auto">
      <div className="text-center mb-16">
        <span className="section-label">[ PRICING ]</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
          Invest in Your <span className="text-primary">Career</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Practical training at prices that make sense. No subscriptions, no hidden fees.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {pricingTiers.map((tier) => (
          <div
            key={tier.id}
            className={`rounded-2xl p-8 flex flex-col ${
              tier.highlight
                ? "border-2 border-primary relative bg-card/50 shadow-lg shadow-primary/10"
                : "border border-border bg-card"
            }`}
          >
            {tier.highlight && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Best Value
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold">{tier.price}</span>
                {tier.priceNote && (
                  <span className="text-sm text-primary font-medium">
                    {tier.priceNote}
                  </span>
                )}
              </div>
              <p className="text-muted-foreground text-sm">{tier.description}</p>
            </div>

            <ul className="mb-8 space-y-3 flex-grow">
              {tier.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant={tier.highlight ? "default" : "outline"}
              className={`w-full group ${tier.highlight ? "cyber-button" : ""}`}
              onClick={() => handleCtaClick(tier.ctaLink)}
            >
              {tier.cta}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center max-w-2xl mx-auto">
        <p className="text-muted-foreground mb-6">
          All courses include lifetime access and future updates. Not sure which
          option is right for you?
        </p>
        <Button
          variant="link"
          className="text-primary"
          onClick={() => {
            document.getElementById("survey")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Take our quick quiz to get a personalized recommendation
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
