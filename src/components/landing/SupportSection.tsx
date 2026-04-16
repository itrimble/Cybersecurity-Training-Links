import { Mail, MessageCircle, HelpCircle, BookOpen } from "lucide-react";

const faqs = [
  {
    q: "How do I get an API key?",
    a: "Sign up for a free account at any supported provider (MiniMax, Google Gemini, etc.). Most offer generous free tiers. Copy your API key from the provider's dashboard and paste it into Lectern AI's Configuration screen.",
  },
  {
    q: "What file formats are supported?",
    a: "Lectern AI supports .pptx (PowerPoint 2007+) and .pdf presentations. Simply drag and drop your file into the app.",
  },
  {
    q: "How do subscriptions work?",
    a: "The free tier includes 3 full presentation generations. Pro unlocks unlimited generations, Turbo/Multi-Provider speed modes, Pass 2 refinement, live research, presenter view, and teaching materials. Subscriptions are managed through your Apple ID.",
  },
  {
    q: "Where is my data stored?",
    a: "All data stays on your Mac. Slide content is sent directly to the AI provider you choose — nowhere else. API keys are stored in your local macOS Keychain. We have zero servers and collect zero data.",
  },
];

export function SupportSection() {
  return (
    <section className="py-20 md:py-32 relative" id="support">
      <div className="container px-4">
        <div className="text-center mb-12">
          <span className="section-label">[ SUPPORT ]</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            We're Here to <span className="text-primary">Help</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a question about Lectern AI? Check the FAQ below or reach out
            directly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Contact */}
          <div className="cyber-card p-8">
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <a
                href="mailto:support@remnantsecurity.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5 text-primary" />
                support@remnantsecurity.com
              </a>
              <a
                href="https://github.com/itrimble/slideprocessor/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="h-5 w-5 text-primary" />
                Report an issue on GitHub
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <BookOpen className="h-5 w-5 text-primary" />
                <span>
                  Publisher: Remnant Security Group LLC
                </span>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="cyber-card p-8">
            <h3 className="text-xl font-bold mb-6">
              <HelpCircle className="inline h-5 w-5 mr-2 text-primary" />
              FAQ
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group">
                  <summary className="cursor-pointer font-medium text-sm hover:text-primary transition-colors">
                    {faq.q}
                  </summary>
                  <p className="mt-2 text-sm text-muted-foreground pl-4 border-l-2 border-primary/30">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
