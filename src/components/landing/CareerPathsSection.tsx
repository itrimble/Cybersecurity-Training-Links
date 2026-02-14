import { useState } from "react";
import { ExternalLink, ChevronRight, ChevronLeft, RotateCcw, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { careers, careerCategories, type Career } from "@/data/careers";
import { quizQuestions, calculateQuizResults } from "@/data/quiz";

export function CareerPathsSection() {
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [showAllCareers, setShowAllCareers] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const filteredCareers = filter === "all"
    ? careers
    : careers.filter((c) => c.category === filter);

  const displayedCareers = showAllCareers ? filteredCareers : filteredCareers.slice(0, 6);

  // Quiz handlers
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
    setShowQuiz(false);
  };

  const getResults = () => {
    const results = calculateQuizResults(answers);
    return results.slice(0, 3).map((result) => {
      const career = careers.find((c) => c.id === result.careerId);
      return { ...result, career };
    });
  };

  const question = quizQuestions[currentQuestion];

  return (
    <section className="py-20 md:py-32 relative bg-card/50" id="careers">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="section-label">[ CAREER PATHS ]</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore <span className="text-primary">12 Career Paths</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find your ideal role in cybersecurity with detailed career guides,
              required skills, and recommended certifications.
            </p>
          </div>

          {/* Quiz card - inline expandable */}
          <div className="mb-8">
            {!showQuiz ? (
              <button
                onClick={() => setShowQuiz(true)}
                className="w-full cyber-card p-6 text-left hover:border-primary/50 transition-colors group flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="icon-box bg-accent/10 border-accent/30">
                    <Sparkles className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      Not sure where to start? Take the Career Quiz
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      5 questions to discover your ideal cybersecurity role
                    </p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
            ) : showResults ? (
              <div className="cyber-card p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold">Your Top Career Matches</h3>
                </div>
                <div className="space-y-4 mb-6">
                  {getResults().map((result, index) => (
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
                          </div>
                          <h4 className="font-semibold">{result.career?.title}</h4>
                          <p className="text-sm text-primary font-mono mt-1">
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
                  <Button onClick={() => { handleReset(); }} className="flex-1">
                    Browse All Careers
                  </Button>
                </div>
              </div>
            ) : (
              <div className="cyber-card p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold">Career Quiz</h3>
                  <button
                    onClick={() => setShowQuiz(false)}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Close
                  </button>
                </div>
                {/* Progress bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">
                      Question {currentQuestion + 1} of {quizQuestions.length}
                    </span>
                    <span className="text-primary font-mono">{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} />
                </div>

                {/* Question */}
                <h4 className="text-lg font-semibold mb-6">{question.question}</h4>

                {/* Options */}
                <div className="space-y-3 mb-6">
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
            )}
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("all")}
            >
              All Paths
            </Button>
            {Object.entries(careerCategories).map(([key, { label }]) => (
              <Button
                key={key}
                variant={filter === key ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(key)}
              >
                {label}
              </Button>
            ))}
          </div>

          {/* Career grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedCareers.map((career) => (
              <button
                key={career.id}
                onClick={() => setSelectedCareer(career)}
                className="cyber-card p-6 text-left hover:border-primary/50 transition-colors group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{career.icon}</span>
                  <span className={`text-xs font-mono ${careerCategories[career.category].color}`}>
                    {career.level}
                  </span>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {career.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {career.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-primary font-mono">{career.salaryRange}</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </button>
            ))}
          </div>

          {/* Show more button */}
          {filteredCareers.length > 6 && (
            <div className="text-center mt-8">
              <Button
                variant="outline"
                onClick={() => setShowAllCareers(!showAllCareers)}
              >
                {showAllCareers ? (
                  <>Show Less</>
                ) : (
                  <>
                    View All {filteredCareers.length} Careers
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          )}

          {/* Career detail modal */}
          <Dialog open={!!selectedCareer} onOpenChange={() => setSelectedCareer(null)}>
            <DialogContent className="max-h-[90vh] overflow-y-auto">
              {selectedCareer && (
                <>
                  <DialogHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-4xl">{selectedCareer.icon}</span>
                      <div>
                        <DialogTitle className="text-xl">{selectedCareer.title}</DialogTitle>
                        <DialogDescription className="text-primary font-mono">
                          {selectedCareer.salaryRange}
                        </DialogDescription>
                      </div>
                    </div>
                  </DialogHeader>

                  <div className="space-y-6">
                    <p className="text-muted-foreground">{selectedCareer.description}</p>

                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Required Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCareer.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-xs bg-secondary text-secondary-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Certifications */}
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Recommended Certifications</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCareer.certifications.map((cert) => (
                          <span
                            key={cert}
                            className="px-2 py-1 text-xs bg-primary/10 text-primary border border-primary/20"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Daily Tasks */}
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Daily Tasks</h4>
                      <ul className="space-y-1">
                        {selectedCareer.dailyTasks.map((task) => (
                          <li key={task} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary">•</span>
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Career Progression */}
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Career Progression</h4>
                      <div className="flex flex-wrap items-center gap-2">
                        {selectedCareer.careerProgression.map((stage, index) => (
                          <span key={stage} className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">{stage}</span>
                            {index < selectedCareer.careerProgression.length - 1 && (
                              <ChevronRight className="h-3 w-3 text-primary" />
                            )}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Resources */}
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Learning Resources</h4>
                      <div className="space-y-2">
                        {selectedCareer.resources.map((resource) => (
                          <a
                            key={resource.name}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-primary hover:underline"
                          >
                            <ExternalLink className="h-3 w-3" />
                            {resource.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
