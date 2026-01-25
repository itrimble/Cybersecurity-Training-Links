import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { interviewQuestions, interviewCategories, roleSpecificCategories } from "@/data/interviewQuestions";

type CategoryKey = keyof typeof interviewQuestions;

export function InterviewSection() {
  const [activeCategory, setActiveCategory] = useState<string>("recruiter");
  const [activeRole, setActiveRole] = useState<string>("socAnalyst");

  const isRoleSpecific = activeCategory === "roleSpecific";

  const getQuestions = () => {
    if (isRoleSpecific) {
      return interviewQuestions.roleSpecific[activeRole as keyof typeof interviewQuestions.roleSpecific] || [];
    }
    const questions = interviewQuestions[activeCategory as CategoryKey];
    if (!questions) return [];
    if (activeCategory === "behavioral") {
      return (questions as typeof interviewQuestions.behavioral).map((q) => q.question);
    }
    return questions as string[];
  };

  const questions = getQuestions();

  return (
    <section className="py-20 md:py-32 relative">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="section-label">[ INTERVIEW PREP ]</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              300+ <span className="text-primary">Interview Questions</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Prepare for your cybersecurity interviews with our comprehensive
              question database organized by category and role.
            </p>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {interviewCategories.map((cat) => (
              <Button
                key={cat.key}
                variant={activeCategory === cat.key ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </Button>
            ))}
            <Button
              variant={activeCategory === "roleSpecific" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory("roleSpecific")}
            >
              Role-Specific
            </Button>
          </div>

          {/* Role-specific sub-tabs */}
          {isRoleSpecific && (
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {roleSpecificCategories.map((role) => (
                <Button
                  key={role.key}
                  variant={activeRole === role.key ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setActiveRole(role.key)}
                >
                  {role.label}
                </Button>
              ))}
            </div>
          )}

          {/* Questions accordion */}
          <div className="cyber-card p-6">
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
              <MessageSquare className="h-5 w-5 text-primary" />
              <span className="font-semibold">
                {questions.length} Questions
              </span>
            </div>

            <Accordion type="multiple" className="space-y-2">
              {questions.slice(0, 10).map((question, index) => (
                <AccordionItem
                  key={index}
                  value={`question-${index}`}
                  className="border border-border"
                >
                  <AccordionTrigger className="px-4 py-3 text-sm text-left hover:no-underline hover:bg-secondary/50">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-3">
                    <p className="text-sm text-muted-foreground">
                      {activeCategory === "behavioral" && interviewQuestions.behavioral[index] ? (
                        <>
                          <span className="text-primary font-mono text-xs block mb-2">
                            Format: {interviewQuestions.behavioral[index].format}
                          </span>
                          <span className="block">
                            Tip: {interviewQuestions.behavioral[index].tips}
                          </span>
                        </>
                      ) : (
                        "Prepare your answer using the P.A.R. method (Problem, Action, Resolution) to structure your response effectively."
                      )}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {questions.length > 10 && (
              <p className="text-center text-sm text-muted-foreground mt-4">
                Showing 10 of {questions.length} questions
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
