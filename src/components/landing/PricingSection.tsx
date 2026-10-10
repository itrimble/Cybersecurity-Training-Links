import { Check, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { pricingTiers } from "@/data/membership";

export default function PricingSection() {
  return (
    <section id="pricing" aria-labelledby="pricing-title">
      <div className="container">
        <div className="mb-14 max-w-2xl">
          <h2 id="pricing-title" className="font-bold">Pricing</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Courses are in development and not for sale yet. Join the waitlist to hear when each one
            opens. Team training is available by email.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <article
              key={tier.id}
              aria-labelledby={`tier-${tier.id}`}
              className={cn(
                "flex flex-col rounded-[14px] border p-7",
                tier.highlight ? "border-primary bg-card" : "border-border",
              )}
            >
              <h3 id={`tier-${tier.id}`} className="text-xl font-semibold">{tier.name}</h3>
              <p className="mt-4 font-display text-xl font-semibold text-primary">
                {tier.price}
              </p>
              <p className="mt-2 text-muted-foreground">{tier.description}</p>
              <ul className="mb-8 mt-6 flex-grow space-y-2.5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[0.9375rem]">
                    <Check aria-hidden className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={tier.ctaLink}
                className={cn(buttonVariants({ variant: tier.highlight ? "default" : "outline" }), "group w-full")}
              >
                {tier.cta}
                <ArrowRight aria-hidden className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </article>
          ))}
        </div>

        <p className="mt-12 text-muted-foreground">
          Not sure where to start?{" "}
          <a href="#survey" className="font-medium text-primary underline">Take the two-minute path quiz</a>
          {" "}for a recommendation.
        </p>
      </div>
    </section>
  );
}
