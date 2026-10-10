import { Mail, MessageCircle, HelpCircle, BookOpen } from "lucide-react";

const faqs = [
  {
    q: "How do I get an API key?",
    a: "Sign up for a free account at any supported provider (MiniMax, Google Gemini, etc.). Most offer generous free tiers. Copy your API key from the provider's dashboard and paste it into Lectern AI's Configuration screen.",
  },
  {
    q: "What file formats are supported?",
    a: "Lectern AI 1.2 imports PowerPoint, PDF, Word, Excel, OpenDocument, RTF, EPUB, and CSV files. Drag and drop a file into the app.",
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
    <section className=" relative" id="support">
      <div className="container px-4">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-bold mt-2">
            We're Here to Help
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
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
                href="mailto:iantrimble@remnantsecurity.com?subject=Lectern%20AI%20support"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5 text-primary" />
                iantrimble@remnantsecurity.com
              </a>
              <a
                href="mailto:iantrimble@remnantsecurity.com?subject=Lectern%20AI%20bug%20report"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="h-5 w-5 text-primary" />
                Report a bug by email
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
                  <p className="mt-2 text-sm text-muted-foreground">
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
