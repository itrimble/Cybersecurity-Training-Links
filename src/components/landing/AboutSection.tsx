import { Shield, Target, Users, Lightbulb } from "lucide-react";

const differentiators = [
  {
    icon: Target,
    title: "Practical Training",
    description: "Hands-on labs and real-world scenarios, not just theory"
  },
  {
    icon: Users,
    title: "Career Guidance",
    description: "Personalized mentorship and job placement assistance"
  },
  {
    icon: Lightbulb,
    title: "Industry Insights",
    description: "Current threat landscape and emerging technologies"
  }
];

export function AboutSection() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="section-label">[ ABOUT ]</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Guide to <span className="text-primary">Cybersecurity</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Led by industry professionals with real-world experience in security operations,
              penetration testing, and incident response.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Founder spotlight */}
            <div className="cyber-card p-8">
              <div className="flex items-start gap-6">
                <div className="icon-box shrink-0">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Ian Trimble</h3>
                  <p className="text-primary text-sm font-mono mb-4">Founder & Lead Instructor</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    With over a decade of experience in cybersecurity, I've worked across
                    security operations, incident response, and penetration testing.
                    My mission is to help aspiring security professionals break into
                    the industry with practical skills and real-world knowledge.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['CISSP', 'OSCP', 'GCIH', 'Security+'].map((cert) => (
                      <span
                        key={cert}
                        className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/20"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Differentiators */}
            <div className="space-y-6">
              {differentiators.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="icon-box shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
