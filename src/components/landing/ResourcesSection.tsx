import { useState } from "react";
import { Wrench, Book, MessageSquare, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { essentialTools } from "@/data/tools";
import { books } from "@/data/books";
import { interviewQuestions } from "@/data/interviewQuestions";

type TabKey = "tools" | "books" | "interview";

const tabs = [
  { key: "tools" as TabKey, label: "Tools", icon: Wrench },
  { key: "books" as TabKey, label: "Books", icon: Book },
  { key: "interview" as TabKey, label: "Interview Prep", icon: MessageSquare },
];

const featuredTools = essentialTools.slice(0, 6);
const featuredBooks = books.slice(0, 4);
const sampleQuestions = [
  "What is the CIA Triad and why is it important?",
  "Explain the difference between IDS and IPS.",
  "How do you approach a security incident investigation?",
  "What tools have you used for log analysis?",
  "Describe your experience with SIEM platforms.",
];

export function ResourcesSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("tools");

  return (
    <section className="py-20 md:py-32 relative" id="resources">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="section-label">[ RESOURCES ]</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Essential <span className="text-primary">Security Resources</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tools, books, and interview prep to accelerate your security career.
            </p>
          </div>

          {/* Tab buttons */}
          <div className="flex justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <Button
                key={tab.key}
                variant={activeTab === tab.key ? "default" : "outline"}
                onClick={() => setActiveTab(tab.key)}
                className="gap-2"
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </Button>
            ))}
          </div>

          {/* Tab content */}
          <div className="cyber-card p-8">
            {activeTab === "tools" && (
              <div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {featuredTools.map((tool) => (
                    <a
                      key={tool.name}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 border border-border hover:border-primary/50 transition-colors group"
                    >
                      <div className="icon-box shrink-0">
                        <Wrench className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium text-sm group-hover:text-primary transition-colors">
                        {tool.name}
                      </span>
                      <ExternalLink className="h-3 w-3 text-muted-foreground ml-auto" />
                    </a>
                  ))}
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  100+ tools organized by role including DFIR, pentesting, SOC, and DevSecOps
                </p>
              </div>
            )}

            {activeTab === "books" && (
              <div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {featuredBooks.map((book) => (
                    <a
                      key={book.isbn}
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 border border-border hover:border-primary/50 transition-colors group"
                    >
                      <div className="aspect-[3/4] relative mb-3 bg-secondary/50 flex items-center justify-center">
                        <img
                          src={book.image}
                          alt={book.title}
                          className="max-h-full max-w-full object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                        <Book className="h-8 w-8 text-muted-foreground absolute" />
                      </div>
                      <span className="text-[10px] font-mono text-primary uppercase">
                        {book.category}
                      </span>
                      <h3 className="font-semibold text-sm mt-1 line-clamp-2 group-hover:text-primary transition-colors">
                        {book.title}
                      </h3>
                    </a>
                  ))}
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  14+ recommended security books across DFIR, pentesting, and more
                </p>
              </div>
            )}

            {activeTab === "interview" && (
              <div>
                <div className="space-y-3 mb-6">
                  {sampleQuestions.map((question, index) => (
                    <div
                      key={index}
                      className="p-4 border border-border flex items-start gap-3"
                    >
                      <span className="text-primary font-mono text-sm">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <p className="text-sm">{question}</p>
                    </div>
                  ))}
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  300+ interview questions across {Object.keys(interviewQuestions.roleSpecific).length} specialty areas
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
