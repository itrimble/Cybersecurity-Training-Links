import { useState } from "react";
import { ChevronRight, ChevronLeft, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { quizQuestions, calculateQuizResults } from "@/data/quiz";
import { careers } from "@/data/careers";

export function CareerQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const getResults = () => {
    const results = calculateQuizResults(answers);
    return results.slice(0, 3).map((result) => {
      const career = careers.find((c) => c.id === result.careerId);
      return { ...result, career };
    });
  };

  if (showResults) {
    const topResults = getResults();

    return (
      <section className="py-20 md:py-32 relative" id="quiz">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            <div className="cyber-card p-8">
              <div className="text-center mb-8">
                <span className="section-label">[ QUIZ RESULTS ]</span>
                <h2 className="text-2xl md:text-3xl font-bold mt-2">
                  Your Top Career Matches
                </h2>
              </div>

              <div className="space-y-4 mb-8">
                {topResults.map((result, index) => (
                  <div
                    key={result.careerId}
                    className={`p-4 border ${
                      index === 0
                        ? "border-primary bg-primary/5"
                        : "border-border"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{result.career?.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          {index === 0 && (
                            <span className="px-2 py-0.5 text-xs font-mono bg-primary text-primary-foreground">
                              BEST MATCH
                            </span>
                          )}
                          <span className="text-xs text-muted-foreground">
                            {result.score}/{quizQuestions.length} matches
                          </span>
                        </div>
                        <h3 className="font-semibold">{result.career?.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {result.career?.description}
                        </p>
                        <p className="text-sm text-primary font-mono mt-2">
                          {result.career?.salaryRange}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Button variant="outline" onClick={handleReset} className="flex-1">
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Retake Quiz
                </Button>
                <Button className="flex-1">
                  View All Careers
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <section className="py-20 md:py-32 relative" id="quiz">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-8">
            <span className="section-label">[ CAREER QUIZ ]</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">
              Find Your <span className="text-primary">Perfect Path</span>
            </h2>
            <p className="text-muted-foreground mt-2">
              Answer 5 questions to discover your ideal cybersecurity career
            </p>
          </div>

          <div className="cyber-card p-8">
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">
                  Question {currentQuestion + 1} of {quizQuestions.length}
                </span>
                <span className="text-primary font-mono">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} />
            </div>

            {/* Question */}
            <h3 className="text-lg font-semibold mb-6">{question.question}</h3>

            {/* Options */}
            <div className="space-y-3 mb-8">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`w-full p-4 text-left border transition-colors ${
                    answers[currentQuestion] === index
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <span className="text-sm">{option.text}</span>
                </button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentQuestion === 0}
                className="flex-1"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button
                onClick={handleNext}
                disabled={answers[currentQuestion] === undefined}
                className="flex-1"
              >
                {currentQuestion === quizQuestions.length - 1 ? "See Results" : "Next"}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
