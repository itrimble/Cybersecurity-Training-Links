import { Award, Users, BookOpen, TrendingUp } from "lucide-react";

const stats = [
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Students Helped" },
  { icon: BookOpen, value: "12", label: "Career Paths" },
  { icon: TrendingUp, value: "95%", label: "Success Rate" },
];

const testimonials = [
  {
    quote: "The structured career guidance helped me land my first SOC analyst role within 3 months of completing the training.",
    author: "Alex M.",
    role: "SOC Analyst at Fortune 500"
  },
  {
    quote: "Finally, a resource that covers the real skills needed in cybersecurity, not just theory. The hands-on labs were invaluable.",
    author: "Jordan K.",
    role: "Penetration Tester"
  }
];

export function SocialProofSection() {
  return (
    <section className="py-16 relative">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="icon-box mx-auto mb-3">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card p-6">
                <p className="text-sm text-muted-foreground mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-sm">{testimonial.author}</p>
                  <p className="text-xs text-primary font-mono">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
