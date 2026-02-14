import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { coursePreviews } from "@/data/courses";

interface SurveyOption {
  value: string;
  label: string;
  description: string;
}

interface SurveyStep {
  id: string;
  question: string;
  options: SurveyOption[];
}

const surveySteps: SurveyStep[] = [
  {
    id: "experience",
    question: "What's your cybersecurity experience level?",
    options: [
      {
        value: "new",
        label: "New to Cybersecurity",
        description: "Looking to break into the field",
      },
      {
        value: "it-transitioning",
        label: "IT Professional Transitioning",
        description: "Have IT experience, want to specialize in security",
      },
      {
        value: "security-pro",
        label: "Security Professional",
        description: "Already working in cybersecurity",
      },
      {
        value: "manager",
        label: "Manager / Team Lead",
        description: "Leading or building a security team",
      },
    ],
  },
  {
    id: "challenge",
    question: "What's your biggest challenge right now?",
    options: [
      {
        value: "where-to-start",
        label: "Where to Start",
        description: "Not sure what path or skills to focus on",
      },
      {
        value: "budget",
        label: "Limited Budget",
        description: "Need affordable training or tools",
      },
      {
        value: "time",
        label: "Finding Time",
        description: "Balancing learning with work/life",
      },
      {
        value: "practice",
        label: "Hands-on Practice",
        description: "Need real-world experience",
      },
    ],
  },
  {
    id: "goal",
    question: "What's your primary goal?",
    options: [
      {
        value: "first-job",
        label: "Land My First Security Job",
        description: "Break into the industry",
      },
      {
        value: "certification",
        label: "Get Certified",
        description: "Earn industry certifications",
      },
      {
        value: "advance",
        label: "Advance My Career",
        description: "Level up to senior roles",
      },
      {
        value: "train-team",
        label: "Train My Team",
        description: "Upskill my organization",
      },
    ],
  },
];

interface CourseRecommendation {
  course: typeof coursePreviews[0];
  reason: string;
}

function getRecommendation(answers: Record<string, string>): CourseRecommendation {
  const { experience, challenge, goal } = answers;

  // Logic for course recommendations based on survey answers
  if (experience === "new" || goal === "first-job") {
    return {
      course: coursePreviews.find((c) => c.id === "career-jumpstart")!,
      reason: "Perfect for getting started and landing your first role",
    };
  }

  if (challenge === "budget" || (experience === "it-transitioning" && challenge === "where-to-start")) {
    return {
      course: coursePreviews.find((c) => c.id === "budget-soc")!,
      reason: "Learn to run effective security ops without breaking the bank",
    };
  }

  if (experience === "manager" || goal === "train-team") {
    return {
      course: coursePreviews.find((c) => c.id === "ai-governance")!,
      reason: "Lead AI security initiatives and governance programs",
    };
  }

  if (experience === "security-pro" && (goal === "advance" || goal === "certification")) {
    return {
      course: coursePreviews.find((c) => c.id === "ai-security-practitioner")!,
      reason: "Advanced skills for experienced practitioners",
    };
  }

  // Default recommendation
  return {
    course: coursePreviews.find((c) => c.id === "insider-threat")!,
    reason: "Build essential insider threat detection skills",
  };
}

export function QuickSurveySection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isComplete, setIsComplete] = useState(false);

  const handleSelect = (value: string) => {
    const step = surveySteps[currentStep];
    const newAnswers = { ...answers, [step.id]: value };
    setAnswers(newAnswers);

    if (currentStep < surveySteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsComplete(false);
  };

  if (isComplete) {
    const recommendation = getRecommendation(answers);

    return (
      <section className="py-20 md:py-32 relative bg-card/30" id="survey">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            <div className="cyber-card p-8 text-center">
              <div className="icon-box mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Your Recommended Course
              </h2>
              <p className="text-muted-foreground mb-8">{recommendation.reason}</p>

              {/* Recommended course card */}
              <div className="bg-background/50 border border-primary/30 rounded-lg p-6 mb-8 text-left">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary">
                      {recommendation.course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {recommendation.course.subtitle}
                    </p>
                  </div>
                  <span className="text-2xl font-bold">
                    ${recommendation.course.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {recommendation.course.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {recommendation.course.level}
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {recommendation.course.duration}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="cyber-button"
                  onClick={() => {
                    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" onClick={handleReset}>
                  Take Again
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const step = surveySteps[currentStep];
  const progress = ((currentStep + 1) / surveySteps.length) * 100;

  return (
    <section className="py-20 md:py-32 relative bg-card/30" id="survey">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-8">
            <span className="section-label">[ FIND YOUR PATH ]</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">
              Get a <span className="text-primary">Personalized</span> Recommendation
            </h2>
            <p className="text-muted-foreground mt-2">
              Answer 3 quick questions to find the right course for you.
            </p>
          </div>

          <div className="cyber-card p-8">
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>
                  Step {currentStep + 1} of {surveySteps.length}
                </span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-2 bg-background rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <h3 className="text-xl font-bold mb-6 text-center">{step.question}</h3>

            {/* Options */}
            <div className="space-y-3">
              {step.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  className="w-full p-4 text-left border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all group"
                >
                  <div className="font-medium group-hover:text-primary transition-colors">
                    {option.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {option.description}
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation */}
            {currentStep > 0 && (
              <div className="mt-6 pt-6 border-t border-border">
                <Button variant="ghost" size="sm" onClick={handleBack}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
